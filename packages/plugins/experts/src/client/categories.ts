/** WorkBuddy expert catalog categories, in the order its category bar shows them. */
export const CATEGORY_ORDER: readonly (readonly [string, string])[] = [
  ['13-TencentZone', '腾讯专区'],
  ['01-ProductDesign', '产品设计'],
  ['15-BackToSchool', '开学季'],
  ['02-Engineering', '技术工程'],
  ['08-FinanceInvestment', '金融投资'],
  ['03-GameSpatial', '游戏空间'],
  ['04-DataAI', '数据智能'],
  ['05-MarketingGrowth', '营销增长'],
  ['06-ContentCreative', '内容创作'],
  ['07-SalesCommerce', '销售商务'],
  ['09-OperationsHR', '运营人力'],
  ['10-ProjectQuality', '项目质量'],
  ['11-SecurityCompliance', '法务安全'],
  ['12-IndustryConsultant', '行业顾问'],
  ['14-GlobalDevelopment', '全球发展'],
];

export const CATEGORY_LABEL = new Map(CATEGORY_ORDER);
