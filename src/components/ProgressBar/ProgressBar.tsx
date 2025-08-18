import React from 'react'
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
  isArabic?: boolean
  [propName: string]: any
}

export const ProgressBar = ({
  isSegmented = false,
  totalCount,
  currentRoute,
  skipButton,
  customStyles,
  staticPosition = false,
  isArabic,
  ...rest
}: ProgressBarProps) => {
  const theme = rest?.theme
  const pages = Array.from({ length: totalCount }, (_, i) => i)
  const styles: CustomStylesProps = getFormattedStyles(customStyles, 'container')

  const renderProgress = (i: number) => (
    <S.StyledBarItem
      $isActive={i <= currentRoute}
      $isLastActive={i === currentRoute}
      $isSegmented={isSegmented}
      theme={theme}
      $customStyles={styles?.segment}
      key={i}
    />
  )

  return (
    <S.StyledContainer
      $customStyles={styles?.container}
      $staticPosition={staticPosition}
      $isArabic={isArabic}
      theme={theme}
    >
      <S.StyledBar
        $isSegmented={isSegmented}
        $customStyles={styles?.bar}
        $isArabic={isArabic}
        theme={theme}
      >
        {pages.map(renderProgress)}
      </S.StyledBar>
      {skipButton && (
        <S.StyledSkip
          onClick={rest?.onContinueClick}
          theme={theme}
          $isArabic={isArabic}
          $customStyles={styles?.skip}
        >
          {skipButton}
        </S.StyledSkip>
      )}
    </S.StyledContainer>
  )
}
