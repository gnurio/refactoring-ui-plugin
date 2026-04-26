---
name: design-empty-states
description: Create helpful, actionable zero-content states
domain: ui-design
skill-type: generative
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies:
  - 05-design-button-hierarchy
---

# Skill: Design Empty States

## Purpose
Create helpful, actionable empty/zero states that guide users forward instead of leaving them at a dead end.

## Type
Generative + Evaluative

## Input
- Context (what would be here normally)
- User state (first-time vs. cleared content)
- Available actions (what can the user do)

## Output
- Empty state design specification
- Copy recommendations
- Primary action to highlight
- Pass/Fail assessment

## Transformation Performed
Transforms blank screens into onboarding/guidance moments with context, explanation, and clear next steps.

## Decision Criteria

### PASS (Good Empty State)
- Explains what would be here (sets expectation)
- Tells user how to add content (clear instruction)
- Provides clear primary action button
- Uses appropriate illustration/icon (not generic)
- Friendly, helpful tone (not "No items found")
- Hides useless UI (tabs, filters that don't work without content)

### FAIL (Poor Empty State)
- Blank screen or just "No data"
- Technical error message as empty state
- No guidance on what to do next
- Generic illustration unrelated to context
- Dead end with no actions

## Empty State Components

1. **Illustration/Icon** (optional but helpful)
   - Relevant to the content type
   - Not generic "404" style
   - Can be simple icon or custom illustration

2. **Headline**
   - Friendly, explanatory
   - Not "Empty" or "No items"
   - Example: "No projects yet" or "Start your first campaign"

3. **Description**
   - Brief explanation of what this area is for
   - How to add content
   - Benefits of adding content

4. **Primary Action**
   - Clear CTA button
   - Takes user to creation flow
   - Obvious next step

5. **Secondary Info** (optional)
   - Learn more link
   - Example/template
   - Import option

## Types of Empty States

| Type | Context | Approach |
|------|---------|----------|
| **First-time** | New user, no content | Onboarding, education, clear CTA |
| **User-cleared** | User deleted everything | Confirmation, undo option, re-add CTA |
| **No results** | Search/filter returned nothing | Adjust filters, clear search, try different terms |
| **No access** | Permission restrictions | Explain why, how to request access |
| **Error state** | Failed to load | Retry action, support contact |

## Common Failure Modes

| Failure | Description | Fix |
|---------|-------------|-----|
| **The Void** | Blank white space | Add context, illustration, CTA |
| **Error as Empty** | "404" or "Null" message | Distinguish error states from empty states |
| **No Way Forward** | Message but no action | Always provide primary CTA |
| **Generic Illustration** | Unrelated cute character | Use relevant icon or context illustration |
| **Negative Framing** | "You have no friends" | Positive framing: "Connect with people" |
| **Too Much Info** | Paragraphs of text | Keep to 1-2 sentences + CTA |

## Prerequisites
- Understanding of user goals
- Knowledge of creation flow

## Dependencies
- `design-button-hierarchy` (needs clear primary action)
- `apply-typography-scale` (headline + body hierarchy)

## Refactoring UI References
- "Never leave users at a dead end"
- "Empty states are opportunities"
- "Set expectations"

## Example Assessment

**Input:** Dashboard showing "No data available" in small gray text, no other content

**Evaluation:** FAIL
- Negative framing
- No context about what should be here
- No action to take
- Visual treatment too subtle

**Recommendation:**
- Headline: "No reports yet"
- Description: "Create your first report to start tracking metrics"
- Primary button: "Create Report"
- Optional: Small illustration or icon
- Consider: Template/example preview
