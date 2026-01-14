import styled, { css } from 'styled-components'
import { getCssSize, getTextAlign } from '../../../utils'

export interface ButtonCustomStylesWithStatesProps {
  readonly default?: string
  readonly disabled?: string
  readonly hover?: string
}

interface StyledButtonProps {
  readonly $customStyles?: ButtonCustomStylesWithStatesProps
  readonly $mt?: number | string
  readonly $mb?: number | string
  readonly $centered: boolean
}

export const FixedButtonWrapper = styled('div')<{ $customStyles?: string }>(
  ({ theme, $customStyles }) => css`
    width: 100%;
    position: fixed;
    bottom: ${theme.buttonBottomPosition};
    left: 50%;
    transform: translateX(-50%);
    padding: 0 ${theme.sidePadding || 16}px;
  
    ${$customStyles};
  `
)

export const StyledButton = styled('button')<StyledButtonProps>(
  ({ theme, $customStyles, $mt, $mb, $centered }) => css`
    display: block;
    width: 100%;
    max-width: ${theme.maxContentWidth}px;
    height: 56px;
    min-height: 30px;
    flex-shrink: 0;
    background-color: ${theme.colors?.primary};
    border-radius: ${theme.buttonBorderRadius};
    border: none;
    padding: 0 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: ${theme.colors?.buttonColor || theme.colors?.bodyBackground};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: ${$centered ? 'center' : getTextAlign(Boolean(theme.isRtl))};
    transition: .3s;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    ${$mt !== undefined && `margin-top: ${getCssSize($mt)}`};
    ${$mb !== undefined && `margin-bottom: ${getCssSize($mb)}`};
  
    &:disabled {
      background-color: ${theme.colors?.buttonDisabled};
      color: ${theme.colors?.buttonDisabledTextColor};
      pointer-events: none;

      ${$customStyles?.disabled};
    }

    &:focus {
      outline: none;
    }

    @media screen and (min-width: ${theme.desktopMinWidth}px) and (hover: hover) {
      &:hover {
        background-color: ${theme.colors?.buttonHover};

        ${$customStyles?.hover};
      }
    }

    ${$customStyles?.default};
  `
)
