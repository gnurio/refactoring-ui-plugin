/**
 * Platform Adapter for Refactoring UI Skills
 * 
 * Provides platform-specific abstractions for:
 * - Tool names (vary by platform)
 * - Input/output methods
 * - File system access
 * - Subagent/worktree management
 * 
 * Supported platforms: Claude Code, Codex, Cursor
 */

const PLATFORM = detectPlatform();

/**
 * Detect which AI platform we're running on
 */
function detectPlatform() {
  // Check for platform-specific environment variables or globals
  if (typeof claude !== 'undefined' || process.env.CLAUDE_CODE === 'true') {
    return 'claude';
  }
  if (typeof codex !== 'undefined' || process.env.CODEX === 'true') {
    return 'codex';
  }
  if (typeof cursor !== 'undefined' || process.env.CURSOR_AGENT === 'true') {
    return 'cursor';
  }
  
  // Default to claude for backward compatibility
  return 'claude';
}

/**
 * Get the current platform name
 */
function getPlatform() {
  return PLATFORM;
}

/**
 * Tool name mappings for different platforms
 */
const TOOL_MAPPINGS = {
  // User input/question tools
  askUser: {
    claude: 'AskUserQuestion',
    codex: 'request_user_input',
    cursor: 'ask_user'
  },
  
  // Task management tools
  createTask: {
    claude: 'TaskCreate',
    codex: 'update_plan',
    cursor: 'create_task'
  },
  
  updateTask: {
    claude: 'TaskUpdate',
    codex: 'update_plan',
    cursor: 'update_task'
  },
  
  listTasks: {
    claude: 'TaskList',
    codex: 'get_plan',
    cursor: 'list_tasks'
  },
  
  // Subagent/worktree tools
  spawnAgent: {
    claude: 'Agent',
    codex: 'spawn_agent',
    cursor: 'subagent'
  },
  
  // File operations
  readFile: {
    claude: 'Read',
    codex: 'read_file',
    cursor: 'read'
  },
  
  writeFile: {
    claude: 'Write',
    codex: 'write_file',
    cursor: 'write'
  },
  
  searchFiles: {
    claude: 'Grep',
    codex: 'search',
    cursor: 'grep'
  },
  
  listFiles: {
    claude: 'Glob',
    codex: 'list_files',
    cursor: 'glob'
  },
  
  // Bash execution
  runCommand: {
    claude: 'Bash',
    codex: 'run_command',
    cursor: 'bash'
  }
};

/**
 * Get the platform-specific tool name
 */
function getTool(toolType) {
  const mapping = TOOL_MAPPINGS[toolType];
  if (!mapping) {
    throw new Error(`Unknown tool type: ${toolType}`);
  }
  return mapping[PLATFORM] || mapping.claude; // Fallback to claude
}

/**
 * Platform-specific user question configuration
 */
function getQuestionConfig(question, options = {}) {
  const configs = {
    claude: {
      tool: 'AskUserQuestion',
      params: {
        question,
        options: options.choices || []
      }
    },
    codex: {
      tool: 'request_user_input',
      params: {
        prompt: question,
        options: options.choices || []
      }
    },
    cursor: {
      tool: 'ask_user',
      params: {
        question,
        choices: options.choices || []
      }
    }
  };
  
  return configs[PLATFORM];
}

/**
 * Platform-specific task creation
 */
function createTask(description, options = {}) {
  const configs = {
    claude: {
      tool: 'TaskCreate',
      params: {
        description,
        status: options.status || 'in_progress',
        todo_list: options.subtasks || []
      }
    },
    codex: {
      tool: 'update_plan',
      params: {
        plan: {
          tasks: [{
            description,
            status: options.status || 'pending',
            ...options
          }]
        }
      }
    },
    cursor: {
      tool: 'create_task',
      params: {
        title: description,
        status: options.status || 'todo'
      }
    }
  };
  
  return configs[PLATFORM];
}

/**
 * Platform-specific subagent spawning
 */
function spawnAgent(instruction, options = {}) {
  const configs = {
    claude: {
      tool: 'Agent',
      params: {
        instruction,
        ...(options.isolation && { isolation: options.isolation }),
        ...(options.run_in_background && { run_in_background: true })
      }
    },
    codex: {
      tool: 'spawn_agent',
      params: {
        prompt: instruction,
        ...options
      }
    },
    cursor: {
      tool: 'subagent',
      params: {
        instruction,
        ...options
      }
    }
  };
  
  return configs[PLATFORM];
}

/**
 * Platform-specific file read
 */
function readFile(path, options = {}) {
  const configs = {
    claude: {
      tool: 'Read',
      params: { file_path: path, ...options }
    },
    codex: {
      tool: 'read_file',
      params: { path, ...options }
    },
    cursor: {
      tool: 'read',
      params: { path, ...options }
    }
  };
  
  return configs[PLATFORM];
}

/**
 * Platform-specific file write
 */
function writeFile(path, content, options = {}) {
  const configs = {
    claude: {
      tool: 'Write',
      params: { file_path: path, content, ...options }
    },
    codex: {
      tool: 'write_file',
      params: { path, content, ...options }
    },
    cursor: {
      tool: 'write',
      params: { path, content, ...options }
    }
  };
  
  return configs[PLATFORM];
}

/**
 * Get platform display name
 */
function getPlatformDisplayName() {
  const names = {
    claude: 'Claude Code',
    codex: 'Codex',
    cursor: 'Cursor'
  };
  return names[PLATFORM] || 'Unknown Platform';
}

/**
 * Check if platform supports worktree isolation
 */
function supportsWorktreeIsolation() {
  return PLATFORM === 'claude';
}

/**
 * Check if platform supports parallel subagents
 */
function supportsParallelAgents() {
  return ['claude', 'codex'].includes(PLATFORM);
}

/**
 * Get skill invocation syntax for platform
 */
function getSkillInvocation(skillName, args = '') {
  const syntaxes = {
    claude: `/${skillName} ${args}`,
    codex: `@${skillName} ${args}`,
    cursor: `/refactor-ui ${skillName} ${args}`
  };
  return syntaxes[PLATFORM] || `/${skillName} ${args}`;
}

// Export module
module.exports = {
  getPlatform,
  getPlatformDisplayName,
  getTool,
  getQuestionConfig,
  createTask,
  spawnAgent,
  readFile,
  writeFile,
  supportsWorktreeIsolation,
  supportsParallelAgents,
  getSkillInvocation,
  PLATFORM
};
