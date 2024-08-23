import React from 'react';
import { useTranslation } from 'react-i18next';
import { getFormattedStyles } from '../../../utils';
import * as S from './styled';

export interface ContinueButtonProps {
  children?: React.ReactNode | string;
  onClick: () => void;
  customId?: string;
  mt?: string | number;
  mb?: string | number;
  staticPosition?: boolean;
  customStyles?: S.ButtonCustomStylesWithStatesProps | string;
  theme?: object;
  [propName: string]: any;
}

export const ContinueButton = ({
  children,
  onClick,
  customId = 'continue-button',
  mt,
  mb,
  staticPosition,
  customStyles,
  ...rest
}: ContinueButtonProps) => {
  const { t } = useTranslation();
  const styles: S.ButtonCustomStylesWithStatesProps = getFormattedStyles(customStyles, 'default');
  const extractPositioningRules = (cssString: string): string => {
    const positioningRules = cssString.match(/(position|top|right|bottom|left|z-index)\s*:\s*[^;]+;/g);
    return positioningRules ? positioningRules.join(' ') : '';
  };
  const wrapperStyles: string = !staticPosition ? extractPositioningRules(styles.default) : '';

  const btn = (
    <S.StyledButton
      onClick={onClick}
      id={customId}
      $mt={mt}
      $mb={mb}
      $customStyles={styles}
      {...rest}
    >
      {children ?? t('Continue')}
    </S.StyledButton>
  );
  
  return staticPosition ? btn : <S.FixedButtonWrapper $customStyles={wrapperStyles}>{btn}</S.FixedButtonWrapper>;
};
