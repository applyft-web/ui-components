import styled from 'styled-components';
import { getCssSize } from '../../utils';

interface CommonProps {
  readonly $isArabic?: boolean;
  readonly $isActive?: boolean;
}

interface MarginProps {
  readonly $mt?: string | number;
  readonly $mb?: string | number;
}

export const PlansBlock = styled.ul<MarginProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  list-style: none;
  ${({ $mt }) => $mt !== undefined && `margin-top: ${getCssSize($mt)}`};
  ${({ $mb }) => $mb !== undefined && `margin-bottom: ${getCssSize($mb)}`};
`;

export const PlanLi = styled.li<CommonProps & { $withLabel: boolean; $gap?: string | number }>`
  --border-width: 1px;
  --border-radius: ${({ theme }) => theme?.planItemBorderRadius || '8px'};
  display: flex;
  flex-direction: ${({ $isArabic }) => $isArabic ? 'row-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme?.colors?.planItemBg};
  border: var(--border-width) solid ${({ $isActive, theme }) => $isActive ? theme?.colors?.primary : theme?.colors?.planItemBorder};
  border-radius: var(--border-radius);
  width: 100%;
  height: 86px;
  padding: ${({ $withLabel }) => $withLabel ? '18px' : 0} 16px 0;
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: ${({ $gap }) => $gap !== undefined ? getCssSize($gap) : '8px'};
  }
  
  ${({ theme, $withLabel, $isActive }) => $withLabel && `
    &:before {
      content: attr(data-label);
      display: block;
      width: calc(100% + (var(--border-width)*2));
      height: 19px;
      position: absolute;
      top: calc(var(--border-width)*(-1));
      left: calc(var(--border-width)*(-1));
      background-color: ${$isActive ? theme?.colors?.primary : theme?.colors?.planItemLabelBg};
      border: var(--border-width) solid ${$isActive ? theme?.colors?.primary : theme?.colors?.planItemBorder};
      color: ${theme?.colors?.[`planItemLabelColor${$isActive ? 'Active' : 'Inactive'}`]};
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      box-sizing: border-box;
    }
  `}
`;

export const StyledPeriod = styled.div<CommonProps>`
  display: flex;
  flex-direction: ${({ $isArabic }) => $isArabic ? 'row-reverse' : 'row'};
  align-items: center;
  ${({ $isArabic }) => $isArabic && `
    justify-content: space-between;
    width: 51%;
  `}
`;

export const PlanCheck = styled.div<CommonProps>`
  --check-size: 24px;
  width: var(--check-size);
  height: var(--check-size);
  border-radius: 50%;
  border: 1px solid ${({ $isActive, theme }) => $isActive ? theme?.colors?.planItemCheckBorder : theme?.colors?.planItemBorder};
  background-color: ${({ $isActive, theme }) => $isActive ? theme?.colors?.primary : theme?.colors?.bodyBackground};
  position: relative;
  margin: ${({ $isArabic }) => $isArabic ? '0 0 0 16px' : '0 16px 0 0'};

  .check-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PlanTitle = styled.div<CommonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ $isActive, theme }) => theme?.colors?.[$isActive ? 'text' : 'planItemTextColorInactive']};
`;

export const StyledFullPrice = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme?.colors?.planItemTextColorInactive};
  margin-top: 2px;

  span {
    margin-right: 6px;
    color: ${({ theme }) => theme?.colors?.planItemTextColorInactive};
  }
`;

export const Strike = styled.span`
  text-decoration: line-through;
`;

export const StyledPriceWrapper = styled.div`
  display: flex;
`;

export const OldPrice = styled(Strike)`
  color: ${({ theme }) => theme?.colors?.planItemTextColorInactive};
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-decoration-color: #ff6363;
  align-self: flex-end;
`;

export const PriceWrapper = styled.div<CommonProps>`
  display: flex;
  font-weight: 600;
  font-size: 60px;
  line-height: 46px;
  text-align: center;
  color: ${({ $isActive, theme }) => theme?.colors?.[$isActive ? 'text' : 'planItemTextColorInactive']};
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
`;

export const Price = styled.div`
  min-width: 40px;
`;

export const SmallItemsWrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  text-align: left;
  margin-left: 2px;
`;

export const PerDay = styled.div`
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  margin-top: 5px;
`;
