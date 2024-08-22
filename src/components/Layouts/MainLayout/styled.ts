import styled from 'styled-components';
import { getCssSize } from '../../../utils';

export interface MainLayoutCustomStylesWithStatesProps {
  readonly default?: string;
  readonly tablet?: string;
  readonly mobile?: string;
}

interface StyledLayoutProps {
  readonly $pt?: string | number;
  readonly $pb?: string | number;
  readonly $customStyles?: MainLayoutCustomStylesWithStatesProps;
}

export const StyledLayout = styled.div<StyledLayoutProps>`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => parseInt(theme?.maxContentWidth || 375) + parseInt(theme?.sidePadding || 0)*2}px;
  margin: 0 auto;
  ${({ $pt }) => $pt !== undefined && `padding-top: ${getCssSize($pt)}`};
  ${({ $pb }) => $pb !== undefined && `padding-bottom: ${getCssSize($pb)}`};
  ${({ theme }) => `
    padding-right: ${theme?.sidePadding || 16}px;
    padding-left: ${theme?.sidePadding || 16}px;
  `};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  & > * {
    align-self: stretch;
  }

  @media screen and (min-width: ${({ theme }) => theme?.tabletMinWidth}px) {
    justify-content: center;

    ${({ $customStyles }) => $customStyles?.tablet};
  }

  @media screen and (max-width: ${({ theme }) => theme?.mobileWidth}px) {
    ${({ $customStyles }) => $customStyles?.mobile};
  }
  
  ${({ $customStyles }) => $customStyles?.default};
`;
