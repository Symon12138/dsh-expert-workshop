# DSH Expert Workshop

**A WorkBuddy-style expert and skill suite for DeepSeek Harness, delivered as independent plugins.**

Expert Workshop adds an expert center, expert teams, a skill marketplace, a connector marketplace, and project templates to a local DeepSeek Harness profile. Each capability is a separate plugin with its own data. You can install the whole suite or only the pieces you need.

This is a plugin suite, not a desktop application and not a hosted service.

## What it contains

| Plugin | What it does | Version |
| --- | --- | --- |
| `expert-workshop-plugin-experts` | Expert center, expert teams, categories, avatars, quick prompts, detail page, summoning | `0.1.0-alpha.25` |
| `expert-workshop-plugin-skills` | Local skills, SkillHub public catalog/search, GitHub skill repos, install/enable/edit/uninstall | `0.1.0-alpha.60` |
| `expert-workshop-plugin-connectors` | MCP market, add/edit/enable/delete, tool and connection status | `0.1.0-alpha.11` |
| `expert-workshop-plugin-projects` | Projects, built-in templates, project workspace | `0.1.0-alpha.6` |
| `expert-workshop-plugin-access` | Permission and session ownership layer (optional) | `0.1.0-alpha.8` |
| `expert-workshop-plugin-audit` | Audit journal (optional) | `0.1.0-alpha.7` |
| `expert-workshop-provider-identity-local` | Local personal identity (optional) | `0.1.0-alpha.8` |

## Features

- **419 experts and expert teams** with categories, featured scenes, real avatars, quick prompts, required skills, and detail pages.
- **Expert teams** keep their lead and member prompts; the A-share research team includes six collaboration scenarios.
- **Bundled data**: the expert plugin ships its catalog and presets; the skills plugin ships 123 expert skill packs. First install seeds them automatically, so a fresh profile is immediately usable.
- **SkillHub**: public rankings and full public search from `skillhub.cn`, with real downloads and one-click installs.
- **GitHub skill repositories**: Anthropic Skills, Superpowers, Matt Pocock, and Open Design, with pagination.
- **Connectors**: 15 standalone MCP servers plus 181 connectors that are not tied to a proprietary authorization backend.
- **Project templates**: product requirements, market research, team knowledge base, delivery, and bug tracking.
- **Standalone or combined installs**: the governance plugins are optional; experts, connectors, and projects fall back to a local personal mode when they are absent.

## Installation

Download the seven `.tgz` assets from the [latest release](https://github.com/Symon12138/dsh-expert-workshop/releases/tag/expert-workshop-v0.2.0).

Full suite, in dependency order:

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

Minimal combinations:

| Goal | Install |
| --- | --- |
| Skills only | `skills` |
| Experts with their skills | `skills` + `experts` |
| Connectors only | `connectors` |
| Projects only | `projects` |
| Permissions, multi-user, audit | Add `identity-local` + `audit` + `access` |

Detailed instructions, data locations, reset steps, and limitations: [STANDALONE.md](STANDALONE.md).

## Data and first run

- Expert catalog: `~/.dsh/storages/expertworkshop_experts`
- Expert presets: `~/.agents/.expertworkshop-state/experts/presets`
- Skills: `~/.agents/skills`
- Projects: `~/.dsh/storages/expertworkshop_projects`

Deleting the expert catalog and presets makes the plugin seed the bundled catalog again on the next start. Back up first if you have local edits.

## Verification

- A clean standalone profile with only `dsh-base`, `dsh-web-app`, `skills`, and `experts` starts successfully.
- First start seeds 644 expert records; the expert API returns 419 visible experts and teams, and the skill API returns 132 skills.
- The browser profile was exercised end to end: expert center, my experts, detail pages, summoning, SkillHub search and install, connectors, and projects.

## Known limitations

- No paid experts, cloud sync, share links, marketplace review, or real usage telemetry.
- Connectors that require a proprietary server-side authorization service are not included.
- Some enterprise SkillHub skills do not provide downloadable packages.
- The A-share team keeps 19 of 20 skill packs because preset compilation fails at 20.
- Standalone local mode has no permission isolation or audit; install the governance plugins for shared or enterprise use.

## License

MIT. WorkBuddy is referenced only to describe the interaction model this suite was designed to match.
