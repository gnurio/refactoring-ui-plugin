---
name: refactor-ui
description: Analyze a design against all 10 Refactoring UI skills and generate a comprehensive assessment with specific fixes
domain: ui-design
skill-type: orchestration
version: 1.0.0
prerequisites: []
dependencies:
  - 01-establish-visual-hierarchy
  - 02-apply-typography-scale
  - 03-build-color-palette
  - 04-apply-consistent-spacing
  - 05-design-button-hierarchy
  - 06-eliminate-visual-clutter
  - 07-design-empty-states
  - 08-use-shadows-appropriately
  - 09-manage-color-contrast
  - 10-group-related-elements
input:
  - design_description: string
  - design_screenshot: optional image
  - context: marketing | application | content
output:
  - comprehensive_assessment: object
  - violations: array
  - recommendations: array
  - priority_fixes: array
---

# Meta-Skill: /refactor-ui

## Purpose
Run a complete UI design audit against all 10 Refactoring UI principles, generating a prioritized list of specific improvements.

## Workflow

### Phase 1: Load Skill Registry
```
Read skills.json
Validate all 10 skills available
```

### Phase 2: Sequential Skill Application

Execute each skill in optimal order:

```
1. establish-visual-hierarchy
   ↓
2. apply-typography-scale
   ↓
3. build-color-palette
   ↓
4. apply-consistent-spacing
   ↓
5. design-button-hierarchy
   ↓
6. eliminate-visual-clutter
   ↓
7. design-empty-states
   ↓
8. use-shadows-appropriately
   ↓
9. manage-color-contrast
   ↓
10. group-related-elements
```

### Phase 3: Consolidate Findings

Aggregate results from all skills:
- Collect all FAIL assessments
- Group by severity (Critical | High | Medium | Low)
- Remove duplicates (same issue caught by multiple skills)
- Prioritize by impact

### Phase 4: Generate Report

Output structured assessment:

```json
{
  "overall_score": "PASS | NEEDS_WORK | FAIL",
  "summary": "3 critical, 5 high, 2 medium priority fixes",
  "violations": [
    {
      "skill": "visual-hierarchy",
      "severity": "critical",
      "issue": "Primary CTA buried",
      "location": "Hero section",
      "fix": "Increase button to solid brand color, reduce surrounding contrast"
    }
  ],
  "priority_fixes": [
    "1. Make primary CTA prominent with brand color",
    "2. Consolidate font sizes from 12 to 6",
    "3. Add 8-10 grey shades to palette"
  ],
  "skill_breakdown": {
    "visual-hierarchy": { "status": "FAIL", "issues": 2 },
    "typography-scale": { "status": "PASS", "issues": 0 },
    "color-palette": { "status": "FAIL", "issues": 1 },
    ...
  }
}
```

## Execution Modes

### Mode: Quick Scan
- Run all 10 skills
- Report only FAILs
- Time: ~30 seconds

### Mode: Deep Analysis
- Run all 10 skills
- Report PASS with rationale
- Cross-reference between skills
- Suggest composition improvements
- Time: ~2 minutes

### Mode: Fix Mode
- Run all 10 skills
- Generate specific fix instructions
- Provide before/after code examples
- Time: ~5 minutes

## Usage Examples

### Example 1: Marketing Page
```
Input: Landing page description with hero, features, CTA

/refactor-ui
→ Overall: NEEDS_WORK
→ Critical: Visual hierarchy (CTA buried)
→ High: Typography (8 sizes, need 5)
→ Medium: Spacing (ambiguous grouping)
→ Priority fixes: [3 items]
```

### Example 2: Dashboard
```
Input: Analytics dashboard screenshot

/refactor-ui --deep
→ Overall: PASS with suggestions
→ Visual hierarchy: PASS (clear primary)
→ Color palette: FAIL (only 4 greys)
→ Shadows: FAIL (decorative on cards)
→ Suggestions: [5 items]
```

## Integration with Validation

This meta-skill can validate against NotebookLM:
```
For each skill assessment:
  Query: "According to Refactoring UI, is this correct?"
  Validate assessment matches expert
Report agreement rate
```

## References

- `../skills.json` - Skill registry
- `../examples/` - Before/after examples for all skills
