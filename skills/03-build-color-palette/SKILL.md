---
name: build-color-palette
description: Create comprehensive palette with 8-10 greys, 5-10 primary, 5-10 accent shades
domain: ui-design
skill-type: generative
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies: []
---

# Skill: Build Color Palette

## Purpose
Create a comprehensive, systematic color palette with sufficient shades to build realistic interfaces (8-10 greys, 5-10 primary shades, 5-10 accent shades).

## Type
Generative + Evaluative

## Input
- Brand color(s) or design mood/intent
- UI complexity (simple landing page vs. complex dashboard)
- Required semantic meanings (success, error, warning, info)
- Need for categorical colors (charts, calendars, tags)

## Output
- Color palette specification with multiple shades per color
- Role assignment for each shade
- Usage guidelines
- Pass/Fail assessment of existing palette

## Transformation Performed
Maps functional needs to a comprehensive palette organized into three categories (greys, primary, accents), each with 5-10 distinct shades.

## Decision Criteria

### PASS (Good Color Palette)
- **Greys: 8-10 shades** - For text, backgrounds, panels, form controls (majority of UI)
- **Primary: 5-10 shades** - One or two core colors for primary actions, active navigation
- **Accent: 5-10 shades each** - For semantic states (red, yellow, green), new features, categorization
- **Systematic shades**: Each color has light to dark variants defined upfront
- **Clear hierarchy**: Primary color defines overall look; accents used sparingly
- **Sufficient contrast**: All text meets WCAG AA (4.5:1 for normal, 3:1 for large)
- **Not using opacity**: Explicit hex values for all shades

### FAIL (Poor Color Palette)
- Too few greys (3-4 shades leading to compromises)
- Missing shades of primary color (can't create hover states, subtle backgrounds)
- Not enough accent colors for semantic states and categorization
- **Using opacity (rgba) instead of defined shades** (inconsistency)
- Missing systematic shade progression (arbitrary light/dark variants)
- Insufficient contrast for accessibility

## The Palette Structure

### Greys (8-10 shades)
The majority of your UI is grey. You need more than you think.

```
White / Near-white: #FFFFFF, #F9FAFB
Gray 100: #F3F4F6 - Subtle backgrounds
Gray 200: #E5E7EB - Borders, dividers
Gray 300: #D1D5DB - Disabled states
Gray 400: #9CA3AF - Placeholder text
Gray 500: #6B7280 - Secondary text
Gray 600: #4B5563 - Body text
Gray 700: #374151 - Strong text
Gray 800: #1F2937 - Headings
Gray 900: #111827 - Near-black text
```

Start with dark grey (not true black) and work up to white in steady increments.

### Primary Colors (5-10 shades)
One or two colors that define the overall look of your site.

```
Primary 50: Ultra-light (alert backgrounds)
Primary 100: Very light (subtle backgrounds)
Primary 200-300: Light (hover states)
Primary 400-500: Base (buttons, links)
Primary 600-700: Dark (hover text, emphasis)
Primary 800-900: Very dark (text on light)
```

### Accent Colors (5-10 shades each)
Used sparingly to grab attention or communicate meaning.

| Color | Use Case |
|-------|----------|
| **Red** | Destructive actions, errors, warnings |
| **Yellow/Amber** | New features, caution, highlights |
| **Green** | Success, positive trends, confirmation |
| **Teal/Pink/Purple** | Feature highlights, categorization, calendars |

Each accent needs 5-10 shades just like primary colors.

## Visual/UX Signals Used
1. **Shade progression**: Steady increments from light to dark
2. **Grey dominance**: Greys are the foundation; colors accent
3. **Semantic meaning**: Red = danger, Green = success, Yellow = warning/feature
4. **Contrast ratios**: Higher contrast = more importance or readability
5. **Sparingly used**: Primary and accents used intentionally, not everywhere

## Common Failure Modes

| Failure | Description | Fix |
|---------|-------------|-----|
| **5-Color Generator** | Using only 5 hex codes for entire UI | Build comprehensive palette with 8-10 greys, 5-10 primary shades, 5-10 accent shades |
| **Too Few Greys** | 3-4 grey shades leading to compromises | Expand to 8-10 greys from near-white to near-black |
| **Opacity for Shades** | Using `rgba()` to create lighter/darker | Define explicit hex shades upfront for consistency |
| **Missing Hover States** | No lighter/darker variants for interactions | Each interactive color needs 5-10 shades |
| **Missing Semantic Colors** | Only brand colors, no red/yellow/green | Add accent colors for errors, warnings, success |
| **Too Few Accent Shades** | Only one shade of red/green/yellow | Each accent needs 5-10 shades for flexibility |
| **True Black Text** | Using #000000 (harsh) | Start with #111827 or #1F2937 |

## Prerequisites
- Brand guidelines or base color
- Understanding of UI states (errors, success, hover, etc.)
- Knowledge of categorical needs (charts, tags, etc.)

## Dependencies
- `establish-visual-hierarchy` (colors support hierarchy)
- `manage-color-contrast` (accessibility requirement)

## Refactoring UI References
- "You need more colors than you think"
- "Define your shades up front"
- "Greys are the majority of your UI"
- "Don't use opacity to create lighter colors"
- "Build a comprehensive palette, not 5 hex codes"

## Shade Definition Method

For each color, define shades by adjusting lightness in HSL:
- Ultra-light: 95-98% lightness (backgrounds)
- Light: 80-90% lightness (hover backgrounds)
- Base: 45-55% lightness (buttons, links)
- Dark: 20-35% lightness (text, emphasis)
- Very dark: 10-15% lightness (headings)

## Example Assessment

**Input:** Palette with only: Brand Blue #0066FF, Light Blue #E6F2FF, White, Grey #999999, Black

**Evaluation:** FAIL
- Only 2 blue shades (need 5-10)
- Only 1 grey (need 8-10)
- Missing semantic colors (red, yellow, green)
- Missing accent shades

**Recommendation:**
Build comprehensive palette:

**Greys (10):**
#F9FAFB, #F3F4F6, #E5E7EB, #D1D5DB, #9CA3AF, #6B7280, #4B5563, #374151, #1F2937, #111827

**Primary Blue (8):**
#EFF6FF, #DBEAFE, #BFDBFE, #93C5FD, #60A5FA, #3B82F6, #2563EB, #1D4ED8

**Accents (7-8 each):**
- Red: #FEF2F2... #991B1B (for errors, destructive)
- Yellow: #FFFBEB... #92400E (for warnings, new features)
- Green: #F0FDF4... #166534 (for success, positive)

Total: 10 greys + 8 primary + 21 accents = 39 shades organized systematically
