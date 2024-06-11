import { getTheme, themes, type ThemesObject, type ProjectName } from '../core/theme';

const themesMapping = (): object => {
  let obj: ThemesObject = {};
  Object.keys(themes).map((k: string) => obj[k] = getTheme(k as ProjectName));
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
