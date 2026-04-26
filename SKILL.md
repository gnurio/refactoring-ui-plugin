# Refactoring UI Skills

Atomic UI/design decision-making skills extracted from the book *Refactoring UI* by Adam Wathan and Steve Schoger.

## Overview

These skills represent atomic transformations that can be composed to improve any interface design. Each skill has:
- Clear input/output specifications
- Decision criteria and visual signals
- Common failure modes
- Prerequisites and dependencies

## Core Skills (10)

### 1. Visual Hierarchy
| Skill | Purpose | Type |
|-------|---------|------|
| `01-establish-visual-hierarchy` | Determine what draws attention first, second, third | Evaluative + Generative |

### 2. Typography
| Skill | Purpose | Type |
|-------|---------|------|
| `02-apply-typography-scale` | Create hierarchy with limited font sizes | Generative + Evaluative |

### 3. Color
| Skill | Purpose | Type |
|-------|---------|------|
| `03-build-color-palette` | Create functional, limited color system | Generative + Evaluative |
| `09-manage-color-contrast` | Ensure accessibility and readability | Evaluative + Corrective |

### 4. Spacing & Layout
| Skill | Purpose | Type |
|-------|---------|------|
| `04-apply-consistent-spacing` | Use systematic spacing for rhythm | Generative + Evaluative |
| `10-group-related-elements` | Use proximity to show relationships | Generative + Evaluative |

### 5. Components
| Skill | Purpose | Type |
|-------|---------|------|
| `05-design-button-hierarchy` | Create clear action distinctions | Generative + Evaluative |
| `07-design-empty-states` | Create helpful zero-content states | Generative + Evaluative |

### 6. Polish & Details
| Skill | Purpose | Type |
|-------|---------|------|
| `06-eliminate-visual-clutter` | Remove unnecessary decorations | Corrective + Evaluative |
| `08-use-shadows-appropriately` | Add depth only when necessary | Corrective + Evaluative |

## Usage

Apply these skills in sequence:
1. Start with hierarchy (what matters most?)
2. Establish layout structure and spacing
3. Apply typography scale
4. Build color palette
5. Design components with proper hierarchy
6. Polish details (eliminate clutter, appropriate shadows)
7. Handle edge states (empty states, errors)
