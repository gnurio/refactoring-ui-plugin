---
name: design-button-hierarchy
description: Create clear primary/secondary/tertiary action distinctions
domain: ui-design
skill-type: generative
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies:
  - 03-build-color-palette
---

# Skill: Design Button Hierarchy

## Purpose
Create clear distinctions between primary, secondary, and tertiary actions so users know which action to take.

## Type
Generative + Evaluative

## Input
- List of actions/buttons needed
- Relative importance of each action (primary, secondary, tertiary)
- Context (form, modal, page, toolbar)

## Output
- Button style specifications for each level
- Pass/Fail assessment of existing button hierarchy

## Transformation Performed
Maps action importance to visual treatment: primary = filled brand color, secondary = outline or subtle (including grey solid), tertiary = text-only or link style.

## Decision Criteria

### PASS (Good Button Hierarchy)
- **One clear primary action** per screen/section (filled, high contrast, brand color)
- **Secondary actions** visually subordinate (outlined, ghost, or lower contrast solid including grey)
- **Tertiary actions** minimal (text link or subtle)
- Clear visual distinction between levels (not subtle 10% differences)
- Destructive actions (delete) use red but don't compete with primary

### FAIL (Poor Button Hierarchy)
- Multiple buttons with equal visual weight
- Primary action not obvious
- Very light grey (200) secondary looks disabled
- Destructive actions draw more attention than primary
- All buttons filled with same color

## Button Style Patterns

| Level | Background | Border | Text | Use Case |
|-------|------------|--------|------|----------|
| **Primary** | Brand color (solid) | None | White/light | Main CTA, save, submit |
| **Secondary** | Grey (solid) or transparent | Brand color (if outline) | Brand color or grey | Alternative action, cancel |
| **Tertiary** | Transparent | None | Brand color or gray | Optional actions, learn more |
| **Destructive** | Red | None | White | Delete, remove (not competing) |
| **Disabled** | Gray 200 | None | Gray 400 | Cannot proceed |

## Visual/UX Signals Used
1. **Fill vs outline**: Filled = primary, outline = secondary
2. **Color saturation**: More saturated = more important
3. **Size**: Primary can be slightly larger
4. **Position**: Primary often on right or bottom (reading pattern)

## Common Failure Modes

| Failure | Description | Fix |
|---------|-------------|-----|
| **Button Battle** | Save and Cancel both filled brand | Make Cancel outline or grey solid |
| **Gray Button Confusion** | Very light grey (200) secondary looks disabled | Use grey 400-500 or outline, not near-white grey |
| **Red Alert** | Delete button more prominent than primary | Make delete text-only or smaller |
| **Primary Overload** | 3+ "primary" buttons | Choose one primary, demote others |
| **Invisible Tertiary** | Text links same color as body | Use brand color or underline |

## Prerequisites
- Visual hierarchy established
- Color palette defined

## Dependencies
- `build-color-palette` (needs brand and semantic colors)
- `establish-visual-hierarchy` (buttons are part of hierarchy)

## Refactoring UI References
- "Make primary actions obvious"
- "Destructive actions shouldn't dominate"
- "Secondary actions should be clear but not prominent - outline styles or lower contrast background colors are great options"

## Example Assessment

**Input:** Modal with "Save Changes" (filled blue), "Cancel" (filled grey), "Delete" (filled red)

**Evaluation:** PARTIAL
- Cancel: Grey filled is acceptable secondary treatment (lower contrast solid)
- Delete: Filled red competes with Save (should be text red)
- Issue: Two actions with solid fills competing

**Recommendation:**
- Save: Keep filled blue (primary)
- Cancel: Grey filled is acceptable, but could be outline for clearer distinction
- Delete: Change to text red (destructive shouldn't compete)
