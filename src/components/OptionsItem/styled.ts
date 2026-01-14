import styled, { css } from 'styled-components'
import { getTextAlign, getCssSize } from '../../utils'

interface CommonProps {
  $customStyles?: string
}

export interface CustomStylesWithStatesProps {
  readonly default?: string
  readonly disabled?: string
  readonly hover?: string
  readonly active?: string
}

export type SizeProps = [number | string, number | string]

interface StyledProps {
  readonly $isRtl?: boolean
  readonly $isActive?: boolean
}

interface StyledOptionProps extends StyledProps {
  readonly $multiChoice?: boolean
  readonly $mt?: number | string
  readonly $mb?: number | string
  readonly $customStyles?: CustomStylesWithStatesProps
}

interface StyledImgProps extends StyledProps {
  readonly $imgSrc?: string
  readonly $size?: SizeProps
}

export const StyledOption = styled('button')<StyledOptionProps>(
  ({ theme, $isRtl = Boolean(theme.isRtl), $isActive, $multiChoice, $mt, $mb, $customStyles }) => css`
    display: flex;
    flex-direction: ${($isRtl && !theme.enableRTL) ? 'row-reverse' : 'row'};
    align-items: center;
    gap: 16px;
    column-gap: 16px;
    width: 100%;
    max-width: ${theme.maxContentWidth}px;
    border-radius: 12px;
    font-size: 16px;
    line-height: 1.5;
    color: ${theme.colors.text};
    text-align: ${getTextAlign($isRtl)};
    position: relative;
    transition: .3s;
    cursor: pointer;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;
    ${$multiChoice && `
      padding: 16px 56px;
      padding-${getTextAlign($isRtl)}: 16px;
    `};
    background-color: ${theme.colors[$isActive ? 'optionActive' : 'optionInactive']};
    border: 1px solid ${theme.colors[$isActive ? 'optionBorderActive' : 'optionBorderInactive']};
    color: ${theme.colors[$isActive ? 'optionActiveText' : 'text']};
    ${$mt !== undefined && `margin-top: ${getCssSize($mt)}`};
    ${$mb !== undefined && `margin-bottom: ${getCssSize($mb)}`};
  
    &:first-child {
      margin-top: 0;
    }
  
    &:focus {
      outline: none;
    }

    ${$customStyles?.default};
    
    &:disabled {
      ${$customStyles?.disabled};
    }
    
    &:active {
      ${$customStyles?.active};
    }
  
    @media screen and (min-width: ${theme.desktopMinWidth}px ) and (hover: hover) {
      &:hover {
        background-color: ${theme.colors.optionActive};
        border-color: ${theme.colors.optionBorderActive};
        color: ${theme.colors.optionActiveText};

        .check-element {
          background-color: ${theme.colors.optionCheckActive};

          path {
            fill: ${theme.colors.optionActive};
          }
        }

        .option-img {
          background-color: ${theme.colors.optionImgActive};
        }

        ${$customStyles?.hover};
      }
    }
  `
)

export const StyledImg = styled('div')<StyledImgProps & CommonProps>(
  ({ theme, $isActive, $size, $imgSrc, $customStyles }) => css`
    width: ${getCssSize($size?.[0] || 64)};
    height: ${getCssSize($size?.[1] || 64)};
    border-radius: 7px;
    background-color: ${theme.colors[$isActive ? 'optionImgActive' : 'optionImgInactive']};
    ${$imgSrc && css`
      background-image: url(${$imgSrc});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `};
    position: relative;
    transition: background-color .3s;
  
    ${$customStyles};
  `
)

export const StyledCheckIcon = styled('div')<StyledProps & CommonProps>(
  ({ theme, $isRtl = Boolean(theme.isRtl), $isActive, $customStyles }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${theme.colors[$isActive ? 'optionCheckActive' : 'optionCheckInactive']};
    position: absolute;
    top: 50%;
    left: 16px;
    right: 16px;
    ${getTextAlign($isRtl)}: auto;
    transform: translateY(-50%);
    transition: background-color .3s;

    ${$customStyles};
  `
)

export const ThreeDots = styled('div')<CommonProps & { $size?: SizeProps }>(
  ({ theme, $customStyles, $size }) => css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${theme.colors.threeDots};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    zoom: calc(${$size?.[0] || 64}/64);

    &:before, &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      position: absolute;
      top: 0;
      right: 12px;
    }
    
    &:before {
      right: -12px;
    }
  
    ${$customStyles};
  `
)
