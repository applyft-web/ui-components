import React from 'react';
import { default as styled } from 'styled-components';

const desktopMinWidth: string = '1280';

interface StyledButtonProps {
  readonly $isDisabled: boolean,
  readonly $bgColor: string,
  readonly $customStyles?: string,
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  max-width: 327px;
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 12px;
  border: none;
  padding: 20px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
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

  @media screen and (min-width: ${desktopMinWidth}px) {
    ${({ $isDisabled }) => !$isDisabled && 'cursor: pointer;'}
    
    &:hover {
      background-color: #F99B57;
    }
  }
`;

interface ContinueButtonProps {
  bgColor: string,
  isDisabled?: boolean,
  customStyles?: string,
  onClick: () => void;
  children?: React.ReactNode | string;
  customId?: string,
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({
  children = 'Continue',
  onClick,
  bgColor = '#000',
  isDisabled = false,
  customId = 'continue-button',
  customStyles,
}) => (
  <StyledButton
    onClick={onClick}
    $isDisabled={isDisabled}
    id={customId}
    $bgColor={bgColor}
    $customStyles={customStyles}
  >
    {children}
  </StyledButton>
);
