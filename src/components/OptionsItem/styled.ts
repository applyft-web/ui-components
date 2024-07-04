import styled from 'styled-components';
import { getTextAlign, getCssSize } from '../../utils';

interface CommonProps {
  $customStyles?: string;
}

export interface CustomStylesWithStatesProps {
  readonly default?: string;
  readonly disabled?: string;
  readonly hover?: string;
  readonly active?: string;
}

interface StyledProps {
  readonly $isArabic?: boolean;
  readonly $isActive?: boolean;
}

interface StyledOptionProps extends StyledProps {
  readonly $isLarge?: boolean;
  readonly $multiChoice?: boolean;
  readonly $mt?: number | string,
  readonly $mb?: number | string,
  readonly $customStyles?: CustomStylesWithStatesProps;
}

interface StyledImgProps extends StyledProps {
  readonly $imgSrc?: string;
}

export const StyledOption = styled.button<StyledOptionProps>`
  display: flex;
  flex-direction: ${({ $isArabic }) => `row${$isArabic ? '-reverse' : ''}`};
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxContentWidth}px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme?.colors?.text};
  position: relative;
  transition: .3s;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  ${({ $isLarge }) => $isLarge
    ? `padding: 15px 16px;`
    : `
      padding: 16px;
      border: none;
    `
  };
  ${({ $multiChoice, $isArabic }) => $multiChoice && `
    padding: 15px 56px;
    padding-${getTextAlign($isArabic)}: 16px;
  `};
  ${({ theme, $isActive }) => $isActive
    ? `
      background-color: ${theme?.colors?.optionActive};
      border: 1px solid ${theme?.colors?.optionBorderActive};
      color: ${theme?.colors?.optionActiveText};
    `
    : `
      background-color: ${theme?.colors?.optionInactive};
      border: 1px solid ${theme?.colors?.optionBorderInactive};
    `
  };
  ${({ $mt }) => $mt && `margin-top: ${getCssSize($mt)}`};
  ${({ $mb }) => $mb && `margin-bottom: ${getCssSize($mb)}`};

  &:first-child {
    margin-top: 0;
  }

  &:focus {
    outline: none;
  }
  
  &:disabled {
    ${({ $customStyles }) => $customStyles?.disabled};
  }
  
  &:active {
    ${({ $customStyles }) => $customStyles?.active};
  }

  @media screen and (min-width: ${({ theme }) => theme?.desktopMinWidth}px ) and (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme?.colors?.optionActive};
      border-color: ${({ theme }) => theme?.colors?.optionBorderActive};
      color: ${({ theme }) => theme?.colors?.optionActiveText};
      
      .check-element {
        background-color: ${({ theme }) => theme?.colors?.optionCheckActive};

        path {
          fill: ${({ theme }) => theme?.colors?.optionActive};
        }
      }

      .option-img {
        background-color: ${({ theme }) => theme?.colors?.optionImgActive};
      }
      
      ${({ $customStyles }) => $customStyles?.hover};
    }
  }
  
  ${({ $customStyles }) => $customStyles?.default};
`;

export const StyledImg = styled.div<StyledImgProps & CommonProps>`
  width: 64px;
  height: 64px;
  border-radius: 7px;
  background-color: ${({ theme, $isActive }) => theme?.colors?.[`optionImg${$isActive ? 'Active' : 'Inactive'}`]};
  ${({ $imgSrc }) => $imgSrc && `
    background-image: url(${$imgSrc});
    background-size: cover;
  `};
  margin: 0 16px;
  margin-${({ $isArabic }) => getTextAlign($isArabic)}: 0;
  position: relative;
  transition: background-color .3s;

  ${({ $customStyles }) => $customStyles};
`;

export const StyledCheckIcon = styled.div<StyledProps & CommonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme, $isActive }) => theme?.colors?.[`optionCheck${$isActive ? 'Active' : 'Inactive'}`]};
  position: absolute;
  top: 50%;
  left: 16px;
  right: 16px;
  ${({ $isArabic }) => getTextAlign($isArabic)}: auto;
  transform: translateY(-50%);
  transition: background-color .3s;

  ${({ $customStyles }) => $customStyles};
`;

export const ThreeDots = styled.div<CommonProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme?.colors?.threeDots};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  &:before, &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: inherit;
    position: absolute;
    top: 0;
    right: 12px;
  }
  
  &:before {
    right: -12px;
  }

  ${({ $customStyles }) => $customStyles};
`;
