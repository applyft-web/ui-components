import React from 'react';
import { getFormattedStyles, reactChildrenMapping } from '../../utils';
import { GradientScrollable } from '../../core';
import * as S from './styled';

interface CustomStylesProps {
  readonly wrapper?: string;
  readonly list?: string;
}

export interface OptionsListProps {
  children?: React.ReactNode | string;
  gap?: number;
  customStyles?: CustomStylesProps | string;
  theme?: object;
  scrollable?: boolean;
}

export const OptionsList = ({
  children,
  gap = 12,
  customStyles,
  scrollable = true,
  ...rest
}: OptionsListProps) => {
  const styles: CustomStylesProps = getFormattedStyles(customStyles, scrollable ? 'wrapper' : 'list');
  const content = (
    <S.StyledOptionsList
      $customStyles={styles?.list}
      {...rest}
    >
      {reactChildrenMapping(children, {
        theme: rest?.theme,
        mt: gap,
      })}
    </S.StyledOptionsList>
  );

  return scrollable ? <GradientScrollable customStyles={styles?.wrapper}>{content}</GradientScrollable> : content;
};
