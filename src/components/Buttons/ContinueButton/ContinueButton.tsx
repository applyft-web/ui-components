import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  readonly $isDisabled: boolean;
  readonly $customStyles?: string;
  readonly $mt?: string | number;
  readonly $mb?: string | number;
  readonly $staticPosition?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  max-width: 327px;
  height: 56px;
  background-color: ${({ theme }) => theme?.colors?.colorPrimary};
  border-radius: 12px;
  border: none;
  padding: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: fixed;
  bottom: 24px;
  transition: .3s;
  ${({ $isDisabled, theme }) => $isDisabled && `
    background-color: ${theme?.colors?.colorButtonDisabled};
    pointer-events: none;
  `};
  ${({ $mt }) => $mt && `margin-top: ${+$mt}${typeof $mt === 'number' || !isNaN(+$mt) ? 'px' : ''}`};
  ${({ $mb }) => $mb && `margin-bottom: ${+$mb}${typeof $mb === 'number' || !isNaN(+$mb) ? 'px' : ''}`};
  ${({ $staticPosition }) => $staticPosition && `
    position: static;
    bottom: 0;
  `};

  ${({ $customStyles }) => $customStyles};

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme?.desktopMinWidth}px) {
    ${({ $isDisabled }) => !$isDisabled && 'cursor: pointer;'};
    
    &:hover {
      background-color: ${({ theme }) => theme?.colors?.colorButtonHover};
    }
  }
`;

export interface ContinueButtonProps {
  onClick: () => void;
  isDisabled?: boolean;
  customStyles?: string;
  children?: React.ReactNode | string;
  customId?: string;
  theme?: object;
  mt?: string | number;
  mb?: string | number;
  staticPosition?: boolean;
}

export const ContinueButton = ({
  children = 'Continue',
  onClick,
  isDisabled = false,
  customId = 'continue-button',
  mt,
  mb,
  staticPosition,
  customStyles,
  ...rest
}: ContinueButtonProps) => (
  <StyledButton
    onClick={onClick}
    $isDisabled={isDisabled}
    id={customId}
    $mt={mt}
    $mb={mb}
    $staticPosition={staticPosition}
    $customStyles={customStyles}
    {...rest}
  >
    {children}
  </StyledButton>
);
