/** WorkBuddy featured scenes, restricted to experts that exist in this catalog. */
export const SCENE_IMAGE_BASE = 'https://acc-1258344699.cos.accelerate.myqcloud.com/workbuddy/expert-marketplace';

export const FEATURED_SCENES: readonly {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly names: readonly string[];
}[] = [
  { id: 'content-creation', title: '内容创作', image: '/scene-images/scene-content-creation.png', names: ['内容创作专家', '小红书运营专家'] },
  { id: 'investment-analysis', title: '投资分析', image: '/scene-images/scene-investment.png', names: ['交易分析团队', '股票研究专家'] },
  { id: 'legal-consulting', title: '法律咨询', image: '/scene-images/scene-legal.png', names: ['财税合规专家团'] },
  { id: 'small-business', title: '小微企业', image: '/scene-images/scene-small-business.png', names: ['销售教练', '创业伙伴'] },
  { id: 'ecommerce-operations', title: '电商运营', image: '/scene-images/scene-ecommerce.png', names: ['中国电商运营专家', '跨境电商专家', '内容变现商业化专家团'] },
  { id: 'data-analysis', title: '数据分析', image: '/scene-images/scene-data-analysis.png', names: ['数据分析报告师', '深度研究团队', '花叔数据分析专家团'] },
  { id: 'professional-docs', title: '专业文档', image: '/scene-images/scene-professional-docs.png', names: ['文档生成专家', '文档处理专家', '专业文档生成团队'] },
  { id: 'product-design', title: '产品设计', image: '/scene-images/scene-product-design.png', names: ['UI设计师', '产品管理专家', '产品战略团队'] },
  { id: 'engineering', title: '工程开发', image: '/scene-images/scene-engineering.png', names: ['高级开发工程师', '软件开发团队'] },
];
