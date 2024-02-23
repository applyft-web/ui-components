import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme, GlobalStyles } from '../../core/theme';
import {reactChildrenMapping} from "../../utils";

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

export const GlobalThemeProvider = ({ children, projectName = fallback }: ProviderComponentProps) => {
  const currentTheme = getTheme(namesList[projectName.toLowerCase()] ?? fallback);

  useEffect(() => {
    const setDynamicVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setTimeout(() => {
      setDynamicVH();
      window.addEventListener('resize', setDynamicVH, false);
    },100);

    return () => window.removeEventListener('resize', setDynamicVH, false);
  }, []);

  return <>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {reactChildrenMapping(children, { theme: currentTheme })}
    </ThemeProvider>
  </>
};
