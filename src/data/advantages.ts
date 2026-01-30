import { advantagesText } from "./textInfo/mapInfo";
import { advantagesIcons } from "./iconInfo/iconInfo";

export const advantageStats = advantagesText.map((item) => ({
  ...item,
  icon: advantagesIcons[item.id],
}));
