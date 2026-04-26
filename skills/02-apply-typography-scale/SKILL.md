---
name: apply-typography-scale
description: Create clear typographic hierarchy using hand-crafted font sizes, weights, and colors
domain: ui-design
skill-type: generative
version: 1.0.0
prerequisites:
  - 01-establish-visual-hierarchy
dependencies: []
input:
  - content_structure: array
  - base_size: number (default 16)
  - context: marketing | application | content
output:
  - type_scale: array of sizes
  - weight_assignments: object
  - color_assignments: object
---

# Skill: Apply Typography Scale

## Purpose
Create clear typographic hierarchy using a hand-crafted set of font sizes, weights, and colors.

## Core Rules

1. **Hand-crafted, not mathematical** — Avoid modular scales with fractional pixels
2. **Use px or rem, never em** — Prevents compounding issues
3. **Minimum 25% jumps** — 16px → 20px (25%), not 16px → 18px (12.5%)
4. **Two weights only** — 400/500 normal, 600/700 bold
5. **Never < 400 for UI** — Too hard to read at small sizes

## Recommended Scales

### Marketing Page
```
Hero:     48-60px,  weight 700,  line-height 1.1
H1:       36-40px,  weight 700,  line-height 1.2
H2:       28-32px,  weight 600,  line-height 1.3
Body:     16-18px,  weight 400,  line-height 1.6
Small:    14px,     weight 400,  line-height 1.6
Caption:  12px,     weight 400,  line-height 1.5
```

### Application/Dense UI
```
H1:     30-36px,  weight 700
H2:     24px,     weight 600
H3:     20px,     weight 600
H4:     16px,     weight 600
Body:   14-16px,  weight 400
Small:  12-13px,  weight 400
```

## Line-Height Rules

**Inverse proportion to size:**
- Small text (12-14px): 1.6-1.7 (needs help finding next line)
- Body text (16px): 1.5-1.6
- Large headlines (30px+): 1-1.2 (needs less help)

## Line Length

- **Optimal**: 45-75 characters per line
- **Max-width**: 20-35em for paragraphs
- **Wide paragraphs**: Increase line-height to 1.8-2.0

## Decision Criteria

### PASS
- Scale uses a small set of intentional sizes with clear jumps between roles
- Type hierarchy combines size, weight, line-height, and color
- Body text remains readable across marketing, app, and content contexts
- Line length and line-height fit the reading context

### FAIL
- Scale relies on tiny increments that do not create hierarchy
- Font weights are too light for UI text
- Long-form text lines are too wide or cramped
- `em` sizing compounds unpredictably in nested elements

## Common Failure Modes

| Failure | Example | Fix |
|---------|---------|-----|
| **Em units** | `1.25em` parent, `0.875em` child = 17.5px | Use `px` or `rem` |
| **Micro-steps** | 16px, 18px, 20px | 16px, 20px, 28px |
| **Weight 300** | Light body text | Minimum 400 |
| **Long lines** | 100+ characters | Constrain to 35em |
| **Uniform line-height** | 1.5 for all | Vary by size |

## Examples

See `examples/typography-scale/` for scale implementations.

## References

- `references/hand-crafted-scales.md`
- `references/avoid-em-units.md`
- `references/line-height-proportion.md`
