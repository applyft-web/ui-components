import React from 'react';
import * as S from './styled';
import { getFormattedStyles } from '../../../utils';

export interface MainLayoutProps {
  children?: any;
  pt?: string | number;
  pb?: string | number;
  customStyles?: S.MainLayoutCustomStylesWithStatesProps | string;
  [propName: string]: any;
}

export const MainLayout = ({
  children,
  pt = 16,
  pb = 16,
  customStyles,
  ...rest
}: MainLayoutProps) => {
  const styles: S.MainLayoutCustomStylesWithStatesProps = getFormattedStyles(customStyles, 'default');

  return (
    <S.StyledLayout
      $pt={pt}
      $pb={pb}
      $customStyles={styles}
      {...rest}
    >
      {children}
    </S.StyledLayout>
);
};
