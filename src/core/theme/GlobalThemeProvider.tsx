import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../core/theme';

const GZ: string = 'Geozilla';
const FL: string = 'Family-Locator';
const FO: string = 'Familo';
const CL: string = 'Closer';
const namesList: {[key: string]: string} = {
  geozilla: GZ,
  gz: GZ,
  'family-locator': FL,
  fl: FL,
  familo: FO,
  fo: FO,
  closer: CL,
  cl: CL,
};

const fallback = namesList['gz'];

interface ProviderComponentProps {
  projectName: string;
  children?: React.ReactNode | string;
}

export const GlobalThemeProvider = ({ children, projectName = fallback }: ProviderComponentProps) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme(namesList[projectName.toLowerCase()] || fallback)}>
      {children}
    </ThemeProvider>
  </>
);
