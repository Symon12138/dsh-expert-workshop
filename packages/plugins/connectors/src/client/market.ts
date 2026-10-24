/** Public WorkBuddy connector-catalog entries that are not tied to WorkBuddy's
 *  server-side authorization: direct remote MCP endpoints with their own auth. */
export type MarketConnector = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly transport: 'streamable-http' | 'sse';
  readonly category: string;
};

export const MARKET_CONNECTORS: readonly MarketConnector[] = [
  {
    "id": "24haowan-space",
    "name": "24好玩 · 方案空间",
    "description": "24好玩·方案空间（space.24haowan.com）：Agent 原生的 B2B 售前方案沟通平台，21 个工具。把做好的方案（PDF / PPTX / 网页 Deck / Markdown）发布成客户专属的微信可读链接，读回客户看了哪几页、停留多久、有什么反馈，把会议意见记回方案，改稿出新版原链接自动更新。需微信扫码登录授权。",
    "url": "https://space.24haowan.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "24haowan",
    "name": "24好玩 互动营销资料库",
    "description": "24好玩（24haowan）的匿名只读 MCP 服务，8 个工具：实时查询互动营销 H5 活动模板库、真实客户案例库、帮助中心知识库，以及来自平台真实活动的行业基准数据（中奖率 / 奖池档位 / 活动周期 / 玩家行为）。免注册、无 API Key、只读无副作用。",
    "url": "https://mcp.24haowan.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "3chat-customer-growth",
    "name": "3Chat 私域客户运营",
    "description": "面向使用AI客服、销售智能体开展私域运营和客户转化的企业与商家。可在WorkBuddy中，通过自然语言查找、筛选和理解微信、企业微信、小红书、抖音等渠道中的真实客户，获取客户画像、历史沟通、兴趣偏好、购买意向和成交阶段，并执行单客户触达、批量营销、客户激活和精准跟进。客户回复后，可由3Chat AI客服/销售智能体继续自动接待、回答咨询、识别高意向客户、处理销售异议并推进成交，形成客户洞察、精准触达、AI接待、持续跟进、成交转化的私域客户运营闭环。当前能力基于企业已接入3Chat的客户和渠道数据，不用于获取企业尚未拥有或未授权访问的外部用户数据。",
    "url": "https://app.3chatai.cn/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "51shebao-hr-tools",
    "name": "51社保",
    "description": "查询各城市社保、公积金缴费基数、比例、办理截止日、最低工资、社平工资与产假天数，检索社保政策原文与政策分析报告，附政策依据原文链接。",
    "url": "https://www.51shebao.com/hr-mcp/mcp/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "bazhuayu",
    "name": "八爪鱼",
    "description": "用自然语言驱动八爪鱼云采集：搜索模板、启动任务、查询进度、导出结构化数据，并管理已有任务。",
    "url": "https://mcp.bazhuayu.com?includeTools=search_templates,execute_task,get_task_status,export_data,search_tasks,start_or_stop_task",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "baixiao-mcp",
    "name": "百晓智能",
    "description": "中英文学术检索: 搜索期刊论文、专著、政策文件；查阅最新基金招投标信息；核实参考文献真伪、追溯引用；推荐投稿期刊与审稿人。",
    "url": "https://mcp.know-pa.cn/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "reportgem-research",
    "name": "报告驿站",
    "description": "聚合数百家全球研究机构的千万级研报，并整合全球公司公告、美国SEC 文件，全球公司业绩会、学术论文，公开路演及图表，双语资料。经 RAG 结构化处理，减少 Token 消耗，提升检索效率和投研回答准确率。",
    "url": "https://www.reportgem.com/mcp",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "pkulaw",
    "name": "北大法宝·法律智能检索",
    "description": "检索 + 核验一体：语义（自然语言描述）与关键词双模式检索法规、法条与司法案例；并可把文本中的法条引用与案号回北大法宝库逐条比对、对齐标准名称，输出带 pkulaw.com 原文链接的可溯源结果，专治法律幻觉。",
    "url": "https://apim-gateway.pkulaw.com/mcp-law-agg/1.0.0/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "caihui-mcp",
    "name": "财汇金融与风险数据",
    "description": "财汇 MCP 提供专业金融与风险数据服务，覆盖境内企业工商、上市公司、债券、基金、金融机构、宏观与区域经济、监管与司法风险、新闻公告及法规等多维度数据，支撑金融数据查询、风险评估、分析研究、投资交易、舆情监测、投行尽调、信贷管理、合规审查等业务场景。",
    "url": "https://mcp.finchina.com/finchina-data-mcp-server/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "candao-age",
    "name": "餐道.数智经营",
    "description": "一句话掌握餐厅外卖口碑：查询授权门店、评价指标、差评原因与趋势，快速生成评价分析报告。",
    "url": "https://mcp-server.can-dao.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tplus-api",
    "name": "畅捷通T+",
    "description": "畅捷通 T+Cloud 自然语言操作入口：查询/管理销售订单、采购订单、库存单据、生产工单、财务凭证、报表及基础档案。",
    "url": "https://mcphub.chanapp.chanjet.com/151/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "morningstar",
    "name": "晨星 Morningstar",
    "description": "接入晨星全球与中国基金数据，通过自然语言实现基金查询、筛选、分析与深度研究，以及组合穿透分析",
    "url": "https://mcp.morningstar.cn/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "chuhaijiang",
    "name": "出海匠",
    "description": "基于实时 TikTok Shop 数据完成选品、竞品分析、达人筛选与带货内容创作，并管理社媒账号、发布内容、运营评论和私信。",
    "url": "https://mcp.gateway.chuhaijiang.com/mcp/oauth",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "meo-xiaoyuan",
    "name": "出海精灵·小元",
    "description": "面向中国外贸企业的 AI 出海助手：搜买家、盘客户、查同行、看市场数据，给出买家清单与跟进建议。",
    "url": "https://mcp_xy.tradechina.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "h3yun-connector",
    "name": "氚云",
    "description": "通过氚云连接器，将日常业务快速构建为可配置、可协同、可追踪的数字化应用。支持快速创建应用表单、管理业务数据、以流程驱动审批与任务流转，适用于客户、项目、采购、库存、售后等多类业务管理场景。",
    "url": "https://www.h3yun.com/v1/agent/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "dami-external-mcp",
    "name": "达秘-TikTok批量建联&达人管理工具",
    "description": "通过自然语言批量管理 TikTok 达人建联、邀约、私信和店铺/商品/达人查询。",
    "url": "https://ai.tikclubs.com/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "dzh-mcp",
    "name": "大智慧MCP",
    "description": "提供A股K线行情、A股实时行情、港美股K线行情、港美股实时行情、期货K线行情、期货实时行情、基金行情、公司简况资料、公司主营产品、公司股东、公司分红送转、公司财务（利润表）、公司财务（资产负债表）、公司财务（现金流量表）、股票题材概念、A股板块、研究报告、公司公告、新闻舆情、资金流向、机构调研、龙虎榜、融资融券、股票技术指标等数据查询工具，辅助投资决策。",
    "url": "https://mcpali.dzh.com.cn/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "getnote",
    "name": "得到大脑（原 Get 笔记）",
    "description": "连接得到大脑与 AI：随手保存文字、网页和图片，语义查找个人笔记，读取录音转写与会议待办，并用标签、文件夹和知识库整理长期信息。",
    "url": "https://openapi.biji.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "deli-mcp",
    "name": "得理法律数据",
    "description": "得理法律数据 MCP 连接器，提供权威法律数据检索，覆盖 1.7 亿+裁判文书与 300 万+法律法规。支持自然语言案例检索、法规检索与法律问答，可按案情描述、争议焦点、法规名称或条款内容语义检索，并获取案例/法规详情与效力状态。",
    "url": "https://platform.delilegal.com/api/v1/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "dnb-global-data",
    "name": "邓白氏查全球",
    "description": "通过自然语言查询邓白氏全球企业档案、财务数据、风险洞察、企业关联及最终受益人（UBO）等商业洞察。",
    "url": "https://plus.dnb.com/v2/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "xmed-figure-mcp",
    "name": "迪安智能科研云",
    "description": "科研数据可视化：火山图、PCA、富集分析、生存分析，自动匹配发表级输出",
    "url": "https://x-med-kyy-mcp.dazd.cn/kyy_visualization_mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "dingdanbao",
    "name": "订单豹",
    "description": "面向批发业务员的订单豹助手，覆盖代客下单、客户运营、库存、采购、催款与业绩简报。",
    "url": "https://wbmcp.shansugou.com/mcp",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "mx-ds-mcp",
    "name": "东方财富妙想MCP",
    "description": "通过自然语言查询的金融投研 MCP 工具套件，依托东方财富数据源，提供A股、港股、美股、基金、债券、指数板块、宏观数据查询，具备多条件资产筛选、券商研报检索、全市场公告解析、金融资讯检索能力。",
    "url": "https://mxapi.eastmoney.com/mxds/v2/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "orientfutures-mobile-knowledge-base",
    "name": "东证期货",
    "description": "接入东证期货MCP服务，一句话检索经审核的期货知识、交易制度、风险投教、合约资料和开户注册说明，助力您高效进行投资决策。",
    "url": "https://commosmart.orientfutures.com/mcp/knowledge-base",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "opcmenu",
    "name": "独行录",
    "description": "让你的 Agent 在独行录找合作、筛选报名机会、跟进报名结果，并帮助主办方处理报名名单。",
    "url": "https://mcp.opcmenu.com/mcp",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "duoguan-fengchao",
    "name": "夺冠蜂巢",
    "description": "覆盖内容大脑、品牌画像、热点选题、口播与图文文案、配图、播客、配音、视频封装和多账号运营的一站式 AI 自媒体内容生产平台。",
    "url": "https://fc.duoguan.com/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "xiehui-fr",
    "name": "法国协会网",
    "description": "查询法国内政部官方登记库收录的 3,640 家华人协会，可按名称、城市、类型搜索，查看认证状态与登记信息，联系前先核实。",
    "url": "https://xiehui.fr/api/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "fyopen-lawsearch",
    "name": "法研·法律法规检索",
    "description": "法研·法律法规检索，支持自然语言获取精准、现行有效的法规条文，将高质量、海量的法规知识库，无缝接入各类AI应用与工作流中。",
    "url": "https://api.cjbdi.com:8443/354347/mcp_law_service",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "fanruan-growth-advisor",
    "name": "帆软增长谋士",
    "description": "企业洞察与增长分析：查询企业经营风险、舆情、招投标、专利、资质、政策等公开商业数据，并调用已授权的 MOSS 增长谋士 Agent 生成分析与报告。",
    "url": "https://www.mossdo.com/api/v1/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "variflight-mcp",
    "name": "飞常准",
    "description": "查询航班动态、运行分析、逐航班机票与价格、机场与航司服务，以及当前用户的行程、统计和航班关注信息。用户身份由 C 端 MCP Key 确定。",
    "url": "https://c-gw.variflight.com/chat_message/mcp/api/legacy",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "fbs-connector",
    "name": "福帮手",
    "description": "福帮手连接器：协助确认服务身份、匹配场景方案、记录已完成进度并查询乐包。实际能力以当前服务与授权范围为准。",
    "url": "https://api2.u3w.com/fbs-mcp/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "fuma-ai-callout",
    "name": "福马AI外呼任务",
    "description": "通过 WorkBuddy 查询福马AI手机智能体、成员列表，并创建 AI 外呼任务。",
    "url": "https://services.vcrm.vip:60610/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "gaodun-job",
    "name": "高顿•实习就业助手",
    "description": "大学生实习就业全链路 AI 助手：智能推荐公考岗位，检索实习与校招职位，提供 MBTI、霍兰德等职业测评，简历诊断与 AI 优化改写，面试刷题与模拟面试评估报告，助你拿 offer。",
    "url": "https://apigateway.gaodun.com/dyson/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "gongxie-erp",
    "name": "共鞋ERP",
    "description": "查询并管理共鞋ERP中的仓库、库存、商品、订单及出入库业务。",
    "url": "https://www.gxerp123.com/tgc/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "gfsecurities",
    "name": "广发证券",
    "description": "通过广发证券 MCP，完成多维选股、深度研究、智能盯盘三大核心场景的智能投研服务，实现市场热点跟踪、资讯动态解读、标的筛选、投后复盘的智能投资闭环。",
    "url": "https://mcp-api.gf.com.cn/server/mcp/gfzq/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "hanyi-fonts",
    "name": "汉仪字库",
    "description": "连接汉仪交付平台服务，在 WorkBuddy 中查询企业合同、字体权益以及字体预览。",
    "url": "https://hanyi-mcp.hellofont.cn/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "hose-ai-assistant",
    "name": "合思 AI 助手",
    "description": "连接合思差旅服务，提供身份校验、短信登录以及企业实时机票、酒店和火车票查询能力。",
    "url": "https://aitrip.hosecloud.com/api/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "gildata",
    "name": "恒生聚源 MCP",
    "description": "连接恒生聚源 MCP，查询金融结构化数据、研究报告、公司公告、新闻资讯、条件选股、宏观行业、工商企业数据。支持基金经理观点持仓一致性分析、行业速报生成、金融资讯热点解读。",
    "url": "https://api.gildata.com/mcp-servers/aidata-assistant-srv-tool?token=${GILDATA_TOKEN}",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "wscnmcp-token",
    "name": "华尔街见闻",
    "description": "华尔街见闻MCP —— 提供 A 股大涨股异动归因与华尔街见闻全球财经资讯查询能力。支持查询近两个月的大涨个股（含上涨原因、关联板块、板块异动描述，自动按板块归类），以及华尔街见闻全球资讯列表与文章详情，帮助快速抓住当日市场主线、追踪财经热点。",
    "url": "https://xgb-mcp-api.xuangubao.cn/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "yuandian-mcp",
    "name": "华宇元典法律数据",
    "description": "华宇元典法律数据为智能体提供法律法规、案例文书、企业信息 MCP 工具能力。",
    "url": "https://open.chineselaw.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "huita-ims",
    "name": "慧獭进销存",
    "description": "慧獭进销存一体化 MCP 连接器：商品/库存（多店多仓、批号效期）、销售与采购开单、往来对账、经营分析。提供 14 个只读 + 6 个分析 + 12 个写工具（preview→commit 两阶段写），数据与慧獭桌面端/收银台实时同步。",
    "url": "https://www.yunqi-zhilian.com/AIAgent/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "huize-insurance-product-recommendation",
    "name": "慧择保险产品推荐",
    "description": "根据年龄、人群、职业、预算和保障需求，从慧择内部产品推荐库中筛选并比较保险产品。",
    "url": "https://hzc-prosearch.hzins.com/product-recommendation/mcp",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "opendata",
    "name": "及刻智能·时空数据MCP",
    "description": "通过自然语言查询线下时空数据，提供区域热力、场景识别、客流分析、POI查询等能力，助力商业洞察、开店选址等应用场景。",
    "url": "https://mcp.isjike.com/mcp-servers/opendata/sse",
    "transport": "sse",
    "category": "数据"
  },
  {
    "id": "jiandaoyun",
    "name": "简道云",
    "description": "简道云零代码平台连接器，自然语言对话创建企业应用、沉淀表单、数据、处理流程审批，查询企业业务数据进行深度分析，帮助企业快速基于真实业务数据进行AI改造",
    "url": "https://mcp.jiandaoyun.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "investoday-finance-data",
    "name": "今日投资金融数据",
    "description": "查询 A 股、港股、基金、指数、行情、财务、公告、研报、宏观经济、板块主题和产业链等金融数据与投研信息。",
    "url": "https://data-api.investoday.net/data/mcp?source=work_buddy",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "jinshouzhi",
    "name": "金手指·AI广告投放",
    "description": "WorkBuddy 里的腾讯广告投放执行台：查数据、写需求单、生成投放深链、轻量调优。",
    "url": "https://ad-goldfinger.app.fitgroup-fat.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "finenter",
    "name": "进门投研",
    "description": "进门MCP覆盖券商、上市公司及资管机构的公开路演内容，整合内外资研报、券商点评等机构级观点，并提供实时行情、财务及量化因子等数据。经Data Agent清洗与结构化处理，减少Token消耗，提升回答准确率。",
    "url": "https://mcp-server-global.comein.cn/mcp-servers/mcp-server-brm",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "jiushuyun",
    "name": "九数云BI",
    "description": "上传 Excel 或 CSV 表格，一键生成原生的可视化数据分析报告、仪表板、图表。",
    "url": "https://work.jiushuyun.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "sesunfox-gateway",
    "name": "聚宝赞",
    "description": "通过自然语言查询聚宝赞的订单、商品、门店、优惠券、退款单、直播间和云仓库存数据。",
    "url": "https://ai.jubaozan.cn/mcp/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "kling-ai-plugin",
    "name": "可灵 AI",
    "description": "一句话，让灵感从想法变成大片。可灵 AI 是面向创作者的 AI 生图与 AI 生视频连接器，可在 WorkBuddy 中直接用自然语言完成图片生成和视频生成，包括文生图、图生图、文生视频、图生视频、单镜头与多镜头视频。适合制作海报、插画、人像、商品图、电商主图、Listing 图、广告素材、产品展示视频、营销短片、电商短视频、种草视频、社交媒体视频和电影感创意视频，可用于淘宝、天猫、京东、拼多多、抖音、快手、小红书、TikTok、Amazon、Shopify 等平台的内容创作。支持查看主体库（Element）列表和主体详情，创建、更新、删除及复用主体。支持查询和预览动作库，并将库中动作或参考视频应用到主体图进行动作控制生成。支持上传参考图片、查询剩余额度、提交生成任务、跟踪生成进度、查询任务状态并获取最终图片或视频结果。如果你正在搜索竞品、同类工具或替代方案，如海螺 AI（Hailuo AI）、Seedance（Seeddance）、Vidu、即梦（Jimeng）、Runway、Pika、Sora 或 Veo，也可以使用可灵（Kling / Kling AI）快速完成高品质图像与视频创作，搭建自己的 Kling MCP AI 创作工作流。",
    "url": "https://klingai.com/mcp/plugin",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "deeplink",
    "name": "克而瑞地产数据",
    "description": "克而瑞地产数据依托经克而瑞授权、积累近 20 年的中国不动产数据。「问数」覆盖新房、二手房、土地、企业、宏观、长租公寓、产城、康养、商办九大领域，支持自然语言查询、排行、趋势与多城对比；「问知」提供地产、物业、银发领域的政策、研究、企业、法规和运营知识问答。",
    "url": "https://mcp.dichanai.com/mcp-server",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "lemon-agi",
    "name": "乐檬零售",
    "description": "连接乐檬零售 AGI 能力平台，通过自然语言查询零售、批发、进销存、WMS、基础资料等业务数据。",
    "url": "https://cloud.nhsoft.cn/agi/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "lexiang",
    "name": "乐享知识库",
    "description": "搜索、创建和管理乐享知识库中的文档。支持导入 Markdown、按标签整理内容、追踪团队文档的更新动态。",
    "url": "https://mcp.lexiang-app.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "lxcloud",
    "name": "励销CRM",
    "description": "用自然语言查询和录入励销CRM线索、客户、商机、合同、产品、回款开票、跟进记录等业务数据，轻松搞定销售全链路工作。",
    "url": "https://mcp.weiwenjia.com/mcp-servers/lxcloud",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "connector-workshop",
    "name": "连接器工坊",
    "description": "探测远程 MCP 端点能力，起草并校验 WorkBuddy 连接器配置，产出符合规范的连接器 zip 包。",
    "url": "https://connector.smartbid.site/mcp",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "liesun",
    "name": "猎隼AI智聘",
    "description": "连接猎隼，科学选人、精准选人。人选对比、面试录音分析、在招进展和招聘漏斗，一句话快速评估还要不要往下推。",
    "url": "https://liesun-api.mabangerp.com/api/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "lingyi-mcp",
    "name": "零一运营",
    "description": "零一运营独家知识库：7大行业的视频号/私域的爆款内容案例库 + 零一300万份运营实战文档萃取。",
    "url": "https://service.lingyishuke.com/api/v1/skill-provider/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "lingxing-mcp",
    "name": "领星ERP",
    "description": "使用自然语言查询和管理领星ERP中的店铺、库存、Listing、销售、利润、广告和运营数据。",
    "url": "https://openmcp.lingxing.com/mcp-servers/lingxing-mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "menglar-ozon",
    "name": "萌啦数据Ozon-选品数据分析",
    "description": "萌啦数据Ozon-选品数据分析提供 Ozon 类目、商品、关键词、品牌、店铺与大盘趋势等大数据查询能力，帮助跨境卖家完成选品与运营分析。",
    "url": "https://api.menglar.com/gateway/ai/mcp/ozon-mcp-service/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "mindbye-contract-review",
    "name": "明白律师·合同风险审查",
    "description": "基于头部律所40余年合同审查与争议处理实战经验沉淀，面向劳动、离婚、租赁、委托、买卖等中文合同，自动识别关键法律与交易风险，并生成规范审查报告、修改建议和 Word 批注版，提升审查效率和签署安全性。",
    "url": "https://mcp-server.mindbye.com/mcp-servers/contract-review-prod",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "myunker-mcp",
    "name": "明源云客",
    "description": "明源云客 AI 智能服务平台，以房地产营销垂直大模型为底座，统一整合客户、案场、渠道、视频营销全线产品数据，打通 AI 内容创作、直播获客、线索承接至成交全业务闭环。",
    "url": "https://mcp.myscrm.cn/myy-mcp-server/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "mzl-trademark",
    "name": "摩知轮商标查询",
    "description": "用自然语言检索商标：按名称、申请人、申请号、注册号、尼斯类别、法律状态、日期范围查询，覆盖中国及 110+ 海外国家/地区商标局；并支持以图搜图的图形近似检索。",
    "url": "https://www.mozlen.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "qisemierp",
    "name": "七色米进销存",
    "description": "通过自然语言连接七色米进销存系统，随时查询商品、库存、客户、供应商及销售、采购、出入库等业务单据；支持销售统计、欠款对账、单据创建等操作，让业务数据问答即得。",
    "url": "https://mcp-internal.qisemiyun.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "qibook-mcp",
    "name": "企百科",
    "description": "查询企业工商登记数据，支持企业模糊搜索、企业基本信息、受益所有人、股东、实际控制人、工商变更、联系方式、主要人员、分支机构、对外投资、年报、上市公司相关信息等企业尽职调查场景。",
    "url": "https://datamcp.qibook.com/mcp/basic-ent-tools",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "qcc-company",
    "name": "企查查",
    "description": "查询和核实企业工商登记信息。支持股东结构、实际控制人、受益所有人、高管团队、对外投资、财务数据、年报及上市信息查询，用自然语言快速完成企业身份核验与背景调查。",
    "url": "https://agent.qcc.com/mcp/company/stream",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "qcc-legal",
    "name": "企查查·法律数据",
    "description": "检索与核验中国法律法规和司法案例。覆盖全量现行法律、行政法规、司法解释——法规级到法条级逐字正文，标注时效性与效力级别；海量裁判文书及 2.5 万+ 权威案例（最高法/最高检指导性案例、公报案例、典型案例）；并对文本中的法条与案号引用逐条回库核验、标注时效、生成可溯源超链。用自然语言完成法条依据查找、类案检索、原文调取与法律引用核验，从源头消除法条与案号幻觉。",
    "url": "https://agent.qcc.com/mcp/legal/stream",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "qzd-connector",
    "name": "企智多",
    "description": "接入企智多企业数据服务，支持通过自然语言查询企业基本概况等企业信息，快速了解企业背景。",
    "url": "https://testzsai.cecjx.com/mcp/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "qixinhuiyan-mcp",
    "name": "启信慧眼",
    "description": "通过启信慧眼 MCP 接入企业全景数据能力，支持用户用自然语言完成企业搜索、工商画像、风险识别、经营动态、知识产权等商业情报分析。",
    "url": "https://mcp.qixin.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "qiyuan-robot-executor",
    "name": "启元机器人执行器",
    "description": "让启元 Q1 机器人播报文字，并在现场安全确认后执行比心或向前走动作。",
    "url": "https://47.100.55.122/robot-mcp/mcp",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "58pic-qiantu-ai",
    "name": "千图 AI",
    "description": "在 WorkBuddy 中搜索正版素材、生成图片和视频、运行可编辑工作流，并管理创意资产。",
    "url": "https://mcp.58pic.com/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "qinghu-ai",
    "name": "青虎AI",
    "description": "连接青虎AI电商 SaaS，覆盖数据研究、选品与运营分析，以及 LinkPix 商品图、详情页、广告素材和短视频创作。",
    "url": "https://www.iqinghu.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "qingflow",
    "name": "轻流",
    "description": "轻流无代码平台连接器。通过自然语言创建应用、管理表单数据、处理审批流程、查询和导出数据，一站式连接轻流全部能力。",
    "url": "https://mcp.qingflow.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "replygen",
    "name": "睿答",
    "description": "跨境电商多店铺客服 AI 连接器（Shopee 等）：用自然语言做每日买家问题总结、多店经营汇总、工单处理统计、会话洞察与订单快照报表。提供 25+ 只读/分析工具，跨店铺跨语种，买家隐私数据经脱敏后输出。",
    "url": "https://ruida.shopgen.net/v1/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "camscanner-mcp",
    "name": "扫描全能王",
    "description": "智能文档转换与处理平台。支持图片/PDF转Word、Excel、Markdown，图片转PDF，Word/Excel/PPT转PDF，Office文档格式升级（DOC→DOCX等），图片增强（去阴影、锐化、高清化、老照片修复），OCR文字识别、图片翻译、公式提取、水印处理、多图合并，以及云文档保存/搜索/下载/移动/文件夹管理等。",
    "url": "https://ai-tools.camscanner.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "sumscope-data",
    "name": "森浦qeubee金融数据",
    "description": "查询森浦固定收益市场数据：债券基础信息、一级发行、票据行情、舆情信息、发行人财务报表、宏观指标和交易日历。",
    "url": "https://data-api.qeubee.cn/sumscope/common/mcp/stream",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "sq-company-dynamic",
    "name": "上奇产业通-企业动态追踪",
    "description": "实时追踪企业全生命周期动态，覆盖投资设立、股权变动、创新平台、中标、知识产权、排名、迁移、资质认定、工商变更、上市、标准制定、招聘、拿地等维度，并提供企业实体匹配。",
    "url": "https://api.chanyedata.com/mcp/c3f5924cc60dbe1729f5cc332e627304/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "gt-generate-sql-data",
    "name": "设备云维保",
    "description": "通过自然语言查询设备信息、故障报修、维修保养、备件库存及出入库记录，支持统计、趋势分析、分类对比和明细下钻。",
    "url": "https://ywbmcp.gtshebei.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "dknowc-mcp",
    "name": "深知可信工作台",
    "description": "深知可信工作台聚焦法律、政策、标准等可信知识服务，并覆盖产业研究和公共服务场景。支持将复杂问题拆解为可验证的检索任务，综合多来源材料交叉验证，追溯权威原文及依据，形成来源清晰、可核验的问答、检索与研究结果。",
    "url": "https://mcp.dknowc.cn/s6/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "yuanbei-hub",
    "name": "生意专家",
    "description": "连锁门店经营数据助手，支持销售排名、库存补货、会员分析和经营诊断等查询",
    "url": "https://mcp.kaidian100.cn/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "shuidi-discovery",
    "name": "水滴信用-企业发现",
    "description": "基于企业数据仓库，面向企业发现与筛选场景：支持按工商信息、司法风险、荣誉资质、招投标、股权关系等多维条件组合筛选企业清单，可一键剔除失信/被执行/行政处罚等风险主体，也可从已知企业出发穿透挖掘关联企业群。适用于获客名单挖掘、供应商准入筛选、风险排查、区域产业分析等场景。",
    "url": "https://aidaas.shuidi.cn/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "shuidi-credit",
    "name": "水滴信用-企业尽调",
    "description": "水滴信用企业大数据全维度洞察，输入企业名称即可获取工商照面、股东股权、实控人穿透、司法风险、知识产权、招投标、税务信用、科创评分等全维度企业信息。适用于供应商准入尽调、企业背景核查、实控人与关联方穿透、风险预警监控、投资标的风险筛查等场景。",
    "url": "https://aidata.shuidi.cn/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "cisp-mcp",
    "name": "水滴征信",
    "description": "通过水滴征信企业信息服务平台查询工商、知识产权、舆情、财务、土地、企业关联关系、关联方等企业多维信息，并支持企业二要素/三要素核验。",
    "url": "https://cisp.zenitera.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "aimoderator",
    "name": "思研·AI调研平台",
    "description": "用自然语言快速创建 AI 访谈项目：提供标题、背景、大纲（及可选开场白），即可在思研平台生成访谈项目并返回可直接分享的访谈链接。",
    "url": "https://aimoderator.cn/api/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "archive-hospital-mcp",
    "name": "腾讯健康全周期管理平台",
    "description": "全周期管理平台机构端的数据查询MCP连接器，覆盖医疗数据、管理任务、对话沟通等业务域的查询能力，所有数据仅在对话内分析、不落盘不导出。",
    "url": "https://bingli.tengmed.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "wpe-general-connector",
    "name": "腾讯数电发票",
    "description": "一站式数电发票开具、交付、查验、入账等，助力企业高效开展发票业务。",
    "url": "https://server.wpe.tencent.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "es",
    "name": "腾讯云 Elasticsearch Service",
    "description": "通过 MCP 操作腾讯云 Elasticsearch Service（ES）：查询实例列表，查看集群健康、节点、分片与线程池状态，浏览索引配置与 Mapping，查询监控指标与集群日志，诊断集群性能与分片未分配问题，并管理集群（节点/磁盘变配、重启、索引 Rollover、别名、Kibana 访问、Logstash 管道）。",
    "url": "https://tcmcpserver.cloud.tencent.com/es/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tencent-tchouse-c",
    "name": "腾讯云数据仓库 TCHouse-C",
    "description": "腾讯云数据仓库 TCHouse-C 智能运维与分析助手，用自然语言完成集群健康诊断、慢 SQL 分析、规格选型推荐、表结构设计与 NL2SQL 查询。",
    "url": "https://tcmcpserver.cloud.tencent.com/tchousec/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tencent-dlc",
    "name": "腾讯云数据湖计算 DLC",
    "description": "通过 MCP 操作腾讯云数据湖计算（DLC）：执行 SQL / Spark SQL，浏览 Catalog、数据库、表与分区，管理 Spark 作业，查询任务与日志，诊断任务性能，查看引擎与用户权限。",
    "url": "https://tcmcpserver.cloud.tencent.com/dlc/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "xingtu-claw-risk",
    "name": "天创信用星图MCP",
    "description": "企业风险 AI 分析助手，用自然语言识别企业所属行业、分析企业间关联方关系（股权/实控人/担保/共同投资）。",
    "url": "https://claw-mcp.tcredit.com/mcp/sse",
    "transport": "sse",
    "category": "数据"
  },
  {
    "id": "jumper-kpi",
    "name": "天使医生",
    "description": "通过自然语言查询当前天使医生账号有权限的医院经营指标、渠道分布、同比环比及人员 KPI 完成情况。",
    "url": "https://sit-aimcp.jumper-health.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tyc-mcp",
    "name": "天眼查",
    "description": "通过天眼查 MCP 查询多维度企业数据。支持工商登记、股东结构、司法风险、知识产权、董监高、经营数据等 160+ 项企业数据能力，用自然语言完成企业尽调与商业情报分析。",
    "url": "https://mcp.tianyancha.com/v1",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "masocloud-barcode-generator",
    "name": "条码生成器",
    "description": "生成一维条形码、二维码与标签预览图，支持 CODE128、QR、DataMatrix、PDF417 等 9 种条码与 .alb 标签模板预览，可自定义尺寸、DPI、容错等级与是否显示文字。",
    "url": "https://ai.masocloud.net/DoYsSV/maso/mcp/sse",
    "transport": "sse",
    "category": "AI"
  },
  {
    "id": "datayes-data",
    "name": "通联数据",
    "description": "用自然语言查询金融数据：A股/港股、基金、债券、指数、期货期权、因子、实时行情、宏观、公告与政策法规。",
    "url": "https://dataapi-mcp-server.datayes.com/datayes-data/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tongzhou-fin-research",
    "name": "同舟金融研究",
    "description": "连接公开行情、研报检索、行业图谱与同舟投研材料，为股市研究提供可复核证据。",
    "url": "https://mcp-gateway.textmind-gz.com/mcp/tongzhou-research",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "weiban-agent-mcp",
    "name": "微伴助手",
    "description": "通过自然语言查询授权范围内的员工、客户、消息存档和工单，获取业务上下文并执行经确认的受控操作。",
    "url": "https://mcp.weibanzhushou.com/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "wm-weight-manage",
    "name": "微脉体重管理",
    "description": "生成个性化成人体重管理方案，渲染为可打卡的独立 HTML 页面：分阶段目标、饮食运动建议、餐食照片热量分析、本地体重记录。",
    "url": "https://ichoice.myweimai.com/weimai-gpt/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tencent-weiyun",
    "name": "微云",
    "description": "查看、下载、删除微云文件，并且提供上传文件到微云、生成分享链接能力，帮你管理微云文件",
    "url": "https://www.weiyun.com/api/v3/mcpserver",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "neo-eakey",
    "name": "销售易·易启",
    "description": "面向个人的AI销售伙伴，一句话帮你看懂客户、评估商机、发现风险，并把判断转化为下一步行动。",
    "url": "https://buddy-ai.xiaoshouyi.com/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "neo-crm",
    "name": "销售易CRM",
    "description": "用自然语言查客户、推商机、盘线索、领公海、写跟进，一句话打通销售工作闭环。",
    "url": "https://mcp.xiaoshouyi.com/mcp",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "kingbot-xiaodie",
    "name": "小蝶记账",
    "description": "小微企业智能经营连接器：支持自然语言录入销售、采购等业务数据、经营数据查询与分析、销售趋势洞察",
    "url": "https://kb.jdy.com/kingbot-mcp/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "xiaoe-cloud-cli",
    "name": "小鹅通",
    "description": "用自然语言管理小鹅通店铺：查询课程与学员，创建和编辑课程，查看订单，并查找或上传图片、音频、电子书和文档素材。",
    "url": "https://agent.xiaoe-tech.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "xiaolv-law-search",
    "name": "小律同学 AI 法律检索",
    "description": "检索国内/国际法律法规、司法解释、量刑标准、指导案例（覆盖 168 国家/地区），支持法律文书起草（697 类模板）、编辑与合同审查。适合法律咨询、跨境合规、量刑赔偿计算、文书生成等场景。每次调用消耗积分，新用户注册即送 1688 积分。",
    "url": "https://mcp.aixllaw.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "syspetro-service-22065846",
    "name": "辛孚物性库",
    "description": "辛孚物性库连接器：按名称、分子式或 CAS 检索化学组分，查询身份详情与分子量、纯组分基础物性，以及二元混合物物性数据可用性。",
    "url": "https://marketplace.syspetro.com/syspetro-mcp-marketplace/mcp/service_22065846?authkey=${SYSPETRO_MCP_API_KEY}",
    "transport": "sse",
    "category": "数据"
  },
  {
    "id": "xhcj-mcp-announcements-news-policy",
    "name": "新华财经资讯MCP",
    "description": "公告、新闻、政策数据，包含股票资讯、板块资讯、热点新闻、资讯搜索、大宗快讯、外汇快讯、股票快讯、公告关键词检索、政策向量检索等",
    "url": "https://mcp.cnfic.com.cn/mcp-servers/xhcj-mcp-announcements-news-policy",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "h3c-cloudnet",
    "name": "新华三Cloudnet灵犀AI助手",
    "description": "面向网络运维场景的 AI 助手，支持网络运行状态查询、网络问题分析、设备/AP 信息查询和无线终端故障排查，帮助用户快速定位网络异常并获取处理建议。",
    "url": "https://oasis.h3c.com/mcp-server/api/sse",
    "transport": "sse",
    "category": "数据"
  },
  {
    "id": "xinke-laile-analytics-enterprise",
    "name": "新客来了数据分析企业版",
    "description": "通过自然语言分析企业自己的线索趋势、渠道来源和推送效果。",
    "url": "https://api.huokexitong.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "leads-cloud-crm",
    "name": "询盘云CRM",
    "description": "通过 MCP 查询线索、客户、联系人、商机、订单、跟进、触点画像与 WhatsApp 会话。",
    "url": "https://mcp.leadscloud.com/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "yanxu",
    "name": "言序",
    "description": "通过自然语言创作并发布微信公众号文章：查询已绑定的公众号与样式主题、按主题排版建稿、一键推送到公众号草稿箱。",
    "url": "https://toolsvip.cn/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "sungo-device-registry",
    "name": "医疗器械注册查询",
    "description": "输入公司名，查它在中国 NMPA、欧盟 EUDAMED、美国 FDA、英国 MHRA、加拿大、巴西、台湾、韩国、俄罗斯等 14 个官方注册库的注册数量、风险等级分布与器械明细。收录 68,000+ 家企业，每条记录逐条回查过厂商名。免费每天 100 次，领密钥后不限次。",
    "url": "https://www.sungossytest.com/api/db/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "medlive-medical-qa",
    "name": "医脉通医学问答",
    "description": "面向医生的医学问答连接器：用自然语言提问并获取带文献依据的完整答案，支持多轮追问、文档问答与历史回看。",
    "url": "https://medseeker-test.medlive.cn/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "iyiou-connector",
    "name": "亿欧数据MCP",
    "description": "接入亿欧数据MCP服务，用自然语言查透产业数据——企业投融资、产业链上下游、产业研报等核心数据一目了然，还能随时调阅亿欧发布的产业观点、企业解读与市场洞察，助力您高效进行商业决策。",
    "url": "https://mcp.iyiou.com/data",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "eccang-reconcile",
    "name": "易仓跨境对账",
    "description": "发一份平台结算 Excel，自动核对 TikTok Shop / Tokopedia 账单与易仓结算数据：比对订单数与结算金额，标出金额差异、单边订单，并生成可对外的对账报告。",
    "url": "https://datacenter.eccang.com/nexus/mcp/stream",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "yichayun-trade-data",
    "name": "易查云贸易数据",
    "description": "全球海关贸易数据智能查询:按产品找海外采购商与供应商,分析市场趋势与伙伴国份额,查企业画像与资信。数据来自提单与官方统计原始记录,带明确时间口径,可追溯、可对账。",
    "url": "https://mcp.trade-ai.com/mcp/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "efunds",
    "name": "易方达基金",
    "description": "接入易方达基金MCP服务，一句话查透基金画像——业绩、风险收益、持仓结构等核心指标一目了然，还能随时调阅易方达发布的投研观点、产品解读与市场洞察，助力您高效进行投资决策。",
    "url": "https://sc.efunds.com.cn/api/csai-mcp-service/mcp/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "easymofang",
    "name": "易智魔方",
    "description": "商品文案/图片商标侵权检测，以及电商套图生成与重绘。",
    "url": "https://operate.yibainetwork.com/api/easy-operate/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "yixiaoke",
    "name": "翼小客",
    "description": "用自然语言查客户、商机、订单，写跟进、处理待办审批，查通话/短信/微信记录，管设备工牌，看风控统计，打通销售全链路。",
    "url": "https://call.yixiaoke.net/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "intco-ai-platform",
    "name": "英科AI中台",
    "description": "统一访问英科内部业务系统、RPA、企业数仓及已授权的企业付费数据服务。",
    "url": "https://ai-platform.intcomedical.com.cn:11443/agt_c8c1aaea4a564b0eb1878929dfbf37d2/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "yingmi-mcp",
    "name": "盈米MCP",
    "description": "查询基金与市场数据，完成基金研究、组合分析、财富规划及金融内容生成。",
    "url": "https://stargate.yingmi.com/mcp/v2?apiKey=${YINGMI_API_KEY}",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "shanglv-mcp-gateway",
    "name": "用友智能服务（AI BaaS）",
    "description": "通过用友银企联、税企联、商旅云等财务服务产品，为企业提供财务税务与银行资金数据服务，并提供企业商旅运营服务和行程服务。用自然语言完成企业的资金、税务、商旅的全面运营管理。",
    "url": "https://mcp-gateway.yql.net/mcp/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "verya-knowledgebase",
    "name": "予非AI知识大脑",
    "description": "连接后支持搜索、读取和总结予非AI知识大脑中的知识资料，融合知识图谱关联分析，通过自然语言快速定位文档、洞察实体关系并梳理知识脉络。",
    "url": "https://mcp.hcses.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "dramabuddy",
    "name": "阅文漫剧助手",
    "description": "阅文漫剧助手（DramaBuddy）是一个人人可用的通用漫剧制作工具——只需提供小说或创意，就能自动生成剧本、角色与分镜视频，轻松做出属于自己的漫剧。",
    "url": "https://aicomic.yuewen.com/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "yuntu-ft-workbench",
    "name": "云图外贸工作台",
    "description": "把 WorkBuddy 技能生成的外贸开发结果（买家报告/全球搜索/情报卡/跟进）自动写回「云图外贸工作台」工作台，基于 H5 + EdgeOne KV 云存储，数据主权归属用户（BYOC）。",
    "url": "https://ft.tzyuntu.cn/api/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "yzf-general-mcp-server",
    "name": "云帐房",
    "description": "一句话把票开了、税报了、政策理清了，省的是钱，更是心。",
    "url": "https://super-ai-app.yunzhangfang.com/api/mcp/general/stream",
    "transport": "streamable-http",
    "category": "开发"
  },
  {
    "id": "yunzhi-mcp",
    "name": "云指建站MCP服务",
    "description": "通过 MCP 服务创建/修改网站页面，管理网站的产品、文章等数据，与 Skill 结合实现从需求到页面的端到端自动交付，大幅简化建站流程。",
    "url": "https://mcp.yz168.cc/mcp/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "cloudmall-operations",
    "name": "云MALL运营",
    "description": "在 WorkBuddy 中用自然语言查询云MALL订单、商品与会员数据。连接运营账号后，按你当前的权限执行只读查询，结果实时返回，无需切换后台。",
    "url": "https://admin.rmall-solution.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "zhangsanfeng",
    "name": "账三丰",
    "description": "连接账三丰（财务云 / 进销存 / MES）。用自然语言查利润表、资产负债表、往来账龄、采购销售单据、库存、工单与报工进度；也能一句话生成记账凭证或开采购入库单草稿，确认后入账。",
    "url": "https://mcp.zhangsanfeng.vip/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "shopee-market-intelligence",
    "name": "知虾选品数据-Shopee虾皮大数据分析",
    "description": "通过知虾数据查询 Shopee 站点、类目、商品、店铺、品牌、趋势和热搜词，支持只读市场分析。",
    "url": "https://api.menglar.com/gateway/ai/mcp/shopee-service/mcp?key=${ACCESS_TOKEN}",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "primematrix-company",
    "name": "质数幻方·企业数据",
    "description": "提供企业主体的身份识别与基础信息查询服务，包含企业模糊搜索、受益所有人结果、企业基本信息、变更信息、企业联系方式、主要人员信息、企业股东信息等工具。",
    "url": "https://mcp.yidian.cn/mcp/company",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "patsnap-search",
    "name": "智慧芽专利&文献融合检索",
    "description": "在智慧芽全球专利数据库和文献库中进行融合检索，支持自然语言、语义搜索、关键词检索和多维过滤，并获取专利或文献信息。",
    "url": "https://connect.zhihuiya.com/2b0355/logic-mcp?apikey=${PATSNAP_API_KEY}",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "youshu-bd-mate",
    "name": "智客AI · 对公(To B)营销助手",
    "description": "对公营销助手是基于企业全维数据构建的对公营销智能助手，提供从生成访前一页纸、访前客情报告、产品找客、关键人画像、营销话术及按企荐品的完整展业闭环能力。",
    "url": "https://open.yscredit.com/ys-mcp/report",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "zfs-fssc-ai",
    "name": "中兴新云AI智报",
    "description": "财务云 AI 报销助手：用自然语言完成报销申请、发票查询识别、报销单查询与费用审批等操作。",
    "url": "https://mcpdemo.ztccloud.com.cn/sse",
    "transport": "sse",
    "category": "办公"
  },
  {
    "id": "zxygj-business-data",
    "name": "装修云管家",
    "description": "通过自然语言安全查询装修云管家中的客户、订单及其他业务对象数据。",
    "url": "https://mcp.zxygj.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "property-saas",
    "name": "卓越智慧物业云平台",
    "description": "连接 V8 智慧物业云平台，提供业主/租户检索、档案查询、欠费查询、报修工单查询与缴费核销能力，服务物业客服与收费场景。",
    "url": "https://h63.xa33.cn/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "agent-earth",
    "name": "AgentEarth 金融电商社媒工具集",
    "description": "专业金融股票行情、电商社媒数据、内容生成、搜索抓取、学术论文与专利信息、地图信息等。只需一次注册便可调用不同领域专业数据，无需逐一配置各类服务，价格相对官方有大幅折扣。目前已覆盖以下领域：金融： 查询 A股、美股股票行情、股价、K线、成交量、公司财务、财报及基本面数据，覆盖基金、ETF、外汇、汇率、比特币和加密货币，辅助股票与公司研究、投资分析和市场跟踪。接入 Tushare、CoinGecko 等金融数据服务。内容生成： 支持 AI 生图、文生图、图生图、商品图（如小红书图）、海报、抠图、文字渲染、图生视频、文生视频、数字人口播、配音、背景音乐与音效生成。聚合字节跳动即梦相关模型 Dreamina 即梦、Seedream、Seedance，以及可灵 Kling、通义千问 Qwen、通义万相 Wan、腾讯混元 Hunyuan、MiniMax／海螺 AI、智谱 GLM、Google Gemini／Nano Banana／Veo、OpenAI GPT Image／Whisper、Stable Diffusion、FLUX、HeyGen、ElevenLabs 等模型与工具，满足图片制作、视频创作和音频处理需求。信息检索： 按关键词开展联网搜索、新闻查询、行业调研和深度研究，获取 SEO 数据、语义搜索结果、网页内容提取与爬取代理服务。接入 Perplexity、Tavily、Exa、Firecrawl、Linkup 等；支持论文、学术文献、引用关系与专利信息检索，X（Twitter／推特）、YouTube、TikTok 社媒内容与数据查询，以及 GitHub 仓库、代码和开发文档查询。电商： 获取抖音、TikTok Shop、淘宝、天猫、1688、亚马逊、Shopee、Temu 等平台相关数据，通过蝉妈妈、Kalodata、Sorftime 等服务查询商品、店铺、达人、直播及带货表现，辅助国内与跨境选品、供应商查找、市场调研和竞品分析。其他： 提供高德地图 Amap、和风天气 QWeather 等地图与天气服务，支持地点查询、地理编码、全球及本地天气查询，辅助出行规划；支持 OCR 图片文字识别、文档解析、PDF／Word／Excel／PPT 内容提取，并提供影视、招聘等查询。",
    "url": "https://agentearth.ai/mcp-server/",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "aholo-lux3d",
    "name": "Aholo Lux3D",
    "description": "通过文字或图片创建 3D 资产，为模型重绘材质、补齐视角、转换格式，并查询任务和获取结果。",
    "url": "https://api.aholo3d.cn/lux3d-mcp/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "aidd-saas",
    "name": "AI尽调助手",
    "description": "银行对公授信尽调智能分析平台，提供进件识别、行业分析、企业画像、经营分析、财务分析和报告生成等主要环节支持。",
    "url": "https://aidd-saas.txfc.cloud/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "alphapai-lite-mcp",
    "name": "Alpha派投研助手",
    "description": "Alpha派·Lite版是讯兔科技为金融工作者、投资者量身打造的AI助理，掌握深度行业、公司研究分析与大类资产、市场策略专业解读能力，并具备专业的写报告、画PPT、做图表、写纪要等金融白领必备技能。",
    "url": "https://alphapai-idv.rabyte.cn/alpha/open-api/v1/personal/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "biobuddy",
    "name": "BioBuddy 生物医药研究助手",
    "description": "BioBuddy 生物医药智能研究平台：一次连接 Gateway，即可发现并挂载已获授权的分子设计、转化研究、靶点发现与数据智能 MCP 工具。",
    "url": "https://ai4s.tencent.com/biobuddy/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "bizmuse-ai-music-video",
    "name": "BizMuse AI 音乐视频",
    "description": "根据一首歌曲、参考图片和创作方向生成完整的 AI 音乐视频。支持叙事、演唱、舞蹈、抽象等内容风格，可选画幅比例、清晰度与口型同步，并可查询生成任务进度与获取成片。",
    "url": "https://bizmuse.ai/api/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "canva",
    "name": "Canva可画",
    "description": "无缝调用Canva可画的设计能力。一句话生成海报、演示文稿、小红书封面等设计，通过文字描述调整尺寸、填充品牌模板及检索已有内容",
    "url": "https://mcp.canva.cn/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "coros",
    "name": "COROS",
    "description": "用自然语言查询 COROS 运动与健康数据：训练记录、活动分析、睡眠、心率、HRV、压力、体能评估与训练日程。",
    "url": "https://mcpcn.coros.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "datahub",
    "name": "DataHub",
    "description": "用自然语言发现并运行 Data App，跟踪执行状态与费用，读取结构化结果并管理历史运行。",
    "url": "https://mcp-v2.bazhuayu.com/",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "medgroup-drgdip-toolkit",
    "name": "DRG/DIP 工具包（MedGroup）",
    "description": "连接 MedGroup，查询 DRG/DIP 城市与规则、检索 ICD 编码、完成分组、结算测算及 CC/MCC 查询。",
    "url": "https://medgroup.medchat.fun/mcp/oauth",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "edu-next",
    "name": "Edu Next",
    "description": "面向清华大学环境学院课程的 AI 教学平台，支持课程、学习任务、教学资料、成果草稿、评价反馈与学习进展协作。",
    "url": "https://app.edunext.world/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "emes-ai",
    "name": "eMES AI 助手",
    "description": "鼎华 eMES AI 助手，连接 eMES OPENAPI，提供生产数据查询、派工、设备报修、委外加工、报工等智能能力。",
    "url": "https://amos-dev.digihua.com:14000/mcp-platform/mcp/oauth/emes-ai",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "smartsalary",
    "name": "eRoad·市场人才薪酬数据",
    "description": "连接薪智（SmartSalary），把外部人才与薪酬市场数据带入现有工作流。随手查询竞品招聘变化、岗位人才供给、市场薪酬和人效指标，为招聘策略、岗位定薪及人才规划获得更清晰的外部参照，让招聘、定薪和人才规划不再只凭经验。",
    "url": "https://ai.smartsalary.cn/smartsalary-mcp/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "ezjoin-meeting",
    "name": "EzyJoin智慧会议",
    "description": "用自然语言管理 EzyJoin 智慧会议：预约会议室、创建/取消会议、查询会议日程与 AI 纪要。",
    "url": "https://www.ezyjoin.cn/api/mcp/message",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "fastmoss",
    "name": "FastMoss",
    "description": "FastMoss 官方出品的 TikTok Shop 数据分析工具，覆盖商品、达人、店铺、MCN、短视频、直播、广告、类目市场与榜单数据，支持爆品挖掘、选品研究、达人筛选、竞品分析、店铺诊断、内容策略和投放效果评估。",
    "url": "https://mcp.fastmoss.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "flova",
    "name": "Flova AI",
    "description": "Flova AI 视频与图片内容创作：支持剧本、短片、短剧、漫剧、电影、广告、商品 TVC 与视觉设计，覆盖文生图、文生视频、图生视频、素材生成、分镜、修改、审阅和导出。",
    "url": "https://service.flova.tv/api/mcp/",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "gangtise-mcp",
    "name": "Gangtise投研",
    "description": "Gangtise MCP汇聚机构级观点，研报，日程等另类数据，提供投研AI Agent预生成数据及全球行情/财务/估值/宏观行业等结构化数据。",
    "url": "https://openapi.gangtise.com/application/open-mcp/",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "joyread-english",
    "name": "JoyRead 双语绘本",
    "description": "浏览 JoyRead 双语英语绘本库：按级别或主题找书，逐页点读原声朗读，支持亲子陪读、词汇复习、睡前故事三种陪读模式，并可将绘本导出为带朗读和双语字幕的 MP4 视频。",
    "url": "https://joyread.smartbid.site/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "kuka-service",
    "name": "KUKA库卡专家",
    "description": "库卡官方智能客服：把用户关于库卡工业机器人、协作机器人、自动化方案、产品选型、型号参数等问题，转交库卡智能问答客服并返回解答。",
    "url": "http://47.114.32.85:9010/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "linkfox",
    "name": "LinkFox",
    "description": "跨境电商AI运营助手，涵盖竞品查询、市场调研、内容生成、营销广告、店铺运营、合规检测等多个子能力，提供多平台多数据源的跨境电商服务。",
    "url": "https://mcp-tool-gateway.linkfox.com/mcp/any-tool",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "listinggood",
    "name": "ListingGood AI 推荐引擎",
    "description": "让亚马逊的 AI 主动推荐你的商品。提供 Listing 合规预检、AI 推荐就绪度评分、一句话生成高转化文案、深度合规扫描、差评根因分析与 POA 申诉信生成。",
    "url": "https://listinggood.cn/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "mergerinfo",
    "name": "MergerInfo 海外并购情报",
    "description": "查询海外待售标的、并购事件与巨头动向，以及指定企业近一年的交易动态。",
    "url": "https://www.mergerinfo.com/api/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "moka",
    "name": "Moka HR 智能体",
    "description": "招聘和人事一体的 AI 同事，把查询与执行收进一个对话。人才推荐、招聘动态、考勤绩效、审批待办，一句话问清；候选人寻访、面试分析与面试官评估，一句话发起。",
    "url": "https://mcp.mokahr.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "neodata",
    "name": "NeoData金融数据库",
    "description": "一键安装，免费使用，面向投研分析的专业金融数据服务。由腾讯金融科技链接各大权威来源，集成100+金融数据工具，覆盖股票、指数、板块、基金、债券、期货、期权、宏观、外汇、大宗商品等资产标的，提供行情报价、财务报表、资金流向、研报评级、盈利预测、舆情与事件公告等机构级数据，支持 A股 / 港股 / 美股 / 英股 / 日股 / 韩股 多市场与实时、历史双时效，口径统一、可溯源。",
    "url": "https://neodata.tencent.com/proxy/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tct-business-expert",
    "name": "NextB2B贸易通MCP",
    "description": "NextB2B贸易通MCP。用自然语言查商机询盘、待跟进线索、客户资产家底与业务员业绩，并按老板/业务员视角解读，为商机跟进、客户经营与业绩自查提供数据；需完成 MCP 联合授权后使用。",
    "url": "https://tctmcp.zhaogang.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "notion",
    "name": "Notion",
    "description": "创建、搜索和管理 Notion 工作区。用自然语言读取页面、查询数据库、更新内容、整理知识库。",
    "url": "https://mcp.notion.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "novai-studio",
    "name": "NovAI Studio",
    "description": "通过自然语言管理 AI 画布和素材，生成图片、视频和音频，并查询任务进度。",
    "url": "https://xinxingshuke.com/api/v1/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "ofdh-doc-convert",
    "name": "OFD 文档转换",
    "description": "调用 ofdh.cn 在线转换服务，支持 OFD 与 PDF、Word、图片互转，并可提取 OFD 正文文本，适用于政务、企业等国产版式文档场景。",
    "url": "https://www.ofdh.cn/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "pandadata",
    "name": "PandaData 金融数据",
    "description": "查询、整理和分析 A 股、期货、期权、港美股、基金、宏观经济及量化因子等金融数据，支持统计比较与趋势归纳。",
    "url": "https://pandadatamcp.pandaaiquant.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "picset-commerce-images",
    "name": "Picset AI 电商设计",
    "description": "Picset AI 电商设计：面向电商卖家、设计师和美工，提供三条独立功能线——电商套图（主图/详情图/套图/Listing/A+，含一张也走套图）、单图文生图/图生图（独立创意单图与图片编辑）、Agent Canvas（画布承接与图片返回），以及连接器统一充值面板。覆盖淘宝、天猫、京东、拼多多、抖音、1688、小红书、TikTok、Amazon、Shopify、Temu、OZON、Shopee、阿里巴巴国际站等主流平台，支持方案规划、积分报价、生成跟踪和按编号局部修改。",
    "url": "https://picsetai.cn/functions/v1/agent-mcp-v1/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "picset-video-generation",
    "name": "Picset AI 视频创作",
    "description": "Picset AI 视频创作连接器支持在 WorkBuddy 中通过密钥调用电商商品视频生成、爆款视频复刻和模特图生成能力，完成素材上传登记、脚本规划、视频脚本生成、积分预估、确认提交、异步生成和任务状态查询。MVP 支持 Seedance 2.0、Seedance 2.0 Fast、Seedance 2.0 Mini 三个模型，默认使用 Seedance 2.0。",
    "url": "https://picsetai.cn/functions/v1/agent-video-mcp-v1/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "plaud",
    "name": "Plaud",
    "description": "连接 Plaud 录音与 AI：浏览查找录音、读取转写和 AI 摘要、汇总会议纪要，并生成跟进邮件与待办事项。",
    "url": "https://mcp.plaud.cn/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "qveris",
    "name": "QVeris",
    "description": "通过一个 MCP 连接，发现、检查并调用 10,000+ 个实时数据、工具与外部服务能力。",
    "url": "https://mcp.qveris.cn/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "paper-retrieval",
    "name": "Repilot科研智能体",
    "description": "课题申报书与PPT生成、快速文献检索、医学智能问答、综述报告生成，所有任务异步执行，支持状态轮询与取消。",
    "url": "https://ai-research.dazd.cn/api/paperRetrieval/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "salesnail-instructor",
    "name": "SalesNail AI 销售沙盘",
    "description": "为销售内训、销售年会和经销商大会定制 AI 大客户销售沙盘，支持分组演练、讲师带教与证据化复盘，帮助销售、售前和交付团队练习客户决策链分析与协同推进。",
    "url": "https://sn.long-arena.com/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "salestouch",
    "name": "SalesTouch 经营执行",
    "description": "通过自然语言连接 SalesTouch，完成组织资料、部门、角色权限、员工邀请、下属管理范围与销售流程配置，并处理 B2B/B2C 销售执行、非销售工作、绩效、内部调研和经营汇总。",
    "url": "https://touch.long-arena.com/mcp",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "sugon-scinsight-agent",
    "name": "scnet·科学文献洞察智能体",
    "description": "学术文献检索 Connector：用于查论文、找文献、搜索相关研究和文献调研。对于明确的学术检索请求，优先使用 searchAcademicLiterature MCP 工具，聚合运行时已配置并启用的学术数据源，并返回可追溯的结构化文献元数据。",
    "url": "https://sci.ksai.scnet.cn:58043/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "sif-mcp",
    "name": "Sif 亚马逊运营分析",
    "description": "精准洞察亚马逊市场、流量与广告：适用于市场研究、选品调研、流量分析、广告架构拆解、竞品监控、反查流量词等亚马逊运营核心场景。不只返回数据，更直接给出分析与判断。由 Sif（sif.com）官方提供。",
    "url": "https://mcp.sif.com/mcp",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tapd",
    "name": "TAPD",
    "description": "管理需求、缺陷、任务和迭代。查询项目进度、拆分需求、流转状态、填写工时，覆盖需求到发布的研发全生命周期。",
    "url": "https://websocket.tapd.cn/mcp/mcp",
    "transport": "streamable-http",
    "category": "搜索"
  },
  {
    "id": "tdengine",
    "name": "TDengine",
    "description": "连接 TDengine，管理工业数据，建立分析，监控事件，创建可视化面板，用 AI 问数与根因分析驱动工业决策。",
    "url": "${TDENGINE_API_SCHEMA}://${TDENGINE_API_HOST}:${TDENGINE_API_PORT}/api/v1/mcp/stream",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tec-do",
    "name": "Tec-Do 2.0 广告与增长情报",
    "description": "面向出海广告投放和增长团队的 AI 能力集合。",
    "url": "https://tec-chi-external-skill-mcp.tec-do.cn/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "tiktok",
    "name": "TikTok for Business",
    "description": "TikTok for Business MCP Server 是基于模型上下文协议（MCP）搭建的标准化桥梁，助力开发者与广告主将 AI 智能代理直接对接 TikTok 广告平台。它将广告核心能力⸺广告活动管理、效果报表、受众配置以及创意运营，封装为一套稳定、可投入生产环境使用的工具。AI智能代理仅通过简洁结构化指令，即可完成 TikTok 广告的管理、优化与数据依托这套工具报表查询工作。",
    "url": "https://business-api.tiktok.com/open_mcp/tt-ads-mcp-flat",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "tushare",
    "name": "Tushare",
    "description": "Tushare 金融数据服务，支持 A股、指数、ETF/基金、财务、估值、资金流、公告新闻、板块概念与宏观数据等研究工作。",
    "url": "https://api.tushare.pro/mcp/?token=${TUSHARE_TOKEN}",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "viaim",
    "name": "viaim",
    "description": "连接 viaim App，查询或按关键词搜索录音记录，读取转写内容与 AI 摘要，查看最近更新的记录，并整理会议纪要和待办事项。",
    "url": "https://yun.viaim.cn/center/mcp",
    "transport": "streamable-http",
    "category": "办公"
  },
  {
    "id": "voko-guest",
    "name": "VOKO智能体商店",
    "description": "发现或查找适合的 AI 智能体，了解其能力、发送消息并读取回复，借助外部智能体完成任务。",
    "url": "https://www.vokovoko.com/mcp",
    "transport": "streamable-http",
    "category": "AI"
  },
  {
    "id": "shangyitong",
    "name": "VZOOM商易通-企业信息查询",
    "description": "通过商易通 MCP 查询企业工商、股权与人员、上市信息、司法风险等企业数据，用自然语言做企业尽调、风险核查、客户画像。",
    "url": "https://shangyitong.vzoom.com/nsyt-server/api/mcp/data",
    "transport": "streamable-http",
    "category": "数据"
  },
  {
    "id": "wavenote-audio",
    "name": "WaveNote",
    "description": "读取 WaveNote 录音、转写及总结内容，并为指定录音发起转写和总结任务。",
    "url": "https://mcp.wavenote.cn/mcp/audio/",
    "transport": "streamable-http",
    "category": "其他"
  },
  {
    "id": "xmind",
    "name": "Xmind思维导图",
    "description": "通过 AI 对话创建、读取和编辑 Xmind 在线思维导图。",
    "url": "https://app.xmind.cn/api/mcp",
    "transport": "streamable-http",
    "category": "AI"
  }
];
