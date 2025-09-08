import React, {
  type ReactElement,
  type PropsWithChildren,
  type ButtonHTMLAttributes
} from 'react'
import { useTranslation } from 'react-i18next'
import { getFormattedStyles } from '../../../utils'
import {
  extractPositioningRules,
  extractPositioningRulesFromObject
} from './utils'
import * as S from './styled'

export interface ContinueButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  customId?: string
  mt?: string | number
  mb?: string | number
  centered?: boolean
  staticPosition?: boolean
  customStyles?: S.ButtonCustomStylesWithStatesProps | string
}

export const ContinueButton = ({
  children,
  onClick,
  customId = 'continue-button',
  mt,
  mb,
  centered = true,
  staticPosition,
  customStyles,
  ...rest
}: PropsWithChildren<ContinueButtonProps>): ReactElement => {
  const { t } = useTranslation()
  const styles: S.ButtonCustomStylesWithStatesProps = getFormattedStyles(customStyles, 'default')

  const btn = (
    <S.StyledButton
      onClick={onClick}
      id={customId}
      $mt={mt}
      $mb={mb}
      $centered={centered}
      $customStyles={styles}
      {...rest}
    >
      {children ?? t('continue')}
    </S.StyledButton>
  )

  return staticPosition
    ? btn
    : (
        <S.FixedButtonWrapper
          $customStyles={extractPositioningRules(styles.default)}
          style={extractPositioningRulesFromObject(rest.style)}
        >
          {btn}
        </S.FixedButtonWrapper>
      )
}
