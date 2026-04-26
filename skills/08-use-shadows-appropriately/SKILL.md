---
name: use-shadows-appropriately
description: Add depth only when functionally necessary (elevation, not decoration)
domain: ui-design
skill-type: corrective
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies: []
---

# Skill: Use Shadows Appropriately

## Purpose
Add depth and elevation only when functionally necessary, avoiding decorative shadows.

## Key Fix Applied (from Autoresearch)
Added nuance: Subtle shadows on cards are acceptable (less distracting than borders). Large decorative shadows on static elements are wrong.

## Type
Corrective + Evaluative

## Input
- UI element inventory
- Element purposes (static, interactive, overlay)
- Current shadow specifications

## Output
- Shadow usage recommendations
- Pass/Fail assessment

## Transformation Performed
Removes decorative shadows from static elements, reserves shadows for elevation layers (modals above content, dropdowns above page).

## Decision Criteria

### PASS (Appropriate Shadow Usage)
- **Small shadows on cards** (subtle, less distracting than borders) ✅
- **Modals/dialogs**: Large shadow (elevated above all content)
- **Dropdowns/menus**: Medium shadow (above page, below modals)
- **Cards**: Subtle or no shadow (flat design preferred)
- **Hover states**: Subtle shadow increase (affordance for clickability)
- **Static elements**: No shadow
- Consistent shadow system (2-3 levels max)

### FAIL (Inappropriate Shadow Usage)
- **Large decorative shadows on static cards**
- Heavy shadows on static content
- Inconsistent shadow values
- Decorative shadows that don't indicate elevation
- Shadows on text or icons

## Nuance (Key Insight)
Subtle shadows (small blur, low opacity) on cards are OK. The book recommends them as alternative to borders. Large, flashy shadows on static content are wrong.

## Shadow Elevation Scale

| Level | Use Case | CSS Example (approximate) |
|-------|----------|---------------------------|
| **None** | Static content, text, icons | `none` |
| **Subtle** | Cards (alternative to borders) | `0 2px 4px rgba(0,0,0,0.1)` |
| **Low** | Raised cards, buttons | `0 4px 6px rgba(0,0,0,0.1)` |
| **Medium** | Dropdowns, popovers, tooltips | `0 10px 15px rgba(0,0,0,0.1)` |
| **High** | Modals, dialogs, drawers | `0 20px 25px rgba(0,0,0,0.15)` |

## Shadow Principles

1. **Shadows indicate elevation** - Higher = closer to user
2. **Shadows indicate interactivity** - Clickable things can have shadow
3. **Shadows separate layers** - Modal casts shadow on page behind it
4. **Shadows should be subtle** - Good shadows are barely noticeable
5. **Consistency matters** - Same elevation = same shadow

## Common Failure Modes

| Failure | Description | Fix |
|---------|-------------|-----|
| **Shadow Carpet** | Every card has a shadow | Flatten static cards, subtle shadows OK |
| **Drop Shadow Abuse** | Heavy shadows on static elements | Reserve for elevation/interaction |
| **Inconsistent Depth** | Similar elements different shadows | Create 2-3 shadow levels, apply consistently |
| **Black Shadows** | Pure black shadows (harsh) | Use rgba with low opacity, tinted to brand |
| **No Modal Separation** | Modal doesn't feel above page | Increase shadow spread and blur |

## Prerequisites
- Visual hierarchy established
- Understanding of which elements are interactive

## Dependencies
- `eliminate-visual-clutter` (shadows often add clutter)

## Refactoring UI References
- "Use shadows to convey elevation"
- "Use a box shadow instead of hard borders - subtle shadows outline effectively without visual clutter"
- "Shadows should be subtle"

## Example Assessment

**Input:** Page with card shadows (`0 4px 6px rgba(0,0,0,0.1)`), button shadows (`0 2px 4px`), modal shadow (`0 4px 6px`), text with text-shadow

**Evaluation:** FAIL (cluttered)
- Cards don't need shadows (static content)
- Modal shadow same as cards (should be higher)
- Text shadow decorative

**Recommendation:**
- Remove card shadows OR use subtle (`0 2px 4px`)
- Remove text shadow
- Modal: `0 20px 25px rgba(0,0,0,0.15)`
- Buttons: Optional subtle hover shadow only
