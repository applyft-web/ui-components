import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  readonly $isDisabled: boolean,
  readonly $customStyles?: string,
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  max-width: 327px;
  background-color: ${({ theme }) => theme?.colors?.colorPrimary};
  border-radius: 12px;
  border: none;
  padding: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  transition: .3s;
  ${({ $isDisabled }) => $isDisabled && `
    opacity: 0.5;
    pointer-events: none;        
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

interface ContinueButtonProps {
  onClick: () => void;
  isDisabled?: boolean,
  customStyles?: string,
  children?: React.ReactNode | string;
  customId?: string,
  theme?: object | string,
}

export const ContinueButton = ({
  children = 'Continue',
  onClick,
  isDisabled = false,
  customId = 'continue-button',
  customStyles,
  ...rest
}: ContinueButtonProps) => (
  <StyledButton
    onClick={onClick}
    $isDisabled={isDisabled}
    id={customId}
    $customStyles={customStyles}
    {...rest}
  >
    {children}
  </StyledButton>
);
