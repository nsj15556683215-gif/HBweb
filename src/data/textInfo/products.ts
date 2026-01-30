export interface ProductText {
  slug: string;
  title: string;
  description: string;
  id: string
}

export const productText: ProductText[] = [
  {
    slug: 'auto-dosing',
    title: '自动计量系统',
    description: '将生产所需各种原料进行计量并输送至高速混合机混合、冷却。',
    id: 'auto-dosing',
  },
  {
    slug: 'super-mixer',
    title: '高速混合机',
    description: '将PVC原料及配合剂先行充分分散、混合、预熟、预备胶化。',
    id: 'super-mixer',
  },
  {
    slug: 'cooling-mixer',
    title: '冷却搅拌机',
    description: '将混合料由高温以冷却水冷却，以防结块。',
    id: 'cooling-mixer',
  },
  {
    slug: 'banbury-machine',
    title: '万马力机',
    description: '在极短时间内，将PVC混合料熔融，并促进胶化。',
    id: 'banbury-machine',
  },

  { 
    slug: 'mixing-roll', 
    title: '轧轮机', 
    description: '促进混合料至胶化均匀完全及压延成型前的预热。', 
    id: 'mixing-roll', 
  }, 
  { 
    slug: 'strainer', 
    title: '过滤机', 
    description: '对塑化物料进行过滤，确保产品质量稳定。', 
    id: 'strainer',
  }, 
  { 
    slug: 'calender', 
    title: '压延主机', 
    description: '将已经塑化的PVC原料压延成高质量胶布。',  
    id: 'calender',
  },
  { 
    slug: 'post-calender', 
    title: '压延后段设备', 
    description: '由引取轮组，压纹轮组和冷却轮组组成，使产品冷却并输送至卷取机。', 
    id: 'post-calender',
  }, 
  { 
    slug: 'winder', 
    title: '卷取机', 
    description: '分中心卷取和表面卷取两种，能自动，半自动卷取PVC压延膜。', 
    id: 'winder',
  },

  {
     slug: 'laminating-machine', 
     title: '贴合机', 
     description: '将2-7层不同厚度及用途的薄膜，通过贴合机来进行贴合。', 
     id: 'laminating-machine', 
  }, 
  { 
    slug: 'planetary-extruder', 
    title: '行星挤出机', 
    description: '进口材质配合先进的加工设备，塑化效果好，助剂添加量低，关键部件使用寿命长。', 
    id: 'planetary-extruder',
  },
];
