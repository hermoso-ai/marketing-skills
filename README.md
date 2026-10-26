# Marketing skills for AI agents

[![Validate skills](https://github.com/hermoso-ai/marketing-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/hermoso-ai/marketing-skills/actions/workflows/validate.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

Seven [Agent Skills](https://agentskills.io) that teach Claude, Codex, Cursor, Gemini CLI or any other agent how to do
real marketing work: write hooks and UGC scripts that do not read as ads, write copy that fits each platform's fields,
research competitors' ads for free, tear down a competitor's playbook, read a paid-ads account like an analyst, and get
every size and character limit right.

**Every skill works on its own.** No account, no API key, no product to install. They are plain Markdown methods your
agent loads when the task matches.

| Skill | What your agent can do with it |
|---|---|
| [`ad-hooks`](skills/ad-hooks/SKILL.md) | Write the first two seconds of an ad with 17 named hook mechanics, and pick the right one for a product |
| [`ugc-ad-scripts`](skills/ugc-ad-scripts/SKILL.md) | Write creator-style video scripts: 8 formats beyond the testimonial, word budgets per length, beat-by-beat structure, sound-off and AI-voice rules |
| [`ad-copy-frameworks`](skills/ad-copy-frameworks/SKILL.md) | PAS, AIDA, BAB, FAB, 4U and three more, with every ad platform's field lengths and how CJK, emoji and links count; 15 distinct Google headlines |
| [`ad-library-research`](skills/ad-library-research/SKILL.md) | Use the free public ad libraries (Meta, Google, TikTok, LinkedIn, Snap) and turn what is running into angles |
| [`ad-teardown`](skills/ad-teardown/SKILL.md) | Turn a competitor's ads into a playbook: 7 hook types, themes weighted by run-length, white space, counter-briefs, a "never say" list |
| [`campaign-analyst`](skills/campaign-analyst/SKILL.md) | Turn 14 days of campaign results into scale, pause, fix and test-next, with a data floor that refuses a verdict on too little data |
| [`social-media-specs`](skills/social-media-specs/SKILL.md) | Caption limits counted the way each platform counts, image and video sizes per placement, safe zones on vertical video |

## Install

**Any agent, with the open skills CLI** ([skills.sh](https://skills.sh)):

```bash
npx skills add hermoso-ai/marketing-skills
```

**Claude Code**, as a plugin:

```
/plugin marketplace add hermoso-ai/marketing-skills
/plugin install marketing-skills@marketing-skills
```

**ClawHub / OpenClaw**, one skill at a time:

```bash
clawhub install ad-teardown
```

**By hand**: copy any folder from [`skills/`](skills) into your agent's skills directory (for Claude Code,
`~/.claude/skills/` or `.claude/skills/` in a project). Each folder is one `SKILL.md`.

## Try it

Once installed, ask in plain words. The agent picks the skill from its description:

- "Write three UGC scripts for our standing desk, 20 seconds each, in different formats."
- "Here are 15 ads from a competitor's Meta Ad Library page. Tear them down and tell me where the gap is."
- "Write 15 Google responsive search ad headlines for a dog-walking app."
- "Here's our last two weeks of Meta and Google results as a CSV. What should I change on Monday?"
- "Will this caption fit on X, Threads and Bluesky?"

## What makes these different

- **Methods, not prompts.** Each skill is the procedure a good marketer follows, with the checks that catch the usual
  mistakes: an analysis that judges a campaign on 3 conversions, a teardown that describes a video nobody watched, a
  script with more words than the video has seconds.
- **Numbers with sources.** Field lengths and sizes come from the platforms' own documentation; the full dataset, with a
  source link per row, is the open package [social-media-specs](https://github.com/hermoso-ai/social-media-specs).
- **Honest about limits.** The research skill keeps to the platforms' terms (a person in a browser, never bulk
  scraping), and the analyst never treats a metric a platform did not report as zero.

## Contributing

Pull requests are welcome: a sharper rule, a missing platform, a number that moved. Keep each skill standalone and
practical, cite the platform page for any number, and run `node scripts/validate.mjs` before you open the PR.

## License

MIT. Made by [Hermoso](https://hermoso.ai), the AI marketing agent and AI ad generator, from the methods it uses to
research, write, make and analyse ads.
