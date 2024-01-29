import React from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  isDisabled: boolean,
  customStyles?: string,
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  max-width: 327px;
  background-color: ${(props) => props.theme.colorPrimary};
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

  &:focus {
    outline: none;
  }
`;

type ContinueButtonProps = {
  onClick: () => void;
  children?: any;
  isDisabled?: boolean,
  customId?: string,
  customStyles?: string,
}

export const ContinueButton = ({
  children = 'Continue',
  onClick,
  isDisabled = false,
  customId = 'continue-button',
  customStyles,
}: ContinueButtonProps) => (
  <StyledButton
    onClick={onClick}
    isDisabled={isDisabled}
    id={customId}
    customStyles={customStyles}
  >
    {children}
  </StyledButton>
)
