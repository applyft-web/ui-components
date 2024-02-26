interface Colors {
  [propName: string]: string;
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
    text: '#323232',
    bodyBackground: '#fff',
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
      primary: '#00BFA5',
      buttonHover: '#00A08B',
      buttonDisabled: '#9bdfd2',
      optionInactive: '#EBFAF8',
      optionActive: '#C2F0EA',
      optionBorderActive: '#00BFA5',
      optionImgActive: '#94E3D9',
      optionImgInactive: '#C2F0EA',
      optionCheckActive: '#00BFA5',
      optionCheckInactive: '#BBE1DC',
      threeDots: '#00BFA5',
    }),
  },
  'Family-Locator': {
    ...mergeKeys('colors', {
      primary: '#3393EC',
      buttonHover: '#1F7ACE',
      buttonDisabled: '#9ec9f6',
      optionInactive: '#F0F8FF',
      optionActive: '#C5E3FF',
      optionBorderActive: '#007AFF',
      optionImgActive: '#8BB6DE',
      optionImgInactive: '#C3E1FF',
      optionCheckActive: '#007AFF',
      optionCheckInactive: '#CCDDF0',
      threeDots: '#5281BD',
    }),
  },
  Familo: {
    ...mergeKeys('colors', {
      primary: '#F58A3C',
      buttonHover: '#C56A28',
      buttonDisabled: '#fcc5a1',
      optionInactive: '#FEF7F1',
      optionActive: '#FFE5D2',
      optionBorderActive: '#F58A3C',
      optionImgActive: '#ECC6AA',
      optionImgInactive: '#FFE4D0',
      optionCheckActive: '#F58A3C',
      optionCheckInactive: '#EED6C5',
      threeDots: '#F58A3C',
    }),
  },
  Closer: {
    ...mergeKeys('colors', {
      primary: '#00BFA5',
      buttonHover: '#00A08B',
      buttonDisabled: '#9bdfd2',
      optionInactive: '#EBFAF8',
      optionActive: '#C2F0EA',
      optionBorderActive: '#00BFA5',
      optionImgActive: '#94E3D9',
      optionImgInactive: '#C2F0EA',
      optionCheckActive: '#00BFA5',
      optionCheckInactive: '#BBE1DC',
      threeDots: '#00BFA5',
    }),
  },
};

export const getTheme = (projectName: string = 'Geozilla'): object => {
  return { ...defaultTheme, ...themes[projectName] };
};
