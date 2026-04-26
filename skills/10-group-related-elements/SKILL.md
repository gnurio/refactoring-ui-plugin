---
name: group-related-elements
description: Use proximity and spacing to show relationships
domain: ui-design
skill-type: generative
version: 1.0.0
author: refactoring-ui-expert
prerequisites: []
dependencies:
  - 04-apply-consistent-spacing
---

# Skill: Group Related Elements

## Purpose
Use proximity and spacing to visually group related elements together and separate unrelated groups.

## Type
Generative + Evaluative

## Input
- Element inventory
- Relationship mapping (what belongs together)
- Current spacing between elements

## Output
- Spacing recommendations to show relationships
- Pass/Fail assessment of current grouping

## Transformation Performed
Adjusts spacing so elements within a group are closer together than elements in different groups, using the Gestalt principle of proximity.

## Decision Criteria

### PASS (Good Grouping)
- Related elements have small gap (8-16px)
- Unrelated groups have larger gap (24-48px)
- Form labels close to their inputs (4-8px)
- Sections clearly separated
- Hierarchy of space: tightest within component, looser between components, loosest between sections

### FAIL (Poor Grouping)
- Uniform spacing everywhere
- Labels far from inputs
- Related elements visually disconnected
- Unrelated elements too close
- Using borders instead of space to group

## The Proximity Principle

> Elements that are close together are perceived as more related than elements that are farther apart.

### Spacing Hierarchy

```
Within component (label + input): 4-8px
Between related components: 16-24px
Between sections: 32-64px
Between major page areas: 64-96px
```

## Common Grouping Patterns

| Pattern | Structure | Spacing |
|---------|-----------|---------|
| **Form field** | Label → Input | 4-8px between, 16-24px after |
| **Card** | Header → Content → Footer | 16-24px internal padding |
| **List items** | Item 1 / Item 2 / Item 3 | 8-12px between items |
| **Button group** | Primary + Secondary | 8-12px between |
| **Sections** | Section A (gap) Section B | 48-64px between |

## Common Failure Modes

| Failure | Description | Fix |
|---------|-------------|-----|
| **The Great Divide** | Equal spacing everywhere | Tighten within groups, expand between groups |
| **Label Drift** | Labels 20px+ from inputs | Reduce to 4-8px |
| **Section Smush** | Sections barely separated | Add 48px+ between major sections |
| **Border Dependency** | Boxes around everything | Use space instead of borders |
| **Card Clump** | Cards touching each other | Add 16-24px gap between cards |

## Prerequisites
- Spacing system defined
- Content grouped logically

## Dependencies
- `apply-consistent-spacing` (uses spacing scale)

## Refactoring UI References
- "Group related information"
- "Use whitespace to create relationships"
- "Proximity beats similarity"

## Example Assessment

**Input:** Form with: Title (24px margin), Label (8px margin), Input, Label (8px), Input, Section header (16px margin), Label (8px), Input

**Evaluation:** PARTIAL
- Label to input spacing not specified
- Section header too close to previous section
- Consistent 8px but not creating hierarchy

**Recommendation:**
- Label to input: 4px (tight coupling)
- After input group: 24px
- Section header margin-top: 48px (clear break)
- Within section: 16px between fields
