// src/data/products/index.ts
import { LucideIcon } from 'lucide-react';
import { productText } from './textInfo/products';
import { productIcons } from './iconInfo/iconInfo';

export interface ProductParam {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const productParams: ProductParam[] = productText.map((item) => ({
  ...item,
  icon: productIcons[item.id],
}));
