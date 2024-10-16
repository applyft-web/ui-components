import styled, { css } from 'styled-components';
import { getCssSize } from '../../../utils';

export interface ButtonCustomStylesWithStatesProps {
  readonly default?: string;
  readonly disabled?: string;
  readonly hover?: string;
}

interface StyledButtonProps {
  readonly $customStyles?: ButtonCustomStylesWithStatesProps;
  readonly $mt?: number | string;
  readonly $mb?: number | string;
}

export const FixedButtonWrapper = styled.div<{ $customStyles?: string }>`
  width: 100%;
  position: fixed;
  bottom: ${({ theme }) => theme?.buttonBottomPosition};
  left: 50%;
  transform: translateX(-50%);
  padding: 0 ${({ theme }) => theme?.sidePadding || 16}px;

  ${({ $customStyles }) => $customStyles};
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: block;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxContentWidth}px;
  height: 56px;
  min-height: 30px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme?.colors?.primary};
  border-radius: ${({ theme }) => theme?.buttonBorderRadius};
  border: none;
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: ${({ theme }) => theme?.colors?.buttonColor || theme?.colors?.bodyBackground};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: .3s;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  ${({ $mt }) => $mt !== undefined && `margin-top: ${getCssSize($mt)}`};
  ${({ $mb }) => $mb !== undefined && `margin-bottom: ${getCssSize($mb)}`};

  &:disabled {
    ${({ theme }) => css`
      background-color: ${theme?.colors?.buttonDisabled};
      color: ${theme?.colors?.buttonDisabledTextColor};
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
