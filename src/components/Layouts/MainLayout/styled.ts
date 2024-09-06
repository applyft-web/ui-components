import styled, { css } from 'styled-components';
import { getCssSize } from '../../../utils';

export interface MainLayoutCustomStylesWithStatesProps {
  readonly default?: string;
  readonly tablet?: string;
  readonly mobile?: string;
}

interface StyledLayoutProps {
  readonly $pt?: string | number;
  readonly $pb?: string | number;
  readonly $adaptive?: boolean;
  readonly $customStyles?: MainLayoutCustomStylesWithStatesProps;
}

export const StyledLayout = styled.div<StyledLayoutProps>`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  ${({ $adaptive, $pt, $pb, $customStyles, theme }) => $adaptive ? css`
    
    & > *:not(.ignore-inheritance) {
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    
    @media screen and (min-width: ${theme?.tabletMinWidth}px) {
      & > *:not(.ignore-inheritance) {
        max-width: 432px;
      }
    }
    
    @media screen and (min-width: ${theme?.desktopMinWidth}px) {
      & > *:not(.ignore-inheritance) {
        max-width: 960px;
        padding-left: 0;
        padding-right: 0;
      }
    }
    
  ` : css`
    
    max-width: ${parseInt(theme?.maxContentWidth || 375) + parseInt(theme?.sidePadding || 0)*2}px;
    ${$pt !== undefined && `padding-top: ${getCssSize($pt)}`};
    ${$pb !== undefined && `padding-bottom: ${getCssSize($pb)}`};
    padding-right: ${theme?.sidePadding || 16}px;
    padding-left: ${theme?.sidePadding || 16}px;
    
    & > * {
      width: 100%;
    }
    
    @media screen and (min-width: ${theme?.tabletMinWidth}px) {
      justify-content: center;
      
      ${$customStyles?.tablet};
    }
    
    @media screen and (max-width: ${theme?.mobileWidth}px) {
      ${$customStyles?.mobile};
    }
    
  `};
  
  ${({ $customStyles }) => $customStyles?.default};
`;
