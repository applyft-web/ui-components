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

export type ProjectName = 'geozilla' | 'family-locator' | 'familo' | 'brainbloom';

const defaultTheme: {[key: string]: any} = {
  colors: {
    text: '#323232',
    bodyBackground: '#fff',
  },
  mobileWidth: '350',
  tabletMinWidth: '744',
  desktopMinWidth: '1280',
  maxContentWidth: '327',
  sidePadding: '24',
};

export const themes: ThemesObject = {
  geozilla: {
    colors: {
      primary: '#00BFA5',
      buttonHover: '#00A08B',
      buttonDisabled: '#9bdfd2',
      optionInactive: '#EBFAF8',
      optionActive: '#C2F0EA',
      optionBorderActive: '#00BFA5',
      optionBorderActiveText: '#323232',
      optionImgActive: '#94E3D9',
      optionImgInactive: '#C2F0EA',
      optionCheckActive: '#00BFA5',
      optionCheckInactive: '#BBE1DC',
      threeDots: '#00BFA5',
      progressBarActive: '#00bfa5',
      progressBarBg: '#f0efef',
      circularProgressBg: '#F2F2F2',
      inputBg: '#fff',
      reviewItemBg: '#f4f4f4',
      planItemBg: '#fff',
      planItemBorder: '#c3c3c3',
      planItemLabelBg: '#fff',
    },
  },
  'family-locator': {
    colors: {
      primary: '#3393EC',
      buttonHover: '#1F7ACE',
      buttonDisabled: '#9ec9f6',
      optionInactive: '#F0F8FF',
      optionActive: '#C5E3FF',
      optionBorderActive: '#007AFF',
      optionBorderActiveText: '#323232',
      optionImgActive: '#8BB6DE',
      optionImgInactive: '#C3E1FF',
      optionCheckActive: '#007AFF',
      optionCheckInactive: '#CCDDF0',
      threeDots: '#5281BD',
      progressBarActive: '#3393ec',
      progressBarBg: '#f3f3f3',
      circularProgressBg: '#F2F2F2',
      inputBg: '#fff',
      reviewItemBg: '#f4f4f4',
      planItemBg: '#fff',
      planItemBorder: '#c3c3c3',
      planItemLabelBg: '#fff',
    },
  },
  familo: {
    colors: {
      primary: '#F58A3C',
      buttonHover: '#C56A28',
      buttonDisabled: '#fcc5a1',
      optionInactive: '#FEF7F1',
      optionActive: '#FFE5D2',
      optionBorderActive: '#F58A3C',
      optionBorderActiveText: '#323232',
      optionImgActive: '#ECC6AA',
      optionImgInactive: '#FFE4D0',
      optionCheckActive: '#F58A3C',
      optionCheckInactive: '#EED6C5',
      threeDots: '#F58A3C',
      progressBarActive: '#f58a3c',
      progressBarBg: '#f3f3f3',
      circularProgressBg: '#F2F2F2',
      inputBg: '#fff',
      reviewItemBg: '#f4f4f4',
      planItemBg: '#fff',
      planItemBorder: '#c4c4c4',
      planItemLabelBg: '#fff',
    },
  },
  brainbloom: {
    colors: {
      text: '#fff',
      bodyBackground: '#292C44',

      primary: '#FDC21C',
      buttonHover: '#FDC21C',
      buttonDisabled: '#ffe29f',
      optionInactive: '#404464',
      optionActive: '#FDC21C',
      optionBorderActive: '#fdc21c',
      optionBorderActiveText: '#292C44',
      optionImgActive: '#292C44',
      optionImgInactive: '#898FBD',
      optionCheckActive: '#292C44',
      optionCheckInactive: '#898FBD',
      threeDots: '#fff',
      progressBarActive: '#FDC21C',
      progressBarBg: '#F0EFEF',
      circularProgressBg: '#404464',
      inputBg: '#404464',
      reviewItemBg: '#404464',
      planItemBg: '#404464',
      planItemBorder: '#5D638F',
      planItemLabelBg: '#515684',
    },
    maxContentWidth: '343',
    sidePadding: '16',
  },
};

const mergeKeys = (k: string, obj: ThemesObject): object => {
  const currentValue = obj[k];
  return typeof(currentValue) === 'object' ? {
    [k]: {...defaultTheme[k], ...obj[k]},
  } : {};
};

export const getTheme = (projectName: ProjectName = 'geozilla'): object => {
  const currentTheme = themes[projectName.toLowerCase()];
  const mergedTheme = Object.keys(currentTheme).reduce((acc, key) => {
    return { ...acc, ...mergeKeys(key, currentTheme) };
  }, {});
  return { ...defaultTheme, ...currentTheme, ...mergedTheme };
};
