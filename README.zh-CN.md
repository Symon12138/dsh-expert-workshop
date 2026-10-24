# DSH 专家工坊（Expert Workshop）

**面向 DeepSeek Harness 的 WorkBuddy 风格专家与技能套件，由一组可独立安装的插件组成。**

专家工坊给本地 DSH profile 增加专家中心、专家团、技能市场、连接器市场和项目模板。每个能力都是独立插件、独立数据域，可以整套安装，也可以只装需要的部分。

这不是桌面应用，也不是云端服务。

## 包含的插件

| 插件 | 作用 | 版本 |
| --- | --- | --- |
| `expert-workshop-plugin-experts` | 专家中心、专家团、分类、头像、快捷问题、详情、召唤 | `0.1.0-alpha.25` |
| `expert-workshop-plugin-skills` | 本地技能、SkillHub 公开榜单与搜索、GitHub 技能仓库、安装/启停/编辑/卸载 | `0.1.0-alpha.60` |
| `expert-workshop-plugin-connectors` | MCP 市场、添加/编辑/启停/删除、工具与连接状态 | `0.1.0-alpha.11` |
| `expert-workshop-plugin-projects` | 项目、内置模板、项目工作区 | `0.1.0-alpha.6` |
| `expert-workshop-plugin-access` | 权限与会话归属（可选） | `0.1.0-alpha.8` |
| `expert-workshop-plugin-audit` | 审计日志（可选） | `0.1.0-alpha.7` |
| `expert-workshop-provider-identity-local` | 本地个人身份（可选） | `0.1.0-alpha.8` |

## 功能

- **419 个专家和专家团**：分类、精选场景、真实头像、快捷问题、配备技能、详情页。
- **专家团**：保留主理人与成员提示词；A股研究团队包含 6 个协作场景。
- **数据随包**：专家插件内置目录和 preset，技能插件内置 123 个专家技能包，首次安装自动落盘，新 profile 装完即可用。
- **SkillHub**：接入 `skillhub.cn` 公开榜单和完整公开搜索，真实下载、一键安装。
- **GitHub 技能仓库**：Anthropic Skills、Superpowers、Matt Pocock、Open Design，支持分页。
- **连接器**：15 个独立 MCP + 181 个不依赖专有授权后端的连接器。
- **项目模板**：产品需求、市场调研、团队知识库、项目交付、Bug 跟踪。
- **单装或整套**：权限插件是可选的；缺少 access/identity/audit 时，专家、连接器、项目使用本地个人模式。

## 安装

从 [最新 Release](https://github.com/Symon12138/dsh-expert-workshop/releases/tag/expert-workshop-v0.2.0) 下载 7 个 `.tgz`。

整套安装（按依赖顺序）：

```bash
dsh plugin --profile web add file:/path/expert-workshop-provider-identity-local-0.1.0-alpha.8.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-audit-0.1.0-alpha.7.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-access-0.1.0-alpha.8.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-skills-0.1.0-alpha.60.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-experts-0.1.0-alpha.25.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-connectors-0.1.0-alpha.11.tgz
dsh plugin --profile web add file:/path/expert-workshop-plugin-projects-0.1.0-alpha.6.tgz
dsh --profile web
```

最小组合：

| 想要的功能 | 安装 |
| --- | --- |
| 只要技能 | `skills` |
| 专家 + 配备技能 | `skills` + `experts` |
| 只要连接器 | `connectors` |
| 只要项目 | `projects` |
| 权限/多用户/审计 | 再加 `identity-local` + `audit` + `access` |

完整安装说明、数据位置、重置方式和限制见 [STANDALONE.md](STANDALONE.md)。

## 数据与首次启动

- 专家目录：`~/.dsh/storages/expertworkshop_experts`
- 专家 preset：`~/.agents/.expertworkshop-state/experts/presets`
- 技能：`~/.agents/skills`
- 项目：`~/.dsh/storages/expertworkshop_projects`

删除专家目录和 preset 后，下次启动会从包内 seed 重新生成；有本地修改请先备份。

## 验证

- 干净 standalone profile（仅 `dsh-base`、`dsh-web-app`、`skills`、`experts`）可正常启动。
- 首次启动自动 seed 644 条专家记录；专家 API 返回 419 个可见专家/团队，技能 API 返回 132 个技能。
- Web profile 已完整验证专家中心、我的专家、详情、召唤、SkillHub 搜索/安装、连接器、项目。

## 已知限制

- 不包含付费专家、云端同步、分享链接、上架审核、真实使用量统计。
- 需要专有服务端授权体系的连接器没有包含。
- 部分 SkillHub 企业专有技能不提供下载包。
- A股研究团队保留 20 个技能中的 19 个，20 个时 preset 编译失败。
- 单插件本地模式没有权限隔离和审计；多人或企业场景请安装治理插件。

## 许可

MIT。WorkBuddy 仅用于说明本套件对标的产品交互。
