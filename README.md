# Refactoring UI Skills

Ten structured AI skills for evaluating and improving UI designs — covering visual hierarchy, typography, color, spacing, buttons, clutter, empty states, shadows, contrast, and grouping. Use individual skills for targeted fixes or invoke the `meta-refactor-ui` orchestrator for a full design pass.

[![Skills](https://img.shields.io/badge/skills-10-blue)](./skills.json)
[![Platforms](https://img.shields.io/badge/platforms-Claude%20%7C%20Codex%20%7C%20Cursor-blueviolet)](./PLATFORM_GUIDE.md)

> **Attribution:** These skills are based on the principles and methodology in
> [*Refactoring UI*](https://refactoringui.com/) by Adam Wathan and Steve Schoger
> (© Tailwind Labs Inc.). This repository is an independent AI skill implementation
> and is not affiliated with or endorsed by Tailwind Labs.

## Overview

This plugin packages 10 focused UI design skills plus a `refactor-ui` meta-skill that runs a full design pass. The skills cover visual hierarchy, typography, color, spacing, button hierarchy, visual clutter, empty states, shadows, contrast, and grouping.

## Quick Start

### Claude Code
```bash
/refactor-ui --design="path/to/design.md"
/establish-visual-hierarchy --input="design-description"
```

### Codex
```bash
@refactor-ui --design="path/to/design.md"
@apply-typography-scale --context="marketing"
```

### Cursor
```bash
/refactor-ui evaluate --file="design.md"
/refactor-ui fix --issues="visual-hierarchy"
```

See [PLATFORM_GUIDE.md](./PLATFORM_GUIDE.md) for platform-specific installation and usage.

## Skills

| # | Skill | Purpose | Type |
|---|-------|---------|------|
| 01 | [Establish Visual Hierarchy](skills/01-establish-visual-hierarchy/SKILL.md) | Determine what draws attention first | Evaluative |
| 02 | [Apply Typography Scale](skills/02-apply-typography-scale/SKILL.md) | Create hierarchy with font sizes, weights, and colors | Generative |
| 03 | [Build Color Palette](skills/03-build-color-palette/SKILL.md) | Define grey, primary, and accent color scales | Generative |
| 04 | [Apply Consistent Spacing](skills/04-apply-consistent-spacing/SKILL.md) | Use systematic spacing and rhythm | Generative |
| 05 | [Design Button Hierarchy](skills/05-design-button-hierarchy/SKILL.md) | Separate primary, secondary, and tertiary actions | Generative |
| 06 | [Eliminate Visual Clutter](skills/06-eliminate-visual-clutter/SKILL.md) | Remove unnecessary decoration | Corrective |
| 07 | [Design Empty States](skills/07-design-empty-states/SKILL.md) | Create useful zero-content states | Generative |
| 08 | [Use Shadows Appropriately](skills/08-use-shadows-appropriately/SKILL.md) | Use elevation functionally | Corrective |
| 09 | [Manage Color Contrast](skills/09-manage-color-contrast/SKILL.md) | Preserve readability and accessibility | Evaluative |
| 10 | [Group Related Elements](skills/10-group-related-elements/SKILL.md) | Use proximity to show relationships | Generative |

## Repository Layout

```text
.
├── .claude-plugin/plugin.json
├── .codex-plugin/plugin.json
├── .cursor-plugin/plugin.json
├── adapters/
├── examples/
├── skills/
│   ├── 01-establish-visual-hierarchy/SKILL.md
│   ├── ...
│   └── meta-refactor-ui/SKILL.md
├── tests/
├── PLATFORM_GUIDE.md
├── README.md
├── SKILL.md
└── skills.json
```

## Development

Validate the skill layout:

```bash
bash tests/validate-skills.sh
```

Check platform detection:

```bash
node -e "console.log(require('./adapters/platform-adapter').getPlatformDisplayName())"
```

## License

All rights reserved. See [LICENSE](./LICENSE).

These skills are based on *Refactoring UI* by Adam Wathan and Steve Schoger (© Tailwind Labs Inc.).
This repository is not affiliated with or endorsed by Tailwind Labs.
