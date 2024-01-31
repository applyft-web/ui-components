import React from 'react';
import styled from 'styled-components';

interface StyledOptionProps {
  readonly $isArabic?: boolean,
  readonly $isActive?: boolean,
  readonly $isLarge?: boolean,
  readonly $customStyles?: string,
}

const StyledOption = styled.button<StyledOptionProps>`
  display: flex;
  flex-direction: ${({ $isArabic }) => `row${$isArabic ? '-reverse' : ''}`};
  width: 100%;
  max-width: 327px;
  background-color: ${({ theme, $isActive }) => theme?.colors?.[`colorOption${$isActive ? 'Active' : 'Inactive'}`]};
  border-radius: 12px;
  border: ${({ theme, $isActive, $isLarge }) =>
    $isLarge
      ? `1px solid ${theme?.colors?.[`colorOption${$isActive ? 'BorderActive' : 'Inactive'}`]}`
      : 'none'
  };
  padding: ${({ $isLarge }) => $isLarge ? 15 : 16}px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme?.colors?.colorText};
  position: relative;
  transition: .3s;
  ${({ $customStyles }) => $customStyles};

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme?.desktopMinWidth}px) {
    cursor: pointer;
  }
`;

interface OptionsItemProps {
  onClick: () => void;
  isArabic?: boolean,
  isActive?: boolean,
  img?: string | React.ReactNode,
  customStyles?: string,
  children?: React.ReactNode | string;
  customId?: string,
  theme?: object | string,
}

export const OptionsItem = ({
  children = 'Other',
  onClick,
  isArabic = false,
  isActive = false,
  img = null,
  customId = 'option-1',
  customStyles,
  ...rest
}: OptionsItemProps) => (
  <StyledOption
    onClick={onClick}
    $isArabic={isArabic}
    $isActive={isActive}
    $isLarge={!!img}
    id={customId}
    $customStyles={customStyles}
    {...rest}
  >
    {children}
  </StyledOption>
);
