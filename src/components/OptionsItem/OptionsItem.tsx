import React, { type ReactElement, type PropsWithChildren } from 'react'
import { CheckIcon, type CheckIconStyledProps } from '../Icons'
import type { Theme } from '../../core'
import { getFormattedStyles } from '../../utils'
import * as S from './styled'

interface CustomStylesProps {
  option?: S.CustomStylesWithStatesProps | string
  img?: string
  dots?: string
  check?: string
  checkIcon?: CheckIconStyledProps | string
}

export interface OptionsItemProps {
  onClick: () => void
  /**
   * @since 1.5.4
   * @deprecated use `isRtl` instead. or use GlobalThemeProvider with `isRtl` flag
   */
  isArabic?: boolean
  isRtl?: boolean
  isActive?: boolean
  img?: string
  imgSize?: S.SizeProps | string | number
  multiChoice?: boolean
  customId?: string
  mt?: string | number
  mb?: string | number
  theme?: Theme
  customStyles?: CustomStylesProps | string
  [propName: string]: any
}

export const OptionsItem = ({
  children = 'Other',
  onClick,
  isArabic,
  isRtl = isArabic,
  isActive = false,
  multiChoice = false,
  img = '',
  imgSize,
  customId = 'option-1',
  mt,
  mb,
  customStyles,
  ...rest
}: PropsWithChildren<OptionsItemProps>): ReactElement => {
  const theme = rest?.theme
  const imgSrc: string | null = img ? img.trim() : null
  const styles = getFormattedStyles(customStyles, 'option')
  const optionStyles: S.CustomStylesWithStatesProps = getFormattedStyles(styles.option, 'default')
  const size = (): S.SizeProps => {
    if (typeof imgSize === 'string' || typeof imgSize === 'number') {
      return [imgSize, imgSize]
    }
    return imgSize
  }

  return (
    <S.StyledOption
      onClick={onClick}
      $isRtl={isRtl}
      $isActive={isActive}
      $multiChoice={multiChoice}
      id={customId}
      $mt={mt}
      $mb={mb}
      $customStyles={optionStyles}
      {...rest}
    >
      {!!img && (
        <S.StyledImg
          className={'option-img'}
          $imgSrc={imgSrc}
          $size={size()}
          $isRtl={isRtl}
          $isActive={isActive}
          theme={theme}
          $customStyles={styles?.img}
        >
          {!imgSrc && <S.ThreeDots theme={theme} $customStyles={styles?.dots} $size={size()} />}
        </S.StyledImg>
      )}
      {children}
      {multiChoice && (
        <S.StyledCheckIcon
          className={'check-element'}
          $isRtl={isRtl}
          $isActive={isActive}
          theme={theme}
          $customStyles={styles?.check}
        >
          <CheckIcon isActive={isActive} theme={theme} customStyles={styles?.checkIcon} />
        </S.StyledCheckIcon>
      )}
    </S.StyledOption>
  )
}
