import React, { type ReactElement } from 'react'
import { getFormattedStyles } from '../../utils'
import * as S from './styled'

interface CustomStylesProps {
  readonly container?: string
  readonly bar?: string
  readonly segment?: string
  readonly skip?: string
}

export interface ProgressBarProps {
  isSegmented?: boolean
  totalCount: number
  currentRoute: number
  skipButton?: string
  customStyles?: CustomStylesProps | string
  staticPosition?: boolean
  onContinueClick?: () => void
  /**
   * @since 1.5.4
   * @deprecated use `isRtl` instead. or use GlobalThemeProvider with `isRtl` flag
   */
  isArabic?: boolean
  isRtl?: boolean
}

export const ProgressBar = ({
  isSegmented = false,
  totalCount,
  currentRoute,
  skipButton,
  customStyles,
  staticPosition = false,
  isArabic,
  isRtl = isArabic,
  ...rest
}: ProgressBarProps): ReactElement => {
  const pages = Array.from({ length: totalCount }, (_, i) => i)
  const styles: CustomStylesProps = getFormattedStyles(customStyles, 'container')

  const renderProgress = (i: number): ReactElement => (
    <S.StyledBarItem
      $isActive={i <= currentRoute}
      $isLastActive={i === currentRoute}
      $isSegmented={isSegmented}
      $customStyles={styles?.segment}
      key={i}
    />
  )

  return (
    <S.StyledContainer
      $customStyles={styles?.container}
      $staticPosition={staticPosition}
      $isRtl={isRtl}
    >
      <S.StyledBar
        $isSegmented={isSegmented}
        $customStyles={styles?.bar}
        $isRtl={isRtl}
      >
        {pages.map(renderProgress)}
      </S.StyledBar>
      {skipButton && (
        <S.StyledSkip
          onClick={rest?.onContinueClick}
          $isRtl={isRtl}
          $customStyles={styles?.skip}
        >
          {skipButton}
        </S.StyledSkip>
      )}
    </S.StyledContainer>
  )
}
