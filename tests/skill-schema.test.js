/**
 * Standalone skill schema validation.
 *
 * Run with:
 *   node tests/skill-schema.test.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SKILLS_JSON = path.join(ROOT, 'skills.json');

const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function parseFrontmatter(content, filePath) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  assert(Boolean(match), `${filePath} is missing YAML frontmatter`);

  if (!match) return {};

  return match[1].split('\n').reduce((fields, line) => {
    const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyValue) {
      fields[keyValue[1]] = keyValue[2];
    }
    return fields;
  }, {});
}

function validateRegistry(registry) {
  assert(Array.isArray(registry.skills), 'skills.json must contain a skills array');
  assert(registry.skills.length === 10, 'skills.json must define exactly 10 skills');
  assert(registry.meta_skill?.path === 'skills/meta-refactor-ui/SKILL.md', 'meta-skill path is invalid');

  const skillIds = new Set(registry.skills.map((skill) => skill.id));
  registry.skills.forEach((skill) => {
    [...(skill.dependencies || []), ...(skill.prerequisites || [])].forEach((dependency) => {
      assert(skillIds.has(dependency), `${skill.id} references unknown dependency ${dependency}`);
    });
  });

  registry.meta_skill.dependencies.forEach((dependency) => {
    assert(skillIds.has(dependency), `meta-skill references unknown dependency ${dependency}`);
  });
}

function validateSkillFile(skill) {
  const filePath = path.join(ROOT, skill.path);
  assert(fs.existsSync(filePath), `${skill.path} does not exist`);

  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatter = parseFrontmatter(content, skill.path);

  assert(frontmatter.name === skill.name, `${skill.path} frontmatter name does not match skills.json`);
  assert(Boolean(frontmatter.description), `${skill.path} is missing description`);
  assert(frontmatter.domain === 'ui-design', `${skill.path} domain must be ui-design`);
  assert(/^(evaluative|generative|corrective|orchestration)$/.test(frontmatter['skill-type']), `${skill.path} has invalid skill-type`);
  assert(/^\d+\.\d+\.\d+$/.test(frontmatter.version), `${skill.path} has invalid version`);
  assert(content.includes('## Purpose'), `${skill.path} is missing ## Purpose`);
  assert(content.includes('## Decision Criteria'), `${skill.path} is missing ## Decision Criteria`);
}

function main() {
  const registry = readJson(SKILLS_JSON);
  validateRegistry(registry);
  registry.skills.forEach(validateSkillFile);

  const metaPath = path.join(ROOT, registry.meta_skill.path);
  assert(fs.existsSync(metaPath), `${registry.meta_skill.path} does not exist`);

  if (failures.length > 0) {
    console.error('Schema validation failed:\n');
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`Schema validation passed: ${registry.skills.length} skills and meta-skill are valid.`);
}

main();
