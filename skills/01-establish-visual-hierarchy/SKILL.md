---
name: establish-visual-hierarchy
description: Determine what UI element draws attention first, second, third using size, weight, color, and de-emphasis strategies
domain: ui-design
skill-type: evaluative
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies: []
input:
  - design_description: string
  - element_list: array of {element, importance}
output:
  - assessment: PASS | FAIL
  - ranked_elements: array
  - recommendations: array of strings
---

# Skill: Establish Visual Hierarchy

## Purpose
Determine what UI element should draw attention first, second, third. Visual hierarchy controls the order in which users process information using size, weight, color, and de-emphasis strategies.

## Quick Reference

| Strategy | When to Use |
|----------|-------------|
| **Size + Weight** | Primary headlines, important CTAs |
| **Color Contrast** | Secondary content, supporting text |
| **De-emphasize** | When primary isn't standing out |
| **Weight/Contrast Balance** | Icons next to text, borders |

## Execution Workflow

### Step 1: Identify Primary Element
- What is the single most important thing on this screen?
- What action should the user take?
- What information is critical?

### Step 2: Assess Current Hierarchy
Check visual weight of each element:
- **Size**: Larger = more attention
- **Weight**: Bolder = more importance
- **Color**: Higher contrast = more prominent
- **Whitespace**: More surrounding space = stands out

### Step 3: Apply Multi-Factor Hierarchy
Don't rely on size alone:
1. Use **weight** (600-700) for emphasis
2. Use **color** (grey scale) to de-emphasize
3. Keep sizes reasonable

### Step 4: De-emphasize Competitors
If primary element isn't standing out:
- Reduce contrast of surrounding elements
- Use softer colors for secondary content
- Remove unnecessary backgrounds

## Decision Criteria

### PASS
- Most important element has highest visual weight
- Hierarchy uses weight/color, not just size
- Surrounding elements are subdued
- Clear visual path: primary → secondary → tertiary

### FAIL
- Relying solely on font size
- Everything equally emphasized
- Critical elements buried
- Decorative elements competing

## Common Patterns

### Pattern: Marketing Page Hero
```
H1: 48px, weight 700, dark    ← Primary
CTA: 16px, solid brand color  ← Secondary
Body: 16px, weight 400, grey  ← Tertiary
```

### Pattern: Dashboard Card
```
Metric: 32px, weight 700      ← Primary
Label: 14px, weight 400, grey ← Secondary
Action: Text link, brand color ← Tertiary
```

## Anti-Patterns

| Anti-Pattern | Why It Fails | Fix |
|--------------|--------------|-----|
| Logo larger than headline | Brand over value | Reduce logo, increase headline |
| 60px headline, 12px body | Size extremes | Use 40px + weight, 16px body |
| All bold text | Nothing stands out | Use weight hierarchy |
| Large section titles | Content buried | Make titles smaller than content |

## References

- `references/size-isnt-everything.md`
- `references/emphasize-by-de-emphasizing.md`
- `references/ignore-document-hierarchy.md`

## Examples

See `examples/visual-hierarchy/` for before/after cases.
