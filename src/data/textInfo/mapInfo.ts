import { Target } from "lucide-react";
import { cases } from "../cases";

export const aboutStatsText = [
  {
    id: 'founded',
    value: '2023',
    label: '成立时间',
  },
  {
    id: 'machines',
    value: '30+',
    label: '设备型号',
  },
  {
    id: 'export',
    value: '10+',
    label: '出口国家',
  },
  {
    id: 'quality',
    value: '100%',
    label: '品质保障',
  },
];

export const casesText = [
  {
    id: 'mingda',
    company: '浙江明仕达新材料股份有限公司',
    location: '中国',
    project: 'PVC地板压延生产线项目',
    result: '成功安装 x 条生产线，年产能显著提升',
  },
  {
    id: 'tien-tien',
    company: '越南天进',
    location: '越南',
    project: 'PVC生产线改造项目',
    result: '设备运行稳定，产品质量获得客户高度认可',
  },
];

export const advantagesText = [
    {
      id: 'cpu',
      title: '智能化控制',
      description:
        '采用先进的PLC电气控制系统，配备触摸屏人机界面，操作简便，自动化程度高，大幅提升生产效率。',
    },
    {
      id: 'wrench',
      title: '精密制造',
      description:
        '关键部件采用进口材料，精密加工，确保设备运行稳定可靠，产品质量始终如一，使用寿命长。',
    },
    {
      id: 'heart',
      title: '节能环保',
      description:
        '采用节能设计理念，优化能源利用，降低生产成本。设备符合环保标准，助力企业绿色生产。',
    },
    {
      id: 'globe',
      title: '全球服务',
      description:
        '建立完善的售后服务体系，提供完备的技术支持，快速响应客户需求，确保设备高效运转。',
    },
];

export const fromText = {
  title: '在线咨询',
  submit: '立即提交',
  submitting: '发送中...',
  success: '提交成功，我们会尽快联系您',
  error: '发送失败，请稍后再试',
  placeholders: {
    name: '姓名',
    phone: '电话',
    email: '邮箱',
    message: '咨询内容',
  },
};

export const contactText = [
  {
    id: 'phone',
    title: '联系电话',
    content: '+86 13817239269',
  },
  {
    id: 'mail',
    title: '电子邮箱',
    content: '13817239269@163.com',
  }, 
  {
    id: 'clock',
    title: '工作时间',
    content: '周一至周五 8:00-17:00',
  },
  {
    id: 'mapPin',
    title: '公司地址',
    content: '中国浙江省海宁市仙侠路112号',
  },
];

export const footerNavText = [
  { label: '首页', target: 'home' },
  { label: '公司简介', target: 'about' },
  { label: '产品中心', target: 'products' },
  { label: '联系我们', target: 'contact' },
];

export const headerNavText = {
  logo: {
    label: "logo",
    target: "home",
  },

  header: {
    label: "首页",
    target: "home",
  },
  about: {
    label: "公司简介",
    target: "about",
  },
  advantages: {
    label: "技术优势",
    target: "advantages",
  },
  cases: {
    label: "案例展示",
    target: "cases",
  },
  products: {
    label: "产品中心",
    target: "proudcts",
  },
  contact: {
    label: "联系我们",
    target: "contact",
  },
};

type ProductCard = {
  id: string;
  title: string;
  image: string;
  desc: string;
};

