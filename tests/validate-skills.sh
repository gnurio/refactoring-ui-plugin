#!/bin/bash
# Simple skill validation script

echo "=========================================="
echo "Refactoring UI Skills - Validation"
echo "=========================================="
echo ""

ERRORS=0

# Check skills.json exists
if [ ! -f "skills.json" ]; then
    echo "❌ skills.json not found"
    exit 1
fi

echo "✓ skills.json exists"

# Check all skill directories exist
echo ""
echo "Checking skill directories..."
for i in 01 02 03 04 05 06 07 08 09 10; do
    FOUND=0
    for DIR in skills/${i}-*/; do
        if [ -f "${DIR}SKILL.md" ]; then
            echo "  ✓ Skill $i: $(basename "$DIR")"
            FOUND=1
            break
        fi
    done

    if [ "$FOUND" -eq 0 ]; then
        echo "  ❌ Skill $i: missing"
        ERRORS=$((ERRORS + 1))
    fi
done

# Check meta-skill
if [ -f "skills/meta-refactor-ui/SKILL.md" ]; then
    echo "  ✓ Meta-skill: refactor-ui"
else
    echo "  ❌ Meta-skill: missing"
    ERRORS=$((ERRORS + 1))
fi

# Check examples exist
echo ""
echo "Checking examples..."
if [ -d "examples/visual-hierarchy" ]; then
    echo "  ✓ Visual hierarchy examples"
else
    echo "  ⚠ Visual hierarchy examples: missing"
fi

# Check references structure
echo ""
echo "Checking references structure..."
REF_COUNT=$(find skills -name "references" -type d | wc -l)
echo "  Found $REF_COUNT reference directories"

# Summary
echo ""
echo "=========================================="
if [ $ERRORS -eq 0 ]; then
    echo "✅ All validations passed!"
else
    echo "❌ $ERRORS validation(s) failed"
fi
echo "=========================================="

exit $ERRORS
