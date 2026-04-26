---
name: eliminate-visual-clutter
description: Remove unnecessary borders, backgrounds, shadows, decorations
domain: ui-design
skill-type: corrective
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies:
  - 04-apply-consistent-spacing
---

# Skill: Eliminate Visual Clutter

## Purpose
Remove unnecessary visual elements (borders, backgrounds, shadows, decorations) that don't serve functional purposes.

## Type
Corrective + Evaluative

## Input
- Design screenshot or description
- Element inventory (borders, shadows, backgrounds, separators)

## Output
- Clutter assessment (what can be removed)
- Simplified design specification
- Pass/Fail rating

## Transformation Performed
Identifies and removes decorative elements that don't communicate meaning, using whitespace and contrast instead.

## Decision Criteria

### PASS (Clean Design)
- Every visual element serves a functional purpose
- Whitespace used instead of borders to separate
- No decorative shadows or gradients without purpose
- Backgrounds used sparingly (not every card needs one)
- Minimal separator lines

### FAIL (Cluttered Design)
- Borders on everything ("boxy" look)
- Shadows used decoratively
- Multiple separator lines between sections
- Background colors on every component
- Decorative elements that don't communicate meaning

## Elements to Question

| Element | Ask | Often Remove? |
|---------|-----|---------------|
| **Borders** | Does this need a border, or just space? | Yes, use margin instead |
| **Card backgrounds** | Does this need a box, or just whitespace? | Often, let space define groups |
| **Separators** | Does this need a line, or just more space? | Usually, increase gap instead |
| **Shadows** | Does this need depth, or is it decorative? | Often, flatten |
| **Background colors** | Is this color communicating something? | If purely decorative, remove |
| **Icons** | Does this icon add meaning? | If decorative only, remove |

## The Progression of Simplification

1. **Start with everything** (borders, shadows, backgrounds)
2. **Remove borders** → Use spacing instead
3. **Remove backgrounds** → Use whitespace to group
4. **Remove separators** → Increase space between sections
5. **Remove shadows** → Keep only for elevation (modals, dropdowns)
6. **Add back only what's needed** for hierarchy or clarity

## Visual/UX Signals Used
1. **Whitespace**: The most elegant separator
2. **Proximity**: Groups without borders
3. **Typography**: Hierarchy without decoration
4. **Contrast**: Emphasis without extra elements

## Common Failure Modes

| Failure | Description | Fix |
|---------|-------------|-----|
| **Border-itis** | Every element has a box around it | Remove 50%+ of borders, use space |
| **Shadow Spam** | Shadows on static elements | Reserve for hover states and modals |
| **Separator Overload** | Lines between every section | Remove half, double the space |
| **Background Soup** | Every card has a gray background | Use white with space, or subtle border |
| **Icon Explosion** | Icons on every label and button | Keep only when they add meaning |
| **Gradient Gone Wild** | Decorative gradients everywhere | Flatten or use one purposeful gradient |

## Prerequisites
- Spacing system in place
- Visual hierarchy established

## Dependencies
- `apply-consistent-spacing` (whitespace replaces borders)
- `establish-visual-hierarchy` (contrast replaces decoration)

## Refactoring UI References
- "Start with too much whitespace"
- "Don't use borders when you can use spacing"
- "Avoid boxy designs"
- "Less is more"

## Example Assessment

**Input:** Card with: border (1px gray), background (#f5f5f5), shadow (sm), title with icon, separator line, content, separator line, footer with icon and text

**Evaluation:** FAIL (cluttered)
- Border + background + shadow = overkill
- Two separator lines unnecessary
- Icons may be decorative

**Recommendation:**
- Remove background (use white)
- Remove shadow (static card doesn't need elevation)
- Keep border OR use generous padding
- Remove separator lines, increase section padding
- Evaluate icons for meaning, remove if decorative
