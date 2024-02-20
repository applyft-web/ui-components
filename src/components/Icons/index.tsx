import React, { HTMLProps, FC } from 'react'
import styled, { DefaultTheme } from 'styled-components';

import { ReactComponent as GooglePlayIconComponent } from '../../core/assets/icons/GooglePlay.svg'
import { ReactComponent as AppStoreIconComponent } from '../../core/assets/icons/AppStore.svg'
import { ReactComponent as PaypalIconComponent } from '../../core/assets/icons/PapalIcon.svg'

type IconProps = Partial<HTMLProps<SVGElement>>

const createIcon = (Icon: FC<IconProps>, width?: string, height?: string): FC<IconProps> => (props: IconProps) => (
  <Icon {...props} {...{width, height}} />
);

const StyledPath = styled.path<{$isActive: boolean}>`
  fill: ${({ theme, $isActive }) => theme?.colors?.[`colorOption${$isActive ? 'Active' : 'Inactive'}`] ?? '#fff'};
`;

interface CheckIconProps {
  isActive?: boolean;
  theme?: DefaultTheme;
}

export const GooglePlayIcon = createIcon(GooglePlayIconComponent, '163px', '40px')
export const AppStoreIcon = createIcon(AppStoreIconComponent, '148px', '38px')
export const PaypalIcon = createIcon(PaypalIconComponent, '85px', '34px')
export const CheckIcon = ({ isActive, theme }: CheckIconProps) => (
  <svg width='9' height='8' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <StyledPath
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.79548 1.60543L4.22748 7.60543C4.03948 7.85243 3.74848 7.99843 3.43848 8.00043H3.43148C3.12448 8.00043 2.83448 7.85843 2.64448 7.61643L0.212477 4.50943C-0.127523 4.07543 -0.0515235 3.44643 0.383477 3.10643C0.817477 2.76543 1.44748 2.84143 1.78748 3.27743L3.42048 5.36343L7.20448 0.394429C7.53848 -0.0445709 8.16548 -0.130571 8.60648 0.204429C9.04548 0.539429 9.13048 1.16643 8.79548 1.60543Z'
      $isActive={isActive}
      theme={theme}
    />
  </svg>
)
