import {BLACK, WHITE, PALETTE} from './palette';
import {Hue, HueValue} from './types';

export const getColor = (hue: Hue, hueValue: HueValue) => {
  return PALETTE[hue][hueValue];
};

export const getBlack = () => {
  return BLACK;
};

export const getWhite = () => {
  return WHITE;
};

export const getReadableColor = (backgroundValue: HueValue) => {
  return backgroundValue > 500 ? getWhite() : getBlack();
};

export const getHoverHueValue = (hueValue: HueValue): HueValue => {
  if (hueValue === 700) return hueValue;
  if (hueValue === 50) return 100;
  
  return hueValue + 100 as HueValue;
};
