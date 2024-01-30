interface ThemesObject {
  [key: string]: object;
}

const defaultTheme: {[key: string]: any} = {
  colors: {
    colorText: '#323232',
  },
  mobileWidth: '350',
  tabletMinWidth: '744',
  desktopMinWidth: '1280',
};

const mergeKeys = (k: string, obj: object): object => {
  return {
    [k]: {...defaultTheme[k], ...obj},
  }
};

export const themes: ThemesObject = {
  Geozilla: {
    ...mergeKeys('colors', {
      colorPrimary: '#00BFA5',
      colorButtonHover: '#00A08B',
      colorButtonDisabled: '#00A08B',
    }),
  },
  'Family-Locator': {
    ...mergeKeys('colors', {
      colorPrimary: '#3393EC',
      colorButtonHover: '#1F7ACE',
      colorButtonDisabled: '#3393EC',
    }),
  },
  Familo: {
    ...mergeKeys('colors', {
      colorPrimary: '#F58A3C',
      colorButtonHover: '#C56A28',
      colorButtonDisabled: '#C56A28',
    }),
  },
};

export const theme = (projectName: string = 'Geozilla'): object => {
  return { ...defaultTheme, ...themes[projectName] };
};

export const themesMapping = (): object => {
  let obj: ThemesObject = {};
  Object.keys(themes).map((k: string) => obj[k] = theme(k));
  return obj;
};
