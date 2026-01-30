import { aboutIcons } from './iconInfo/iconInfo';
import { aboutStatsText } from './textInfo/mapInfo';

export const aboutStats = aboutStatsText.map((item) => ({
  ...item,
   icon: aboutIcons[item.id],
}));
