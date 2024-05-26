import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface CommonProps {
  readonly $isActive: boolean;
  readonly $customStyles?: string;
}

const StyledSVG = styled.svg<CommonProps>`
  ${({ $customStyles }) => $customStyles};
`;

const StyledPath = styled.path<CommonProps>`
  fill: ${({ theme, $isActive }) => theme?.colors?.[`option${$isActive ? 'Active' : 'Inactive'}`] ?? '#fff'};

  ${({ $customStyles }) => $customStyles};
`;

export interface CheckIconStyledProps {
  svg?: string;
  path?: string;
}

interface CheckIconProps {
  isActive?: boolean;
  theme?: DefaultTheme;
  customStyles?: CheckIconStyledProps | string;
}

export const CheckIcon = ({
  isActive,
  theme,
  customStyles,
}: CheckIconProps) => {
  let styles: CheckIconStyledProps;

  if (typeof(customStyles) === 'string') {
    styles = {
      svg: customStyles,
      path: '',
    };
  } else {
    styles = customStyles;
  }

  return (
    <StyledSVG
      width={'9'}
      height={'8'}
      viewBox={'0 0 9 8'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      className={'check-icon'}
      $isActive={isActive}
      $customStyles={styles?.svg}
      theme={theme}
    >
      <StyledPath
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.79548 1.60543L4.22748 7.60543C4.03948 7.85243 3.74848 7.99843 3.43848 8.00043H3.43148C3.12448 8.00043 2.83448 7.85843 2.64448 7.61643L0.212477 4.50943C-0.127523 4.07543 -0.0515235 3.44643 0.383477 3.10643C0.817477 2.76543 1.44748 2.84143 1.78748 3.27743L3.42048 5.36343L7.20448 0.394429C7.53848 -0.0445709 8.16548 -0.130571 8.60648 0.204429C9.04548 0.539429 9.13048 1.16643 8.79548 1.60543Z'
        $isActive={isActive}
        $customStyles={styles?.path}
        theme={theme}
      />
    </StyledSVG>
  );
};
