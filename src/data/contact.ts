import { contactIcons } from "./iconInfo/iconInfo";
import { contactText } from "./textInfo/mapInfo";

export const contactStats = contactText.map((item) => ({
  ...item,
  icon: contactIcons[item.id],
}));
