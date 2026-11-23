# World News — Monday 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Arik2779/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Arik2779/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

Entry for the make.fun bounty
[news-image-20261123](https://make.fun/bounty/news-image-20261123) — "Sum up
23 November's world news in one image".

## The image

A newspaper front page, masthead **WORLD NEWS**, dated **MONDAY 23 NOVEMBER
2026**, with four illustrated panels — one story each, across regions and
fields. Every story happened on 23 November 2026 or was first reported /
publicly claimed that day; sources are listed in `RESEARCH.md` in the build
folder (kept out of this repo) and summarised below.

| Panel | Story |
|-------|-------|
| 1 | **COP31 ends without a deal** — the UN climate talks in Antalya, Turkey, closed two days late (the longest COP ever) with no overall agreement: the EU and 130+ countries rejected the draft "Antalya Pact" because it named no fossil-fuel phase-out. |
| 2 | **Ukraine says its sea drones sank a Russian warship** — President Zelenskyy said on 23 Nov that Ukrainian sea drones sank the Russian corvette *Merkury* at Benghazi naval base, Libya, and hit the cargo ship *MV Angara*. (The attack was Sunday 22 Nov; the claim, the SBU video and the UN probe call are 23 Nov. The sinking itself is Kyiv's claim — hence "Ukraine says".) |
| 3 | **Asian chip stocks slide** — on Monday 23 Nov South Korea's Kospi closed down 3.31% (as much as ~5.8% intraday), Samsung −3.1%, SK Hynix −2.5%, as the AI-stock sell-off spread from Wall Street. |
| 4 | **Bangladesh: Hasina to be jailed if she returns** — Dhaka told Reuters on 23 Nov it will arrest and jail former prime minister Sheikh Hasina if she returns from India, and is seeking her extradition. |

## How it runs

`main.ts` (Node 22, standard library only) copies the image held in this
repository (`entry.png`, a 1024×1024 JPEG, 243,344 bytes) to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). It validates the file
first — non-empty, at most 1 MiB, PNG or JPEG magic bytes — and verifies the
copy byte-for-byte, so both runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
