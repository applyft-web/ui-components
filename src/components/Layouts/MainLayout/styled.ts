import styled from 'styled-components';
import { getCssSize } from '../../../utils';

interface StyledLayoutProps {
  readonly $pt?: string | number;
  readonly $pb?: string | number;
  readonly $customStyles?: string;
}

export const StyledLayout = styled.div<StyledLayoutProps>`
  width: 100%;
  height: 100%;
  max-width: 375px;
  margin: 0 auto;
  ${({ $pt }) => $pt && `padding-top: ${getCssSize($pt)}`};
  ${({ $pb }) => $pb && `padding-bottom: ${getCssSize($pb)}`};
  ${({ theme }) => `
    padding-right: ${theme?.sidePadding || 16}px;
    padding-left: ${theme?.sidePadding || 16}px;
  `};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme?.tabletMinWidth}px) {
    justify-content: center;
  }

  @media screen and (max-width: ${({ theme }) => theme?.mobileWidth}px) {}

  & > * {
    width: 100%;
  }
  
  ${({ $customStyles }) => $customStyles};
`;
