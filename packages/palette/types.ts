export const HUES = [
  'blue' as 'blue',
  'green' as 'green',
  'yellow' as 'yellow',
  'red' as 'red',
  'purple' as 'purple',
  'orange' as 'orange',
  'pink' as 'pink',
  'gray' as 'gray',
];

export const HUE_VALUES = [
  50 as 50,
  100 as 100,
  200 as 200,
  300 as 300,
  400 as 400,
  500 as 500,
  600 as 600,
  700 as 700,
  800 as 800,
  900 as 900,
];

export type Hue = typeof HUES[0];
export type HueValue = typeof HUE_VALUES[0];
export type Palette = {[hue in Hue]: {[value in HueValue]?: string}};