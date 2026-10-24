# Symon Studio 插件独立安装说明

这套插件把 WorkBuddy 风格的「专家中心、专家团、技能市场、连接器市场、项目」做成独立的 DeepSeek Harness 插件。每个插件都是单独的 npm 包和独立数据域，可以整套安装，也可以按需单独安装。

- 运行环境：DeepSeek Harness `0.2.1-rc.2`
- 发布方式：GitHub Release 附件（`.tgz`），不需要 npm 发布
- 适用平台：Windows / macOS / Linux（命令中的路径按本机修改）
- 数据随包：专家目录、preset、123 个专家技能包已经打进插件包，首次安装会自动落盘

## 版本

| 插件 | 包名 | 版本 |
| --- | --- | --- |
| 身份 | `symon-studio-provider-identity-local` | `0.1.0-alpha.7` |
| 审计 | `symon-studio-plugin-audit` | `0.1.0-alpha.6` |
| 访问控制 | `symon-studio-plugin-access` | `0.1.0-alpha.7` |
| 技能 | `symon-studio-plugin-skills` | `0.1.0-alpha.59` |
| 专家/专家团 | `symon-studio-plugin-experts` | `0.1.0-alpha.24` |
| 连接器 | `symon-studio-plugin-connectors` | `0.1.0-alpha.10` |
| 项目 | `symon-studio-plugin-projects` | `0.1.0-alpha.5` |

## 下载

发布页：https://github.com/Symon12138/workdsh/releases/tag/standalone-v0.1.0

7 个 `.tgz` 都在该 Release 的 Assets 中，下载后按下面的顺序安装。

## 方式一：整套安装（推荐）

按依赖顺序安装：

```bash
dsh plugin --profile web add file:/path/symon-studio-provider-identity-local-0.1.0-alpha.7.tgz
dsh plugin --profile web add file:/path/symon-studio-plugin-audit-0.1.0-alpha.6.tgz
dsh plugin --profile web add file:/path/symon-studio-plugin-access-0.1.0-alpha.7.tgz
dsh plugin --profile web add file:/path/symon-studio-plugin-skills-0.1.0-alpha.59.tgz
dsh plugin --profile web add file:/path/symon-studio-plugin-experts-0.1.0-alpha.24.tgz
dsh plugin --profile web add file:/path/symon-studio-plugin-connectors-0.1.0-alpha.10.tgz
dsh plugin --profile web add file:/path/symon-studio-plugin-projects-0.1.0-alpha.5.tgz
dsh --profile web
```

安装完成后：

- 专家中心自动出现 419 个专家/专家团（含 A股研究团队 6 个协作场景）
- 技能页自动出现 123 个专家技能包
- 连接器页有 15 个独立 MCP + 181 个非 WorkBuddy 强绑定连接器
- 项目页有内置模板

## 方式二：单插件安装

| 想要的功能 | 最少安装 |
| --- | --- |
| 只要技能 | `skills` |
| 只要专家/专家团 | `skills` + `experts` |
| 只要连接器 | `connectors` |
| 只要项目 | `projects` |
| 需要权限/审计/多用户 | `identity-local` + `audit` + `access`，再装上层插件 |

单装示例（专家 + 技能）：

```bash
dsh plugin --profile web add file:/path/symon-studio-plugin-skills-0.1.0-alpha.59.tgz
dsh plugin --profile web add file:/path/symon-studio-plugin-experts-0.1.0-alpha.24.tgz
dsh --profile web
```

`experts`、`connectors`、`projects` 已改成可选依赖：

- 没有 `identity/access/audit` 时，使用本地个人模式：`local-user / local-personal`、允许所有操作、不写审计。
- 安装 foundation 后，会自动使用真实的身份、权限和审计服务。
- `experts` 没有 `skills` 插件时仍可打开专家中心，只是「使用技能」显示为空、技能依赖检查跳过。建议专家场景同时安装 `skills`。

## 数据位置与重置

| 数据 | 位置 |
| --- | --- |
| 专家目录 | `~/.dsh/storages/workdsh_experts` |
| 专家 preset | `~/.agents/.workdsh-state/experts/presets` |
| 技能 | `~/.agents/skills`（Windows 默认 `C:\Users\<user>\.agents\skills`） |
| 连接器配置 | profile 的 connector storage + 凭据服务 |
| 项目 | `~/.dsh/storages/workdsh_projects` |

重置专家目录：删除 `~/.dsh/storages/workdsh_experts` 和 `~/.agents/.workdsh-state/experts/presets`，重启后插件会重新从包内 seed 写入。删除前请先备份。

## 技能市场

- **推荐**：本地技能目录 + 随包技能
- **SkillHub**：调用 `skillhub.cn` 公开榜单和公开搜索，真实下载、一键安装
- **GitHub 仓库**：Anthropic Skills、Superpowers、Matt Pocock、Open Design，共 617 个技能
- SkillHub 完整搜索不需要登录；如果要使用个人发布/账号相关能力，可在 `~/.dsh/skillhub-token.txt` 放 CLI Token（`skh_...`），文件不要提交到仓库。

## 已知限制

- WorkBuddy 的付费专家、云端同步、分享链接、上架审核、真实使用量统计没有对应后端，不包含在本套插件里。
- WorkBuddy 服务端授权/腾讯内网/OneID 连接器已移除；保留的连接器可能需要各自的 Token/OAuth。
- SkillHub 企业专有技能可能不提供下载。
- A股研究团队原有 20 个技能，preset 编译在 20 个时内部报错，当前保留 19 个。
- 单插件本地模式没有权限隔离和审计；多人/企业场景请安装 identity + access + audit。

## 验证状态

- 已在干净 `standalone` profile（仅 `dsh-base` + `dsh-web-app` + `skills` + `experts`）验证：
  - 专家插件正常启动，专家 API 返回 419 条
  - 技能插件自动 seed，技能 API 返回 132 条
  - 无缺少 foundation 服务导致的启动失败
- Web profile 已验证专家、技能、SkillHub、连接器、项目页面可用。

## 许可

继承上游 Symon Studio 的 MIT 许可；WorkBuddy 相关名称和内容仅用于兼容与迁移说明。
