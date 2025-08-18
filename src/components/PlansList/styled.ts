import styled, { css } from 'styled-components'
import { getCssSize, getFormattedStyles, getTextAlign } from '../../utils'

interface StylesProps {
  readonly $customStyles?: string
}

interface CommonProps {
  readonly $isArabic?: boolean
  readonly $isActive?: boolean
}

interface MarginProps {
  readonly $mt?: string | number
  readonly $mb?: string | number
}

export interface CustomStylesWithStatesProps {
  readonly default?: string
  readonly active?: string
}

interface PlanItemProps extends CommonProps {
  readonly $withLabel: boolean
  readonly $gap?: string | number
  readonly $customStyles?: CustomStylesWithStatesProps | string
  readonly $labelCustomStyles?: string
}

export const PlansBlock = styled('ul')<MarginProps & StylesProps>(
  ({ $mt, $mb, $customStyles }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    list-style: none;
    ${$mt !== undefined && `margin-top: ${getCssSize($mt)}`};
    ${$mb !== undefined && `margin-bottom: ${getCssSize($mb)}`};

    ${$customStyles};
  `
)

export const PlanLi = styled('li')<PlanItemProps>(
  ({ theme, $withLabel, $isActive, $isArabic = theme.isArabic, $gap, $labelCustomStyles, $customStyles }) => {
    const styles = getFormattedStyles($customStyles, 'default');
    return css`
      --border-width: 1px;
      --border-radius: ${theme?.planItemBorderRadius || '8px'};
      --label-height: ${$withLabel ? '18px' : '0px'};
      --plan-mt: ${$gap !== undefined ? getCssSize($gap) : '8px'};
      display: flex;
      flex-direction: ${($isArabic && !theme.enableRTL) ? 'row-reverse' : 'row'};
      justify-content: space-between;
      align-items: center;
      background-color: ${theme?.colors?.planItemBg};
      border: var(--border-width) solid ${theme?.colors?.[$isActive ? 'primary' : 'planItemBorder']};
      border-radius: ${$withLabel ? '0 0' : ''} var(--border-radius) var(--border-radius);
      width: 100%;
      height: 82px;
      padding: 0 16px;
      position: relative;
      cursor: pointer;
      margin-top: calc(var(--plan-mt) + (var(--label-height)));

      &:first-child {
        --plan-mt: 0px;
      }

      ${$withLabel && css`
        &:before {
          content: attr(data-label);
          display: block;
          width: calc(100% + (var(--border-width)*2));
          height: var(--label-height);
          position: absolute;
          bottom: 100%;
          left: calc(var(--border-width)*(-1));
          background-color: ${theme?.colors?.[$isActive ? 'primary' : 'planItemLabelBg']};
          border: var(--border-width) solid ${theme?.colors?.[$isActive ? 'primary' : 'planItemBorder']};
          color: ${theme?.colors?.[`planItemLabelColor${$isActive ? 'Active' : 'Inactive'}`]};
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          font-weight: 600;
          font-size: 12px;
          line-height: var(--line-height);
          box-sizing: border-box;
          
          ${$labelCustomStyles};
        }
      `};

      ${$isActive ? styles?.active : ''};
      ${styles?.default};
    `
  }
)

export const StyledPeriod = styled('div')<CommonProps>(
  ({ theme, $isArabic = theme.isArabic }) => css`
    display: flex;
    flex-direction: ${($isArabic && !theme.enableRTL) ? 'row-reverse' : 'row'};
    text-align: ${getTextAlign($isArabic)};
    align-items: center;
  `
)

export const PlanCheck = styled('div')<CommonProps & StylesProps>(
  ({ theme, $isActive, $isArabic = theme.isArabic, $customStyles }) => css`
    --check-size: 24px;
    width: var(--check-size);
    height: var(--check-size);
    border-radius: 50%;
    border: 1px solid ${theme?.colors?.[$isActive ? 'planItemCheckBorder' : 'planItemBorder']};
    background-color: ${theme?.colors?.[$isActive ? 'primary' : 'bodyBackground']};
    position: relative;
    margin: 0 16px;
    margin-${getTextAlign($isArabic)}: 0;
    flex-shrink: 0;

    .check-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    ${$customStyles};
  `
)

export const PlanTitle = styled('div')<CommonProps>(
  ({ theme, $isActive, $isArabic = theme.isArabic }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-${$isArabic ? 'end' : 'start'};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${theme?.colors?.[$isActive ? 'text' : 'planItemTextColorInactive']};
  `
)

export const PlanTitleText = styled('div')<StylesProps>`
  ${({ $customStyles }) => $customStyles};
`

export const StyledFullPrice = styled('div')<StylesProps>(
  ({ theme, $customStyles }) => css`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: ${theme?.colors?.planItemTextColorInactive};
    margin-top: 2px;

    span {
      margin-right: 6px;
      color: ${theme?.colors?.planItemTextColorInactive};
    }

    ${$customStyles};
  `
)

export const Strike = styled('span')`
  text-decoration: line-through;
`

export const StyledPriceWrapper = styled('div')`
  display: flex;
`

export const OldPrice = styled(Strike)<StylesProps>(
  ({ theme, $customStyles }) => css`
    color: ${theme?.colors?.planItemTextColorInactive};
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-decoration-color: #ff6363;
    align-self: flex-end;

    ${$customStyles};
  `
)

export const PriceWrapper = styled('div')<CommonProps & StylesProps>(
  ({ theme, $isActive, $customStyles }) => css`
    display: flex;
    font-weight: 600;
    font-size: 60px;
    line-height: 46px;
    text-align: center;
    color: ${theme?.colors?.[$isActive ? 'text' : 'planItemTextColorInactive']};
    padding-left: 13px;
    position: relative;

    &:before {
      content: attr(data-currency);
      font-weight: 600;
      font-size: 16px;
      line-height: 15px;
      position: absolute;
      top: 0;
      left: 0;
    }

    ${$customStyles};
  `
)

export const Price = styled('div')`
  min-width: 40px;
`

export const SmallItemsWrapper = styled('div')`
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  text-align: left;
  margin-left: 2px;
`

export const PerDay = styled('div')`
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  margin-top: 5px;
  white-space: nowrap;
`
