import React, { type ReactElement, useEffect, useState } from 'react'
import { CircularProgress, type CircularProgressProps } from '../CircularProgress'
import * as S from './styled'

export interface CreatingAnimationProps extends CircularProgressProps {
  duration?: number
  doneCallback?: (a: boolean) => void
  size?: number
  mt?: string | number
  mb?: string | number
  customStyles?: string
}

export const CreatingAnimation = ({
  duration = 5,
  doneCallback,
  size,
  mt,
  mb,
  customStyles,
  ...rest
}: CreatingAnimationProps): ReactElement => {
  const [progress, setProgress] = useState(0)
  const timeout = duration * 1000 / 100 // "* convert to milliseconds / 100 for 100%"

  useEffect(() => {
    if (doneCallback && progress === 100) {
      doneCallback(true)
    }
  }, [progress, doneCallback])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      )
    }, timeout)

    return () => {
      clearInterval(timer)
    }
  }, [timeout])

  return (
    <CircularProgress
      progress={progress}
      size={size}
      customStyles={customStyles}
      mt={mt}
      mb={mb}
      {...rest}
    >
      <S.Percentage>{progress}<span>%</span></S.Percentage>
    </CircularProgress>
  )
}
