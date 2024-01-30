import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../core';

interface ProviderComponentProps {
  projectName: string;
  children?: React.ReactNode | string;
}

export const GlobalThemeProvider = ({ children, projectName }: ProviderComponentProps) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme(projectName)}>
      {children}
    </ThemeProvider>
  </>
);
