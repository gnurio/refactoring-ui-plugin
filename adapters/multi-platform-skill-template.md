---
name: example-multi-platform-skill
description: Example showing how to write platform-agnostic skills that work on Claude, Codex, and Cursor
---

# Multi-Platform Skill Template

## Overview

This template shows how to write skills that work across:
- **Claude Code**
- **Codex**  
- **Cursor**

## Platform Detection

The adapter automatically detects the platform:

```javascript
const { getPlatform, getPlatformDisplayName } = require('./adapters/platform-adapter');

console.log(`Running on: ${getPlatformDisplayName()}`); // "Claude Code", "Codex", or "Cursor"
```

## Tool Name Abstraction

Different platforms use different tool names. Use the adapter to get the correct name:

### ❌ Platform-Specific (Bad)
```markdown
<!-- Only works on Claude -->
Call AskUserQuestion to ask the user...
```

### ✅ Platform-Agnostic (Good)
```markdown
<!-- Works on all platforms -->
Use the platform's question tool: {{askUser}}

Or in code:
```javascript
const { getTool } = require('./adapters/platform-adapter');
const questionTool = getTool('askUser'); // Returns "AskUserQuestion", "request_user_input", or "ask_user"
```
```

## Common Tool Mappings

| Function | Claude | Codex | Cursor |
|----------|--------|-------|--------|
| `askUser` | `AskUserQuestion` | `request_user_input` | `ask_user` |
| `createTask` | `TaskCreate` | `update_plan` | `create_task` |
| `spawnAgent` | `Agent` | `spawn_agent` | `subagent` |
| `readFile` | `Read` | `read_file` | `read` |
| `writeFile` | `Write` | `write_file` | `write` |
| `runCommand` | `Bash` | `run_command` | `bash` |

## Usage Patterns

### Pattern 1: User Questions

```markdown
## Asking User Questions

Use the platform's blocking question tool:

{{platform}}
- Claude Code: `AskUserQuestion`
- Codex: `request_user_input`
- Cursor: `ask_user`
{{/platform}}

```
const { getQuestionConfig } = require('./adapters/platform-adapter');

const config = getQuestionConfig("What would you like to do?", {
  choices: ["Option 1", "Option 2", "Option 3"]
});

// Execute the platform-specific tool
await executeTool(config.tool, config.params);
```
```

### Pattern 2: Task Management

```markdown
## Creating Tasks

```
const { createTask } = require('./adapters/platform-adapter');

const config = createTask("Implement visual hierarchy fixes", {
  status: 'in_progress',
  subtasks: [
    'Reduce logo size',
    'Increase headline weight',
    'De-emphasize secondary content'
  ]
});

await executeTool(config.tool, config.params);
```
```

### Pattern 3: File Operations

```markdown
## Reading Files

```
const { readFile } = require('./adapters/platform-adapter');

const config = readFile('design.md');
const content = await executeTool(config.tool, config.params);
```
```

### Pattern 4: Subagent Spawning

```markdown
## Parallel Subagents

```
const { spawnAgent, supportsParallelAgents } = require('./adapters/platform-adapter');

if (supportsParallelAgents()) {
  const config = spawnAgent("Analyze typography scale", {
    isolation: 'worktree'  // Claude supports this
  });
  
  await executeTool(config.tool, config.params);
} else {
  // Fall back to inline execution
  analyzeTypographyScale();
}
```
```

## Platform-Specific Capabilities

Check for platform capabilities:

```javascript
const { 
  supportsWorktreeIsolation,
  supportsParallelAgents,
  getPlatform 
} = require('./adapters/platform-adapter');

if (supportsWorktreeIsolation()) {
  // Can use worktree isolation (Claude)
} else {
  // Use shared directory with locking
}

if (supportsParallelAgents()) {
  // Can spawn parallel subagents
} else {
  // Use sequential execution
}
```

## Fallback Strategy

When platform tools are unavailable:

```markdown
## Fallback Handling

If the platform's blocking tool is not available:
1. Present numbered options in chat
2. Wait for user response
3. Parse the response

```
const { getQuestionConfig } = require('./adapters/platform-adapter');

