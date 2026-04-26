---
name: manage-color-contrast
description: Ensure WCAG AA accessibility and readability
domain: ui-design
skill-type: evaluative
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies:
  - 03-build-color-palette
---

# Skill: Manage Color Contrast

## Purpose
Ensure text and interactive elements have sufficient contrast against their backgrounds for readability and accessibility.

## Type
Evaluative + Corrective

## Input
- Text colors and sizes
- Background colors
- UI element specifications

## Output
- Contrast ratio calculations
- Pass/Fail against WCAG standards
- Recommendations for fixes

## Transformation Performed
Calculates contrast ratios and ensures compliance with WCAG AA standards (4.5:1 for normal text, 3:1 for large text and UI components).

## Decision Criteria

### PASS (Good Contrast)
- **Normal text (< 18px)**: 4.5:1 minimum (WCAG AA)
- **Large text (≥ 18px bold or ≥ 24px)**: 3:1 minimum
- **UI components (buttons, inputs)**: 3:1 minimum for boundaries
- **Focus indicators**: 3:1 minimum against adjacent colors

### FAIL (Poor Contrast)
- Light gray text on white (< 4.5:1)
- White text on light colors
- Disabled states that look like active (too much contrast)
- Placeholder text same as input text

## Contrast Ratio Quick Reference

| Text Color on White | Ratio | Pass AA? |
|---------------------|-------|----------|
| #000000 (black) | 21:1 | ✓ |
| #333333 | 12.6:1 | ✓ |
| #666666 | 5.9:1 | ✓ |
| #757575 | 4.6:1 | ✓ (minimum) |
| #999999 | 2.8:1 | ✗ |
| #CCCCCC | 1.6:1 | ✗ |

## Common Failure Modes

| Failure | Description | Fix |
|---------|-------------|-----|
| **Light Gray Text** | #999 or lighter for body text | Use #666 minimum, #333 preferred |
| **Ghost Text** | Placeholder same as value | Make placeholder lighter (#999) |
| **Low-contrast Primary** | Brand color too light for white text | Darken brand color or use dark text |
| **Subtle Links** | Links barely different from text | Add underline or increase contrast |
| **Disabled Confusion** | Disabled buttons too prominent | Reduce to 30% opacity or use gray |
| **Icon Fade** | Icons too light to see | Match text color or use higher contrast |

## Prerequisites
- Color palette defined
- Typography scale defined

## Dependencies
- `build-color-palette` (gray scale needed)

## Refactoring UI References
- "Don't use grey text on colored backgrounds"
- "Ensure sufficient contrast"

## Example Assessment

**Input:** Body text #888888 on white background

**Evaluation:** FAIL
- Ratio: ~3.5:1
- Below 4.5:1 requirement

**Recommendation:**
Change to #666666 (5.9:1) minimum
Prefer #333333 or #1A1A1A for body text
