import React from 'react';
import styled from 'styled-components';
import { getCssSize } from '../../../utils';

export interface CustomStylesWithStatesProps {
  readonly default?: string;
  readonly disabled?: string;
  readonly hover?: string;
}

interface StyledButtonProps {
  readonly $customStyles?: CustomStylesWithStatesProps;
  readonly $mt?: number | string;
  readonly $mb?: number | string;
  readonly $staticPosition?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: block;
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
  color: ${({ theme }) => theme?.colors?.bodyBackground};
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
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
  `};

  &:disabled {
    ${({ theme }) => `
      background-color: ${theme?.colors?.buttonDisabled};
      pointer-events: none;
    `};

    ${({ $customStyles }) => $customStyles?.disabled};
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme?.desktopMinWidth}px) and (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme?.colors?.buttonHover};

      ${({ $customStyles }) => $customStyles?.hover};
    }
  }

  ${({ $customStyles }) => $customStyles?.default};
`;

export interface ContinueButtonProps {
  children?: React.ReactNode | string;
  onClick: () => void;
  customId?: string;
  mt?: string | number;
  mb?: string | number;
  staticPosition?: boolean;
  customStyles?: CustomStylesWithStatesProps | string;
  theme?: object;
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
}: ContinueButtonProps) => {
  let styles: CustomStylesWithStatesProps;
  if (typeof(customStyles) === 'string') {
    styles = {
      default: customStyles,
      hover: '',
      disabled: '',
    };
  } else {
    styles = customStyles;
  }

  return (
    <StyledButton
      onClick={onClick}
      id={customId}
      $mt={mt}
      $mb={mb}
      $staticPosition={staticPosition}
      $customStyles={styles}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