export const productMap: Record<string, ProductCard[]> = {
    // 
    "auto-dosing": [
    {
      id: "ad-01",
      title: "自动计量系统 A1（AD-100）",
      image: "/images/auto-dosing-1.jpg",
      desc: "功率 5kW，计量精度 ±0.1%，适合常规自动配料产线。",
    },
    {
      id: "ad-02",
      title: "自动计量系统 A2（AD-200）",
      image: "/images/auto-dosing-2.jpg",
      desc: "功率 7.5kW，计量精度 ±0.05%，适合中高精度配料。",
    },
    {
      id: "ad-03",
      title: "自动计量系统 A3（AD-300）",
      image: "/images/auto-dosing-3.jpg",
      desc: "功率 11kW，计量精度 ±0.03%，用于高端自动化产线。",
    },
  ],

  //
  "super-mixer": [
    {
      id: "sm-01",
      title: "高速混合机 S1（SM-500）",
      image: "/images/super-mixer-1.jpg",
      desc: "功率 37kW，产能 500kg/h，适用于粉体高速混合。",
    },
    {
      id: "sm-02",
      title: "高速混合机 S2（SM-800）",
      image: "/images/super-mixer-2.jpg",
      desc: "功率 55kW，产能 800kg/h，混合效率高。",
    },
    {
      id: "sm-03",
      title: "高速混合机 S3（SM-1000）",
      image: "/images/super-mixer-3.jpg",
      desc: "功率 75kW，产能 1000kg/h，适合大型生产线。",
    },
  ],

  //
  "cooling-mixer": [
    {
      id: "cm-01",
      title: "冷却搅拌机 C1（CM-600）",
      image: "/images/cooling-mixer-1.jpg",
      desc: "功率 22kW，产能 600kg/h，快速冷却物料。",
    },
    {
      id: "cm-02",
      title: "冷却搅拌机 C2（CM-800）",
      image: "/images/cooling-mixer-2.jpg",
      desc: "功率 30kW，产能 800kg/h，适合连续生产。",
    },
  ],

  //
  "banbury-machine": [
    {
      id: "bb-01",
      title: "万马力密炼机 B1（BB-75）",
      image: "/images/banbury-1.jpg",
      desc: "功率 250kW，容积 75L，适合中型橡塑混炼。",
    },
    {
      id: "bb-02",
      title: "万马力密炼机 B2（BB-110）",
      image: "/images/banbury-2.jpg",
      desc: "功率 355kW，容积 110L，高强度混炼能力。",
    },
    {
      id: "bb-03",
      title: "万马力密炼机 B3（BB-160）",
      image: "/images/banbury-3.jpg",
      desc: "功率 500kW，容积 160L，适合重载连续生产。",
    },
  ],

  //
  "mixing-roll": [
    {
      id: "mr-01",
      title: "轧轮机 R1（MR-18）",
      image: "/images/mixing-roll-1.jpg",
      desc: "功率 45kW，辊径 18 英寸，适合精炼加工。",
    },
    {
      id: "mr-02",
      title: "轧轮机 R2（MR-22）",
      image: "/images/mixing-roll-2.jpg",
      desc: "功率 75kW，辊径 22 英寸，产能更高。",
    },
  ],

  //
  "strainer": [
    {
      id: "st-01",
      title: "过滤机 F1（ST-120）",
      image: "/images/strainer-1.jpg",
      desc: "功率 30kW，处理能力 120kg/h，过滤精度高。",
    },
    {
      id: "st-02",
      title: "过滤机 F2（ST-200）",
      image: "/images/strainer-2.jpg",
      desc: "功率 45kW，处理能力 200kg/h，适合连续过滤。",
    },
  ],

  //
  "calender": [
    {
      id: "ca-01",
      title: "四辊压延主机（CA-34）",
      image: "/images/calender-1.jpg",
      desc: "功率 160kW，工作幅宽 1400mm。",
    },
    {
      id: "ca-02",
      title: "五辊压延主机（CA-42）",
      image: "/images/calender-2.jpg",
      desc: "功率 220kW，工作幅宽 1800mm。",
    },
    {
      id: "ca-03",
      title: "六辊压延主机（CA-52）",
      image: "/images/calender-3.jpg",
      desc: "功率 315kW，工作幅宽 2200mm。",
    },
  ],

  //
  "post-calender": [
    {
      id: "pc-01",
      title: "冷却定型机（PC-01）",
      image: "/images/post-calender-1.jpg",
      desc: "功率 18kW，压延生产线后端冷却定型。",
    },
    {
      id: "pc-02",
      title: "牵引收卷装置（PC-02）",
      image: "/images/post-calender-2.jpg",
      desc: "功率 22kW，与压延主机联动运行。",
    },
  ],

  //
  "winder": [
    {
      id: "wd-01",
      title: "卷取机 W1（WD-800）",
      image: "/images/winder-1.jpg",
      desc: "功率 15kW，卷取宽度 800mm。",
    },
    {
      id: "wd-02",
      title: "卷取机 W2（WD-1200）",
      image: "/images/winder-2.jpg",
      desc: "功率 22kW，卷取宽度 1200mm。",
    },
  ],

  //
  "laminating-machine": [
    {
      id: "lm-01",
      title: "贴合机 L1（LM-1000）",
      image: "/images/laminating-1.jpg",
      desc: "功率 30kW，贴合宽度 1000mm。",
    },
    {
      id: "lm-02",
      title: "贴合机 L2（LM-1600）",
      image: "/images/laminating-2.jpg",
      desc: "功率 45kW，贴合宽度 1600mm。",
    },
  ],

  //
  "planetary-extruder": [
    {
      id: "pe-01",
      title: "行星挤出机 P1（PE-90）",
      image: "/images/planetary-1.jpg",
      desc: "功率 110kW，产能 300kg/h，适合中小产线。",
    },
    {
      id: "pe-02",
      title: "行星挤出机 P2（PE-120）",
      image: "/images/planetary-2.jpg",
      desc: "功率 160kW，产能 500kg/h，稳定高效。",
    },
    {
      id: "pe-03",
      title: "行星挤出机 P3（PE-150）",
      image: "/images/planetary-3.jpg",
      desc: "功率 220kW，产能 800kg/h，重载工业级。",
    },
  ],
};

export const heroText= {
    title: '专业 PVC 压延设备制造商',
    subtitle: '提供高效、稳定、智能的压延生产线解决方案',
    button: '立即咨询',
  };



