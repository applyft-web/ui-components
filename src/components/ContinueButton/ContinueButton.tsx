import React from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  isDisabled: boolean,
  bgColor: string,
  customStyles?: string,
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  max-width: 327px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 12px;
  border: none;
  padding: 20px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
  position: relative;
  transition: .3s;
  ${({ isDisabled }) => isDisabled && `
    opacity: 0.5;
    pointer-events: none;        
  `};
  ${({ customStyles }) => customStyles}

  &:focus {
    outline: none;
  }
`;

interface ContinueButtonProps extends StyledButtonProps {
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
    isDisabled={isDisabled}
    id={customId}
    bgColor={bgColor}
    customStyles={customStyles}
  >
    {children}
  </StyledButton>
);
