// src/data/contact.ts
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

/* 联系方式卡片 */
export const contactInfo = [
  {
    icon: Phone,
    title: '联系电话',
    content: '+86 13817239269',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    content: '13817239269@163.com',
  },
  {
    icon: MapPin,
    title: '公司地址',
    content: '中国浙江省海宁市仙侠路112号',
  },
  {
    icon: Clock,
    title: '工作时间',
    content: '周一至周五 8:00-17:00',
  },
];

/* EmailJS 配置 */
export const emailConfig = {
  serviceId: 'service_y7jul6e',
  templateId: 'template_mph5q0k',
  publicKey: 'iCBDP5ccw6fJHZQAV',
};

/* 文案 */
export const contactText = {
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
