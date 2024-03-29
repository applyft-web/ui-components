import React from 'react';
import styled from 'styled-components';
import { CheckIcon } from '../Icons';
import type { Theme } from '../../core/theme';
import { getTextAlign, getCssSize } from '../../utils';

interface StyledProps {
  readonly $isArabic?: boolean;
  readonly $isActive?: boolean;
}

interface StyledOptionProps extends StyledProps{
  readonly $isLarge?: boolean;
  readonly $multiChoice?: boolean;
  readonly $customStyles?: string;
  readonly $mt?: string | number,
  readonly $mb?: string | number,
}

interface StyledImgProps extends StyledProps {
  readonly $imgSrc?: string;
}

interface StyledCheckIconProps extends StyledProps {}

const StyledOption = styled.button<StyledOptionProps>`
  display: flex;
  flex-direction: ${({ $isArabic }) => `row${$isArabic ? '-reverse' : ''}`};
  align-items: center;
  width: 100%;
  max-width: 327px;
  background-color: ${({ theme, $isActive }) => theme?.colors?.[`option${$isActive ? 'Active' : 'Inactive'}`]};
  border-radius: 12px;
  border: ${({ theme, $isActive, $isLarge }) =>
    $isLarge
      ? `1px solid ${theme?.colors?.[`option${$isActive ? 'BorderActive' : 'Inactive'}`]}`
      : 'none'
  };
  padding: ${({ $isLarge }) => $isLarge ? 15 : 16}px 16px;
  ${({ $multiChoice, $isArabic }) => $multiChoice && `padding-${getTextAlign($isArabic)}: 56px`};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme?.colors?.text};
  position: relative;
  transition: .3s;
  cursor: pointer;
  ${({ $mt }) => $mt && `margin-top: ${getCssSize($mt)}`};
  ${({ $mb }) => $mb && `margin-bottom: ${getCssSize($mb)}`};

  &:first-child {
    margin-top: 0;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme?.desktopMinWidth}px ) and (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme?.colors?.optionActive};
    }
  }
  
  ${({ $customStyles }) => $customStyles};
`;

const StyledImg = styled.div<StyledImgProps>`
  width: 64px;
  height: 64px;
  border-radius: 7px;
  background-color: ${({ theme, $isActive }) => theme?.colors?.[`optionImg${$isActive ? 'Active' : 'Inactive'}`]};
  ${({ $imgSrc }) => $imgSrc && `
    background-image: url(${$imgSrc});
    background-size: cover;
  `}
  margin-${({ $isArabic }) => getTextAlign($isArabic)}: 16px;
  position: relative;
  transition: background-color .3s;
`;

const StyledCheckIcon = styled.div<StyledCheckIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme, $isActive }) => theme?.colors?.[`optionCheck${$isActive ? 'Active' : 'Inactive'}`]};
  position: absolute;
  top: calc(50% - 10px);
  ${({ $isArabic }) => getTextAlign($isArabic)}: 16px;
  transition: background-color .3s;
`;

const ThreeDots = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme?.colors?.threeDots};
  position: absolute;
  top: calc(50% - 4px);
  left: calc(50% - 4px);
  
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
`;

interface OptionsItemProps {
  children?: any;
  onClick: () => void;
  isArabic?: boolean;
  isActive?: boolean;
  img?: string;
  multiChoice?: boolean;
  customId?: string;
  customStyles?: string;
  theme?: Theme;
  mt?: string | number;
  mb?: string | number;
  [propName: string]: any;
}

export const OptionsItem = ({
  children = 'Other',
  onClick,
  isArabic = false,
  isActive = false,
  multiChoice = false,
  img,
  customId = 'option-1',
  mt,
  mb,
  customStyles,
  ...rest
}: OptionsItemProps) => {
  const imgSrc: string | null = img && img.trim() !== 'other' ? img.trim() : null;

  return (
    <StyledOption
      onClick={onClick}
      $isArabic={isArabic}
      $isActive={isActive}
      $isLarge={!!img}
      $multiChoice={multiChoice}
      id={customId}
      $mt={mt}
      $mb={mb}
      $customStyles={customStyles}
      {...rest}
    >
      {!!img && (
        <StyledImg
          $imgSrc={imgSrc}
          $isArabic={isArabic}
          $isActive={isActive}
          theme={rest?.theme}
        >
          {!imgSrc && <ThreeDots theme={rest?.theme}/>}
        </StyledImg>
      )}
      {children}
      {multiChoice && (
        <StyledCheckIcon
          $isArabic={isArabic}
          $isActive={isActive}
          theme={rest?.theme}
        >
          <CheckIcon isActive={isActive} theme={rest?.theme} />
        </StyledCheckIcon>
      )}
    </StyledOption>
  );
};
