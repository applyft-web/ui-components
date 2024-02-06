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
  padding: 16px;
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

interface PlansItemProps {
  onClick: () => void;
  isArabic?: boolean,
  isActive?: boolean,
  img?: boolean,
  customStyles?: string,
  children?: React.ReactNode | string;
  customId?: string,
  theme?: object,
}

export const PlansItem = ({
  children = 'Other',
  onClick,
  isArabic = false,
  isActive = false,
  img = false,
  customId = 'option-1',
  customStyles,
  ...rest
}: PlansItemProps) => (
  <StyledOption
    onClick={onClick}
    $isArabic={isArabic}
    $isActive={isActive}
    $isLarge={img}
    id={customId}
    $customStyles={customStyles}
    {...rest}
  >
    {children}
  </StyledOption>
);