try {
  const config = getQuestionConfig("Choose an option:", { choices: ['A', 'B', 'C'] });
  const result = await executeTool(config.tool, config.params);
} catch (error) {
  // Fallback: present in chat
  console.log("1. Option A");
  console.log("2. Option B");
  console.log("3. Option C");
  // Wait for user input...
}
```
```

## Skill Invocation Syntax

Different platforms use different syntax for invoking skills:

```javascript
const { getSkillInvocation } = require('./adapters/platform-adapter');

// Get platform-specific invocation
const invoke = getSkillInvocation('refactor-ui', '--design="page.md"');

// Returns:
// Claude: "/refactor-ui --design=\"page.md\""
// Codex: "@refactor-ui --design=\"page.md\""
// Cursor: "/refactor-ui refactor-ui --design=\"page.md\""
```

## Best Practices

1. **Always use the adapter** - Never hardcode tool names
2. **Check capabilities** - Use `supportsX()` before using platform-specific features
3. **Provide fallbacks** - Handle cases where tools aren't available
4. **Test on all platforms** - Validate behavior on Claude, Codex, and Cursor
5. **Document platform differences** - Note when behavior varies

## Example: Complete Multi-Platform Skill

```markdown
---
name: evaluate-design
description: Evaluate a design using Refactoring UI principles
---

# Evaluate Design

## Input
- design_file: path to design description

## Workflow

### Step 1: Read Design File
```
const { readFile } = require('../adapters/platform-adapter');
const config = readFile(design_file);
const design = await executeTool(config.tool, config.params);
```

### Step 2: Ask User for Context
```
const { getQuestionConfig } = require('../adapters/platform-adapter');

const config = getQuestionConfig("What type of design is this?", {
  choices: ["Marketing page", "Application UI", "Content page"]
});

const context = await executeTool(config.tool, config.params);
```

### Step 3: Create Tasks for Each Skill
```
const { createTask } = require('../adapters/platform-adapter');

const skills = ['visual-hierarchy', 'typography-scale', 'color-palette'];

for (const skill of skills) {
  const config = createTask(`Evaluate ${skill}`, { status: 'pending' });
  await executeTool(config.tool, config.params);
}
```

### Step 4: Run Evaluations
```
const { supportsParallelAgents, spawnAgent } = require('../adapters/platform-adapter');

if (supportsParallelAgents()) {
  // Run in parallel
  await Promise.all(skills.map(skill => {
    const config = spawnAgent(`Evaluate ${skill} for ${design_file}`);
    return executeTool(config.tool, config.params);
  }));
} else {
  // Run sequentially
  for (const skill of skills) {
    evaluateSkill(skill, design);
  }
}
```

## Platform Notes

{{platform claude}}
**Claude Code Features:**
- Worktree isolation supported
- Native TaskCreate/TaskUpdate tools
- Agent tool with isolation option
{{/platform}}

{{platform codex}}
**Codex Features:**
- spawn_agent for subagents
- update_plan for task management
- No worktree isolation (use shared directory)
{{/platform}}

{{platform cursor}}
**Cursor Features:**
- subagent tool available
- ask_user for questions
- Simpler tool set
{{/platform}}
```

## Testing Multi-Platform Skills

Create tests that validate behavior on all platforms:

```javascript
// tests/multi-platform.test.js
const adapter = require('../adapters/platform-adapter');

describe('Platform Adapter', () => {
  test('detects platform correctly', () => {
    const platform = adapter.getPlatform();
    expect(['claude', 'codex', 'cursor']).toContain(platform);
  });
  
  test('returns correct tool names', () => {
    expect(adapter.getTool('askUser')).toBeDefined();
    expect(adapter.getTool('readFile')).toBeDefined();
  });
  
  test('provides question configs for all platforms', () => {
    const config = adapter.getQuestionConfig('Test?', { choices: ['A', 'B'] });
    expect(config.tool).toBeDefined();
    expect(config.params).toBeDefined();
  });
});
```
