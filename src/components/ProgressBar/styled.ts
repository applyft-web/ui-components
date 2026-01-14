import styled, { css } from 'styled-components'
import { getTextAlign } from '../../utils'

interface CommonProps {
  readonly $customStyles?: string
  readonly $isRtl?: boolean
}

interface StyledBarProps {
  readonly $isSegmented?: boolean
}

interface StyledBarItemProps {
  readonly $isActive: boolean
  readonly $isLastActive: boolean
  readonly $isSegmented: boolean
}

export const StyledContainer = styled('div')<CommonProps & { $staticPosition: boolean }>(
  ({ theme, $isRtl = Boolean(theme.isRtl), $customStyles, $staticPosition }) => css`
    display: flex;
    align-items: center;
    flex-direction: ${($isRtl && !theme.enableRTL) ? 'row-reverse' : 'row'};
    max-width: ${theme.maxContentWidth}px;
    height: 20px;
    ${!$staticPosition && css`
      width: calc(100% - ${theme.sidePadding}px);
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
    `};

    ${$customStyles};
  `
)

export const StyledSkip = styled('div')<CommonProps>(
  ({ theme, $isRtl = Boolean(theme.isRtl), $customStyles }) => css`
    font-size: 16px;
    line-height: 20px;
    margin-${getTextAlign($isRtl)}: 20px;
    cursor: pointer;

    @media screen and (min-width: ${theme.tabletMinWidth}px) and (hover: hover) {
      &:hover {
        opacity: 0.8;
      }
    }

    ${$customStyles};
  `
)

export const StyledBar = styled('div')<StyledBarProps & CommonProps>(
  ({ theme, $isRtl = Boolean(theme.isRtl), $isSegmented, $customStyles }) => css`
    display: flex;
    flex-direction: ${($isRtl && !theme.enableRTL) ? 'row-reverse' : 'row'};
    flex: 1 0 auto;
    height: 8px;
    border-radius: 20px;
    background-color: ${theme.colors.progressBarBg || '#fff'};
    transition: background-color 300ms;
    overflow: hidden;
    ${$isSegmented && css`
      gap: 5px;
      column-gap: 5px;
      background-color: transparent;
    `}

    ${$customStyles};
  `
)

export const StyledBarItem = styled('div')<StyledBarItemProps & CommonProps>(
  ({ theme, $isActive, $isLastActive, $isSegmented, $customStyles }) => css`
    flex-grow: 1;
    background-color: ${theme.colors[$isActive ? 'progressBarActive' : 'progressBarBg']};
    ${!$isLastActive
      ? `box-shadow: 1px 0 0 ${theme.colors[$isActive ? 'progressBarActive' : 'progressBarBg']};`
      : `border-radius: ${theme.isRtl ? '14px 0 0 14px' : '0 14px 14px 0'};`
    };
    transition: background-color 300ms;

    ${$isSegmented && css`
      border-radius: 14px;
    `};

    ${$customStyles};
  `
)
