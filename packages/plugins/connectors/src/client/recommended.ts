/** Curated MCP servers from the DSH MCP market snapshot; adding one opens the
 *  normal connector form prefilled, so credentials and paths stay under the
 *  user's control. */
export type RecommendedConnector = {
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly transport: 'stdio';
  readonly command: string;
  readonly args: readonly string[];
};

export const RECOMMENDED_CONNECTORS: readonly RecommendedConnector[] = [
  { name: 'github', description: 'GitHub API：issue、PR、仓库、搜索（需要 GITHUB_TOKEN）。', category: '开发', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-github'] },
  { name: 'filesystem', description: '受限目录的文件系统访问（添加后请把参数里的路径改成你的目录）。', category: '数据', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-filesystem', 'C:/'] },
  { name: 'fetch', description: '网络研究：搜索、访问网页、截图（无需密钥）。', category: '搜索', transport: 'stdio', command: 'npx', args: ['-y', '@mzxrai/mcp-webresearch'] },
  { name: 'context7', description: '按需注入任意依赖库的最新文档。', category: '搜索', transport: 'stdio', command: 'npx', args: ['-y', '@upstash/context7-mcp'] },
  { name: 'playwright', description: '浏览器自动化：导航、点击、截图（首次运行会下载浏览器）。', category: '开发', transport: 'stdio', command: 'npx', args: ['-y', '@playwright/mcp@latest'] },
  { name: 'git', description: '自然语言操作 Git：提交、分支、回滚、撤销。', category: '开发', transport: 'stdio', command: 'npx', args: ['-y', 'git-mcp'] },
  { name: 'memory', description: '基于知识图谱的 Agent 持久记忆。', category: 'AI', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-memory'] },
  { name: 'sequential-thinking', description: '结构化、可回溯的思维链工具。', category: 'AI', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-sequential-thinking'] },
  { name: 'sqlite', description: 'SQLite 数据库操作（默认 ./data.db）。', category: '数据', transport: 'stdio', command: 'npx', args: ['-y', 'mcp-server-sqlite'] },
  { name: 'brave-search', description: 'Brave Search 网页搜索（需要 BRAVE_API_KEY）。', category: '搜索', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-brave-search'] },
  { name: 'slack', description: 'Slack 工作区：消息、频道、线程（需要 Bot Token）。', category: '协作', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-slack'] },
  { name: 'google-maps', description: '地理编码、地点、路线（需要 GOOGLE_MAPS_API_KEY）。', category: '搜索', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-google-maps'] },
  { name: 'everything', description: '覆盖 MCP 全部特性的参考服务器，适合冒烟测试接入。', category: '开发', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-everything'] },
  { name: 'redis', description: 'Redis 数据库操作（需要 REDIS_URL）。', category: '数据', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-redis'] },
  { name: 'puppeteer', description: 'Puppeteer 浏览器自动化：导航、点击、截图（首次运行会下载 Chromium）。', category: '开发', transport: 'stdio', command: 'npx', args: ['-y', '@modelcontextprotocol/server-puppeteer'] },
];
