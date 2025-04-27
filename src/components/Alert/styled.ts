import styled, { css } from 'styled-components';
import { getTextAlign } from '../../utils';

interface StyledAlertProps {
  $show: boolean;
  $isArabic?: boolean;
  $customStyles?: string;
}

export const StyledAlert = styled.div<StyledAlertProps>(
  ({ theme, $isArabic = theme.isArabic, $show, $customStyles }) => css`
    width: 90%;
    height: auto;
    max-width: ${theme?.maxContentWidth}px;
    min-height: 50px;
    padding: 16px 40px;
    border-radius: 8px;
    background-color: #FF5B5B;
    position: fixed;
    left: 50%;
    top: 6%;
    transform: translate(-50%, -20%);
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    text-align: ${getTextAlign($isArabic)};
    padding-${getTextAlign($isArabic)}: 16px;
    z-index: 100;
    ${$show
      ? css`
        opacity: 1;
        visibility: visible;
      `
      : css`
        opacity: 0;
        visibility: hidden;
      `
    };
    transition: 150ms ease;
    box-sizing: border-box;
    
    p {
      margin: 0;
    }
  
    ${$customStyles};
  `
);

export const CloseAlert = styled.div<{ $isArabic?: boolean }>`
  content: '×';
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 16px;
  left: 16px;
  ${({ theme, $isArabic = theme.isArabic }) => `${getTextAlign($isArabic)}: auto`};
  margin-top: -12px;
  font-size: 24px;
  line-height: 1;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;
