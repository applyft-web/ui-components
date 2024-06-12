import styled from 'styled-components';
import { getCssSize, getTextAlign } from '../../utils';

interface MarginProps {
  readonly $mt?: string | number;
  readonly $mb?: string | number;
}

interface StaticProps {
  readonly $staticMode?: boolean;
}

export const ReviewsContainer = styled.div<MarginProps>`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxContentWidth}px;
  margin: 0 auto;
  overflow: hidden;
  ${({ $mt }) => $mt && `margin-top: ${getCssSize($mt)}`};
  ${({ $mb }) => $mb && `margin-bottom: ${getCssSize($mb)}`};
  position: relative;
  flex-shrink: 0;
`;

export const ReviewsBlock = styled.div<StaticProps>`
  width: 100%;
  ${({ $staticMode }) => !$staticMode ? `
    display: flex;
    transition: transform 0.5s ease;
  ` : `
    transform: translateX(0) !important;
  `};
`;

export const ReviewsItem = styled.div<StaticProps & { $isArabic?: boolean }>`
  background-color: ${({ theme }) => theme?.colos?.reviewItemBg};
  border: 1px solid #DEE0E6;
  border-radius: 12px;
  flex: 1 0 calc(100vw - ${({ theme }) => (theme?.sidePadding || 16)*2}px);
  max-width: ${({ theme }) => theme?.maxContentWidth}px;
  padding: 12px 16px;
  text-align: ${({ $isArabic }) => getTextAlign($isArabic)};
  transition: transform 0.5s ease;
  
  &:not(:last-child) {
    ${({ $staticMode, theme }) => $staticMode ? `
      margin-bottom: 16px;
    ` : `
      margin-right: ${theme?.sidePadding || 16}px
    `};
  }
`;

export const Reviewer = styled.div<{ $image?: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-left: 38px;
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
    ${({ $image }) => $image && `background: url(${$image}) center / contain no-repeat`};
    background-color: ${({ theme }) => theme?.colors?.bodyBackground};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ReviewText = styled.div``;
