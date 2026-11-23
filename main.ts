// news-image-20261123 — entry program.
//
// Copies the front-page image held in this repository (entry.png) to the
// output directory the harness requests. No network, no randomness, no
// timestamps: the same input bytes always produce the same output bytes.
//
// The image is a JPEG (magic FF D8) stored under the name entry.png, which
// the competition rules allow: the file type is told apart by its first
// bytes, not by its extension.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
if (bytes.length === 0) {
  throw new Error("entry.png is empty");
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}

// The image must be a whole PNG (89 50 4E 47) or JPEG (FF D8) by its
// first bytes. Ours is a JPEG.
const isPng =
  bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
if (!isPng && !isJpeg) {
  throw new Error("entry.png is neither PNG nor JPEG by its magic bytes");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Confirm the copy landed whole: same size, same first bytes.
const copied = readFileSync(target);
if (copied.length !== bytes.length) {
  throw new Error(
    `copied entry.png is ${copied.length} bytes, expected ${bytes.length}`,
  );
}
if (!copied.equals(bytes)) {
  throw new Error("copied entry.png differs from the source bytes");
}

console.log(
  `wrote ${target} (${statSync(target).size} bytes, ${
    isJpeg ? "JPEG" : "PNG"
  })`,
);
