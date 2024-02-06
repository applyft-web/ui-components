interface Colors {
  colorPrimary?: string;
  colorButtonHover?: string;
  colorButtonDisabled?: string;
  colorOptionInactive?: string;
  colorOptionActive?: string;
  colorOptionBorderActive?: string;
}

export interface Theme {
  colors?: Colors;
  [propName: string]: any;
}

export interface ThemesObject {
  [key: string]: Theme;
}

const defaultTheme: {[key: string]: any} = {
  colors: {
    colorText: '#323232',
    colorBodyBackground: '#fff',
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
      colorOptionImgActive: '#94E3D9',
      colorOptionImgInactive: '#C2F0EA',
      colorOptionCheckInactive: '#BBE1DC',
      colorThreeDots: '#00BFA5',
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
      colorOptionImgActive: '#8BB6DE',
      colorOptionImgInactive: '#C3E1FF',
      colorOptionCheckInactive: '#CCDDF0',
      colorThreeDots: '#5281BD',
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
      colorOptionImgActive: '#ECC6AA',
      colorOptionImgInactive: '#FFE4D0',
      colorOptionCheckInactive: '#EED6C5',
      colorThreeDots: '#F58A3C',
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
      colorOptionImgActive: '#94E3D9',
      colorOptionImgInactive: '#C2F0EA',
      colorOptionCheckInactive: '#BBE1DC',
      colorThreeDots: '#00BFA5',
    }),
  },
};

export const getTheme = (projectName: string = 'Geozilla'): object => {
  return { ...defaultTheme, ...themes[projectName] };
};
