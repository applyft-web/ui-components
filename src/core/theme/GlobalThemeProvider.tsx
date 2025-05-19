import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme, type Theme, type ProjectName } from './theme';
import { GlobalStyles, useDynamicHeight } from './globalStyles';

const GZ = 'geozilla';
const FL = 'family-locator';
const FO = 'familo';
const BB = 'brainbloom';

const namesList: {[key: string]: ProjectName} = {
  geozilla: GZ,
  gz: GZ,
  'family-locator': FL,
  fl: FL,
  familo: FO,
  fo: FO,
  brainbloom: BB,
  bb: BB,
};

const fallback = namesList['gz'];

interface ProviderComponentProps {
  children?: React.ReactNode | string;
  projectTheme: string | Theme;
  customGlobalStyles?: string;
  customTheme?: {[propName: string]: string};
  isArabic?: boolean;
}

export const GlobalThemeProvider = ({
  children,
  projectTheme = fallback,
  customTheme = {},
  customGlobalStyles,
  isArabic = false,
}: ProviderComponentProps) => {
  const currentTheme = typeof projectTheme === 'string'
    ? getTheme(namesList[projectTheme.toLowerCase()] ?? fallback)
    : projectTheme;

  useDynamicHeight();

  return (
    <>
      <ThemeProvider theme={{ ...currentTheme, isArabic, ...{ custom: customTheme } }}>
        <GlobalStyles $customStyles={customGlobalStyles} />
        {children}
      </ThemeProvider>
    </>
  );
};
