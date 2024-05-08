import React from 'react';
import styled from 'styled-components';
import { getCssSize } from '../../../utils';

interface StyledButtonProps {
  readonly $customStyles?: string;
  readonly $mt?: string | number;
  readonly $mb?: string | number;
  readonly $staticPosition?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  max-width: ${({ theme }) => theme?.maxContentWidth}px;
  height: 56px;
  background-color: ${({ theme }) => theme?.colors?.primary};
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
  left: 50%;
  transform: translateX(-50%);
  transition: .3s;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  ${({ $mt }) => $mt && `margin-top: ${getCssSize($mt)}`};
  ${({ $mb }) => $mb && `margin-bottom: ${getCssSize($mb)}`};
  ${({ $staticPosition }) => $staticPosition && `
    position: static;
    bottom: auto;
    left: auto;
    transform: none;
  `};

  &:disabled {
    ${({ theme }) => `
      background-color: ${theme?.colors?.buttonDisabled};
      pointer-events: none;
    `};
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme?.desktopMinWidth}px) and (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme?.colors?.buttonHover};
    }
  }

  ${({ $customStyles }) => $customStyles};
`;

export interface ContinueButtonProps {
  onClick: () => void;
  customStyles?: string;
  children?: React.ReactNode | string;
  customId?: string;
  theme?: object;
  mt?: string | number;
  mb?: string | number;
  staticPosition?: boolean;
  [propName: string]: any;
}

export const ContinueButton = ({
  children = 'Continue',
  onClick,
  customId = 'continue-button',
  mt,
  mb,
  staticPosition,
  customStyles,
  ...rest
}: ContinueButtonProps) => (
  <StyledButton
    onClick={onClick}
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
