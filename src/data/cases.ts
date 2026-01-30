import { casesText } from './textInfo/mapInfo';
import { casesMedia } from './imgInfo/imgInfo';

export const cases = casesText.map((item) => ({
  ...item,
  ...casesMedia[item.id],
}));
