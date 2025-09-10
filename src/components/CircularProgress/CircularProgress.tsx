import React, {
  type ReactElement,
  type PropsWithChildren,
  type HTMLAttributes
} from 'react'
import * as S from './styled'

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  progress?: number | number[]
  mt?: string | number
  mb?: string | number
  customStyles?: string
}

export const CircularProgress = ({
  children,
  size = 174,
  progress = 0,
  mt,
  mb,
  customStyles,
  ...rest
}: PropsWithChildren<CircularProgressProps>): ReactElement => {
  const isSmall = size < 100

  return (
    <S.ProgressWrapper
      $size={size}
      $customStyles={customStyles}
      $mt={mt}
      $mb={mb}
      {...rest}
    >
      {children}
      <S.StyledSvg
        viewBox={`${size / 6} ${size / 6} ${size / 3} ${size / 3}`}
        xmlns="http://www.w3.org/2000/svg"
        $size={size}
      >
        {(typeof progress === 'number' ? [progress] : progress).map((el: number, i: number) => (
          <S.StyledCircle
            cx={size / 3}
            cy={size / 3}
            r={size / 6 - (isSmall ? 1 : 2)}
            fill="none"
            strokeWidth={isSmall ? 2 : 4}
            strokeDasharray={`${size}px`}
            strokeDashoffset={`${size * (1 - el / 100)}px`}
            key={i}
            $small={isSmall}
          />
        ))}
      </S.StyledSvg>
    </S.ProgressWrapper>
  )
}
