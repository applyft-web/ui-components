import styled, { css } from 'styled-components';
import { getTextAlign } from '../../utils';

interface CommonProps {
  readonly $customStyles?: string;
  readonly $isArabic?: boolean;
}

interface StyledBarProps {
  readonly $isSegmented?: boolean;
}

interface StyledBarItemProps {
  readonly $isActive: boolean;
  readonly $isLastActive: boolean;
  readonly $isSegmented: boolean;
}

export const StyledContainer = styled.div<CommonProps & { $staticPosition: boolean }>(
  ({ theme, $isArabic = theme.isArabic, $customStyles, $staticPosition }) => css`
    display: flex;
    align-items: center;
    flex-direction: ${$isArabic ? 'row-reverse' : 'row'};
    max-width: ${theme?.maxContentWidth}px;
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
);

export const StyledSkip = styled.div<CommonProps>(
  ({ theme, $isArabic = theme.isArabic, $customStyles }) => css`
    font-size: 16px;
    line-height: 20px;
    margin-${getTextAlign($isArabic)}: 20px;
    cursor: pointer;

    @media screen and (min-width: ${theme?.tabletMinWidth}px) and (hover: hover) {
      &:hover {
        opacity: 0.8;
      }
    }

    ${$customStyles};
  `
);

export const StyledBar = styled.div<StyledBarProps & CommonProps>(
  ({ theme, $isSegmented, $customStyles }) => css`
    display: flex;
    flex-direction: ${theme.isArabic ? 'row-reverse' : 'row'};
    flex: 1 0 auto;
    height: 8px;
    border-radius: 20px;
    background-color: ${$isSegmented ? 'transparent' : theme?.colors?.progressBarBg || '#fff'};
    transition: background-color 300ms;
    overflow: hidden;

    ${$customStyles};
  `
);

export const StyledBarItem = styled.div<StyledBarItemProps & CommonProps>(
  ({ theme, $isActive, $isLastActive, $isSegmented, $customStyles }) => css`
    flex-grow: 1;
    background-color: ${theme?.colors?.[`progressBar${$isActive ? 'Active' : 'Bg'}`]};
    ${!$isLastActive
      ? `box-shadow: 1px 0 0 ${theme?.colors?.[`progressBar${$isActive ? 'Active' : 'Bg'}`]};`
      : `border-radius: ${theme.isArabic ? '14px 0 0 14px' : '0 14px 14px 0'};`
    };
    transition: background-color 300ms;

    ${$isSegmented && css`
      border-radius: 14px;
  
      &:not(:first-child) {
        margin-${getTextAlign(theme.isArabic)}: 5px;
      }
    `};

    ${$customStyles};
  `
);
