---
name: apply-consistent-spacing
description: Use systematic spacing with 25% minimum jumps, start with excess whitespace
domain: ui-design
skill-type: generative
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies: []
---

# Skill: Apply Consistent Spacing

## Purpose
Use a systematic spacing scale to create rhythm, group related elements, and separate distinct sections while starting with generous whitespace and removing as needed.

## Type
Generative + Evaluative

## Input
- UI layout or component structure
- Content grouping (what belongs together)
- Desired density (compact vs. airy)
- Base unit (default: 16px)

## Output
- Spacing scale specification
- Margin/padding values for each element
- Pass/Fail assessment of existing spacing

## Transformation Performed
Maps spatial relationships to a systematic spacing scale with minimum 25% differences between values, ensuring clear grouping and breathing room.

## Decision Criteria

### PASS (Good Spacing)
- Uses systematic scale with minimum 25% jumps between values (12px → 16px → 24px → 32px)
- Related elements have smaller gaps (4-16px within groups)
- Unrelated sections have larger gaps (24-64px between groups)
- **More space around groups than within groups** (ambiguous spacing avoided)
- Consistent internal padding (cards, buttons, inputs)
- White space creates breathing room (doesn't fill entire screen width)
- Uses whitespace instead of borders for separation

### FAIL (Poor Spacing)
- Arbitrary values without system (13px, 27px, 41px)
- Values too similar (<25% difference - can't distinguish)
- Related elements too far apart (weakens grouping)
- Unrelated elements too close together (ambiguous relationships)
- **Equal spacing everywhere** (within groups = between groups)
- Content stretched to fill wide canvas unnecessarily
- Using borders when whitespace would suffice

## The Spacing Scale

### Systematic Scale (25% minimum jumps)
Base: 16px (browser default)
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
```

**Why these values:**
- 4px → 8px = 100% jump (small end needs bigger jumps)
- 8px → 12px = 50% jump
- 12px → 16px = 33% jump
- 16px → 24px = 50% jump
- 24px → 32px = 33% jump
- 32px → 48px = 50% jump
- 48px → 64px = 33% jump
- 64px → 96px = 50% jump

### Common Usage Patterns
| Spacing | Usage |
|---------|-------|
| 4px | Icon gaps, tight internal padding |
| 8px | Small component gaps, tight button padding |
| 12px | Input padding, component internal spacing |
| 16px | Standard gap, card padding |
| 24px | Section internal padding, larger gaps |
| 32px | Major section separation |
| 48-64px | Page section breaks |
| 96px | Hero sections, major page divisions |

## The Proximity Principle
- Elements closer together appear related
- Elements farther apart appear unrelated
- **More space around groups than within groups**
- Use spacing to show relationships without borders

## Key Principles

### 1. Start With Too Much Whitespace
Instead of adding space until something looks okay, start with way too much space and remove until it's right.

**Why:** Elements given minimum breathing room look "not actively bad" but not great. Starting with excess ensures adequate whitespace in the final design.

### 2. Avoid Ambiguous Spacing
Ensure there is **more space around the entire group** than within the group.

**Example - Form Labels:**
- ❌ Label margin-bottom: 12px, Input margin-bottom: 12px (equal = ambiguous)
- ✅ Label margin-bottom: 4px, Input margin-bottom: 24px (within < around = clear)

### 3. Don't Fill The Whole Screen
Just because you have 1200-1400px of canvas doesn't mean content should stretch to fill it.

- Give elements exactly the space they need
- If you have extra room, leave it as whitespace
- Paragraph max-width: 600px is fine even if nav is 1200px
- Shrink the canvas if designing small interfaces

### 4. Whitespace > Borders
Instead of using borders to separate elements:
- Add extra spacing between groups
- Use different background colors
- Use subtle box shadows (less distracting than borders)

## Visual/UX Signals Used
1. **Proximity**: Closer elements = related
2. **Ambiguity gap**: More space around groups than within
3. **Breathing room**: Generous space = cleaner, more polished
4. **Canvas utilization**: Don't stretch to fill; use what you need

## Common Failure Modes

| Failure | Description | Fix |
|---------|-------------|-----|
| **Arbitrary Values** | 15px here, 17px there | Use systematic scale exclusively |
| **Weak Grouping** | Equal spacing within and between groups | Make between-group spacing significantly larger |
| **Ambiguous Spacing** | Label and input have same margin | Reduce within-group, increase between-groups |
| **Border-Dependence** | Using borders instead of space | Increase gap, remove border |
| **Canvas Filling** | Content stretched to 1200px unnecessarily | Use only the space needed; let whitespace fill rest |
| **Minimal Breathing Room** | Adding just enough space to not look bad | Start with excess, remove until right |
| **Inconsistent Padding** | Some buttons 8px, others 12px | Pick one scale value, apply everywhere |

## Prerequisites
- Content grouped by relationship
- Visual hierarchy established

## Dependencies
- `establish-visual-hierarchy` (spacing reinforces hierarchy)
- `group-related-elements` (proximity shows relationships)

## Refactoring UI References
- "Start with too much white space"
- "Establish a spacing and sizing system" (25% minimum jumps)
- "Avoid ambiguous spacing"
- "Don't fill the whole screen"
- "Use fewer borders"
- "White space should be removed, not added"

## Example Assessment

**Input:** Form with: Title (margin-bottom: 16px), Label (margin-bottom: 12px), Input (margin-bottom: 12px), next Label (margin-top: 12px)

**Evaluation:** FAIL - Ambiguous spacing
- Label to Input: 12px
- Input to next Label: 12px
- No clear grouping - user can't tell which label belongs to which input

**Recommendation:**
- Title margin-bottom: 24px (separate section)
- Label margin-bottom: 4px (tight coupling to input)
- Input margin-bottom: 24px (clear separation to next group)
- Result: Within-group (4px) << Between-groups (24px) = Clear relationship

**Before:**
```
Label A
[Input A]
Label B    <- Ambiguous: belongs to A or B?
[Input B]
```

**After:**
```
Label A
[Input A]

Label B    <- Clearly belongs to B
[Input B]
```
