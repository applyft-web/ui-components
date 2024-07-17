import styled from 'styled-components';
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
  readonly $staticPosition?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: block;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxContentWidth}px;
  height: 56px;
  min-height: 30px;
  background-color: ${({ theme }) => theme?.colors?.primary};
  border-radius: ${({ theme }) => theme?.buttonBorderRadius};
  border: none;
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: ${({ theme }) => theme?.colors?.bodyBackground};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: fixed;
  bottom: ${({ theme }) => theme?.buttonBottomPosition};
  left: 50%;
  transform: translateX(-50%);
  transition: .3s;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  ${({ $mt }) => $mt !== undefined && `margin-top: ${getCssSize($mt)}`};
  ${({ $mb }) => $mb !== undefined && `margin-bottom: ${getCssSize($mb)}`};
  ${({ $staticPosition }) => $staticPosition && `
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
  `};

  &:disabled {
    ${({ theme }) => `
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
