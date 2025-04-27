import styled, { css } from 'styled-components';
import { getTextAlign } from '../../utils';

interface CommonProps {
  readonly $customStyles?: string;
}

interface LabelProps {
  readonly $error?: boolean;
  readonly $isArabic?: boolean;
  readonly $showPlaceholder: boolean;
  readonly $placeholderStyles?: string;
}

interface InputProps {
  readonly $error?: boolean;
  readonly $isArabic?: boolean;
}

export const Wrapper = styled.div<CommonProps>`
  ${({ $customStyles }) => $customStyles};
`;

export const InputWrapper = styled.label<LabelProps & CommonProps>(
  ({ theme, $isArabic = theme.isArabic, $showPlaceholder, $placeholderStyles, $customStyles }) => css`
    --side-padding: 16px;
    display: block;
    position: relative;
    cursor: text;

    ${$showPlaceholder && css`
      &:after {
        content: attr(data-placeholder);
        display: block;
        font-size: 12px;
        line-height: 14px;
        color: #8696A6;
        white-space: pre-line;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: var(--side-padding);
        left: var(--side-padding);
        //padding-${getTextAlign($isArabic)}: 5px;
        text-align: ${getTextAlign($isArabic)};

        ${$placeholderStyles};
      }
    `};

    ${$customStyles};
  `
);

export const Input = styled.input<InputProps & CommonProps>(
  ({ theme, $error, $isArabic = theme.isArabic, $customStyles }) => css`
    width: 100%;
    border-radius: 12px;
    border: none;
    box-shadow: inset 0 0 0 1px ${$error ? '#FF5B5B' : 'rgb(229,229,229)'};
    background-color: ${theme?.colors?.inputBg};
    padding: 12px var(--side-padding);
    font-size: 16px;
    line-height: 32px;
    color: ${theme?.colors?.text};
    text-align: ${getTextAlign($isArabic)};
    position: relative;

    &:focus,
    &:active {
      outline: none;
      border: none;
      box-shadow: inset 0 0 0 1px ${!$error ? theme?.colors?.primary : '#E55656'};
    }

    ${$customStyles};
  `
);

export const ErrorState = styled.div<CommonProps>`
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  color: #E55656;
  padding: 0 15px;
  position: absolute;
  left: 0;
  top: calc(var(--input-height) + 2px);

  ${({ $customStyles }) => $customStyles};
`;

export const BtnContainer = styled.div<{ $isArabic?: boolean } & CommonProps>(
  ({ theme, $isArabic = theme.isArabic, $customStyles }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: ${$isArabic ? 'row-reverse' : 'row'};
    margin-top: 16px;
    height: 28px;
    gap: 12px;
    row-gap: 12px;

    @media screen and (max-width: ${theme?.mobileWidth}px) {
      gap: 5px;
      row-gap: 5px;
    }

    ${$customStyles};
  `
);

export const DomainBtn = styled.button<CommonProps>`
  flex: 1 0 90px;
  height: 28px;
  min-width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgb(229,229,229);
  border-radius: 100px;
  font-size: 12px;
  line-height: 1;
  color: #8696A6;
  padding: 0 5px;
  cursor: pointer;
  
  &:only-child {
    max-width: 90px;
  }
  
  ${({ $customStyles }) => $customStyles};
`;
