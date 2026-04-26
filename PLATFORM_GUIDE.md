# Multi-Platform Support Guide

Refactoring UI Skills now work across **Claude Code**, **Codex**, and **Cursor** with platform-specific adapters.

## Supported Platforms

| Platform | Status | Features |
|----------|--------|----------|
| **Claude Code** | ✅ Fully Supported | Worktree isolation, parallel agents, full toolset |
| **Codex** | ✅ Fully Supported | Subagent spawning, task management |
| **Cursor** | ✅ Fully Supported | Core skills, subagents |

## Installation

### Claude Code
```bash
# Add to Claude Code plugins
cp -r .claude-plugin/* ~/.claude/plugins/refactoring-ui-skills/

# Or use directly
/refactor-ui --help
```

### Codex
```bash
# Install via Codex plugin system
cp -r .codex-plugin/* ~/.codex/plugins/refactoring-ui-skills/

# Invoke with
@refactor-ui --design="page.md"
```

### Cursor
```bash
# Copy to Cursor plugins
cp -r .cursor-plugin/* ~/.cursor/plugins/refactoring-ui-skills/

# Invoke with
/refactor-ui evaluate-design --file="page.md"
```

## Platform Differences

### Tool Name Mapping

| Function | Claude | Codex | Cursor |
|----------|--------|-------|--------|
| Ask user | `AskUserQuestion` | `request_user_input` | `ask_user` |
| Create task | `TaskCreate` | `update_plan` | `create_task` |
| Spawn agent | `Agent` | `spawn_agent` | `subagent` |
| Read file | `Read` | `read_file` | `read` |
| Write file | `Write` | `write_file` | `write` |
| Run command | `Bash` | `run_command` | `bash` |

### Capability Matrix

| Feature | Claude | Codex | Cursor |
|---------|--------|-------|--------|
| Worktree Isolation | ✅ Yes | ❌ No | ❌ No |
| Parallel Subagents | ✅ Yes | ✅ Yes | ⚠️ Limited |
| Task Management | ✅ Native | ✅ Native | ✅ Basic |
| File Operations | ✅ Full | ✅ Full | ✅ Full |
| User Questions | ✅ Blocking | ✅ Blocking | ✅ Blocking |

## Using Platform Adapter

### Basic Usage

```javascript
const adapter = require('./adapters/platform-adapter');

// Detect platform
console.log(adapter.getPlatformDisplayName()); // "Claude Code", "Codex", or "Cursor"

// Get platform-specific tool name
const questionTool = adapter.getTool('askUser');
// Returns: "AskUserQuestion" (Claude), "request_user_input" (Codex), "ask_user" (Cursor)
```

### User Questions

```javascript
const { getQuestionConfig } = require('./adapters/platform-adapter');

// Works on all platforms
const config = getQuestionConfig("What would you like to improve?", {
  choices: [
    "Visual hierarchy",
    "Typography scale", 
    "Color palette",
    "Spacing"
  ]
});

// Execute with platform-specific tool
await executeTool(config.tool, config.params);
```

### Task Management

```javascript
const { createTask } = require('./adapters/platform-adapter');

// Create platform-agnostic task
const config = createTask("Evaluate visual hierarchy", {
  status: 'in_progress'
});

await executeTool(config.tool, config.params);
```

### Subagent Spawning

```javascript
const { spawnAgent, supportsWorktreeIsolation } = require('./adapters/platform-adapter');

const config = spawnAgent("Analyze typography", {
  // Only Claude supports worktree isolation
  ...(supportsWorktreeIsolation() && { isolation: 'worktree' })
});

await executeTool(config.tool, config.params);
```

## Platform-Specific Notes

### Claude Code

**Advantages:**
- Worktree isolation for parallel work
- Most mature agent ecosystem
- Advanced task management

**Usage:**
```
/refactor-ui --design="page.md"
/establish-visual-hierarchy --input="description"
```

### Codex

**Advantages:**
- Native plan/task integration
- Good parallel agent support
- GitHub-native workflow

**Usage:**
```
@refactor-ui --design="page.md"
@apply-typography-scale --context="marketing"
```

### Cursor

**Advantages:**
- Integrated with IDE
- Direct file access
- Fast iteration

**Usage:**
```
/refactor-ui evaluate --file="design.md"
/refactor-ui fix --issues="visual-hierarchy"
```

## Writing Platform-Agnostic Skills

### Template

```markdown
---
name: my-skill
description: A skill that works on all platforms
---

# My Skill

## Step 1: User Input

{{platform}}
Use the platform's question tool:
- Claude Code: `AskUserQuestion`
- Codex: `request_user_input`
- Cursor: `ask_user`
{{/platform}}

```javascript
const { getQuestionConfig } = require('../adapters/platform-adapter');

const config = getQuestionConfig("What would you like to do?");
await executeTool(config.tool, config.params);
```

## Step 2: Task Creation

```javascript
const { createTask } = require('../adapters/platform-adapter');

const config = createTask("Process request");
await executeTool(config.tool, config.params);
```
```

### Best Practices

1. **Always use the adapter** - Never hardcode tool names
2. **Check capabilities** - Use `supportsX()` functions
3. **Provide fallbacks** - Handle missing tools gracefully
4. **Test on all platforms** - Validate before shipping

## Testing

Run platform detection test:

```bash
node -e "
const adapter = require('./adapters/platform-adapter');
console.log('Platform:', adapter.getPlatformDisplayName());
console.log('Supports worktrees:', adapter.supportsWorktreeIsolation());
console.log('Supports parallel:', adapter.supportsParallelAgents());
"
```

## Troubleshooting

### Issue: Tool not found
**Solution:** Use adapter to get correct tool name
```javascript
const tool = adapter.getTool('askUser');
```

### Issue: Worktree isolation not working
**Solution:** Check platform capability
```javascript
if (adapter.supportsWorktreeIsolation()) {
  // Use worktrees
} else {
  // Use shared directory with locks
}
```

### Issue: Parallel agents failing
**Solution:** Fall back to serial execution
```javascript
if (adapter.supportsParallelAgents()) {
  await Promise.all(tasks);
} else {
  for (const task of tasks) {
    await execute(task);
  }
}
```

## Configuration Files

### .claude-plugin/plugin.json
Plugin metadata for Claude Code.

### .codex-plugin/plugin.json  
Plugin metadata for Codex with interface configuration.

### .cursor-plugin/plugin.json
Plugin metadata for Cursor.

## Migration Guide

### From Single-Platform to Multi-Platform

1. **Replace hardcoded tool names**
   ```diff
   - AskUserQuestion
   + adapter.getTool('askUser')
   ```

2. **Add capability checks**
   ```diff
   + if (adapter.supportsWorktreeIsolation()) {
       spawnAgent({ isolation: 'worktree' })
   + }
   ```

3. **Create platform-specific plugin files**
   - `.claude-plugin/plugin.json`
   - `.codex-plugin/plugin.json`
   - `.cursor-plugin/plugin.json`

4. **Test on each platform**
   - Validate tool names work
   - Check capability detection
   - Verify fallback behavior

## Contributing

To add support for a new platform:

1. Add platform detection in `adapters/platform-adapter.js`
2. Create `.newplatform-plugin/plugin.json`
3. Add tool mappings to `TOOL_MAPPINGS`
4. Test all skills on new platform
5. Update documentation

## Resources

- [Platform Adapter API](./adapters/platform-adapter.js)
- [Multi-Platform Skill Template](./adapters/multi-platform-skill-template.md)
- [Main README](./README.md)

## Status

✅ **Multi-platform support complete** for Claude Code, Codex, and Cursor.
