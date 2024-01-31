export interface ThemesObject {
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
      colorButtonDisabled: '#9bdfd2',
      colorOptionInactive: '#EBFAF8',
      colorOptionActive: '#C2F0EA',
      colorOptionBorderActive: '#00BFA5',
    }),
  },
  'Family-Locator': {
    ...mergeKeys('colors', {
      colorPrimary: '#3393EC',
      colorButtonHover: '#1F7ACE',
      colorButtonDisabled: '#9ec9f6',
      colorOptionInactive: '#F0F8FF',
      colorOptionActive: '#C5E3FF',
      colorOptionBorderActive: '#007AFF',
    }),
  },
  Familo: {
    ...mergeKeys('colors', {
      colorPrimary: '#F58A3C',
      colorButtonHover: '#C56A28',
      colorButtonDisabled: '#fcc5a1',
      colorOptionInactive: '#FEF7F1',
      colorOptionActive: '#FFE5D2',
      colorOptionBorderActive: '#F58A3C',
    }),
  },
  Closer: {
    ...mergeKeys('colors', {
      colorPrimary: '#00BFA5',
      colorButtonHover: '#00A08B',
      colorButtonDisabled: '#9bdfd2',
      colorOptionInactive: '#EBFAF8',
      colorOptionActive: '#C2F0EA',
      colorOptionBorderActive: '#00BFA5',
    }),
  },
};

export const theme = (projectName: string = 'Geozilla'): object => {
  return { ...defaultTheme, ...themes[projectName] };
};
