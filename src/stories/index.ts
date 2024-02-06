import { getTheme, themes, type ThemesObject } from '../core/theme';

const themesMapping = (): object => {
  let obj: ThemesObject = {};
  Object.keys(themes).map((k: string) => obj[k] = getTheme(k));
  return obj;
};

// spread to "argTypes"
export const themesToControls = {
  theme: {
    options: Object.keys(themes),
    mapping: themesMapping(),
    control: 'inline-radio',
  },
};
