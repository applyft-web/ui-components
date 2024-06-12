import React from 'react';
import * as S from './styled';

export interface MainLayoutProps {
  children?: any;
  pt?: string | number;
  pb?: string | number;
  customStyles?: string;
  [propName: string]: any;
}

export const MainLayout = ({
  children,
  pt = 16,
  pb = 16,
  customStyles,
  ...rest
}: MainLayoutProps) => {
  const theme = rest?.theme;

  return (
    <S.StyledLayout
      $pt={pt}
      $pb={pb}
      $customStyles={customStyles}
      theme={theme}
    >
      {children}
    </S.StyledLayout>
);
};
