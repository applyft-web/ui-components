import styled, { css } from 'styled-components'
import { getCssSize, getTextAlign } from '../../utils'

interface CommonProps {
  readonly $customStyles?: string
  readonly $staticMode?: boolean
}

interface MarginProps {
  readonly $mt?: string | number
  readonly $mb?: string | number
}

interface ReviewItemProps extends CommonProps {
  readonly $isRtl?: boolean
  readonly $sideMargin?: number
}

export const ReviewsContainer = styled('div')<MarginProps & CommonProps>(
  ({ theme, $mt, $mb, $staticMode, $customStyles }) => css`
    display: flex;
    width: 100%;
    max-width: ${theme.maxContentWidth}px;
    margin: 0 auto;
    overflow: hidden;
    ${$mt !== undefined && `margin-top: ${getCssSize($mt)}`};
    ${$mb !== undefined && `margin-bottom: ${getCssSize($mb)}`};
    position: relative;
    flex-shrink: 0;
    ${$staticMode && css`
      flex-direction: column;
      overflow: initial;
    `};

    ${$customStyles};
  `
)

export const ReviewsBlock = styled('div')`
  width: 100%;
  display: flex;
  transition: transform 0.5s ease;
  direction: ltr;
`

export const ReviewsItem = styled('div')<ReviewItemProps>(
  ({ theme, $staticMode, $isRtl = Boolean(theme.isRtl), $sideMargin, $customStyles }) => css`
    background-color: ${theme.colors?.reviewItemBg};
    border: 1px solid #DEDEDE;
    border-radius: 12px;
    ${!$staticMode && `flex: 1 0 calc(100vw - ${(parseInt(theme.sidePadding) || 16) * 2}px);`};
    max-width: ${theme.maxContentWidth}px;
    padding: 12px 16px;
    text-align: ${getTextAlign($isRtl)};
    transition: transform 0.5s ease;
    ${$isRtl && css`direction: rtl;`};

    &:not(:last-child) {
      ${$staticMode
        ? css`margin-bottom: 12px;`
        : css`margin-right: ${$sideMargin ?? theme.sidePadding ?? 16}px`
      };
    }

    ${$customStyles};
  `
)

export const Reviewer = styled('div')<{ $image?: string, $isRtl?: boolean }>(
  ({ theme, $isRtl = Boolean(theme.isRtl), $image }) => css`
    display: flex;
    flex-direction: ${($isRtl && !theme.enableRTL) ? 'row-reverse' : 'row'};
    align-items: center;
    margin-bottom: 8px;
    padding-${getTextAlign($isRtl)}: 38px;
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      ${$image && `background: url(${$image}) center / contain no-repeat`};
      background-color: ${theme.colors?.bodyBackground};
      position: absolute;
      top: 0;
      ${getTextAlign($isRtl)}: 0;
    }
  `
)

export const ReviewText = styled('div')`
  font-size: 14px;
  line-height: 19px;
`
