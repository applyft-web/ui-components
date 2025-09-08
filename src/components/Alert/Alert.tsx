import React, {
  type ReactElement,
  type HTMLAttributes,
  useEffect,
  useState
} from 'react'
import * as S from './styled'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean
  message: string
  clearError: () => void
  /**
   * @since 1.5.4
   * @deprecated use `isRtl` instead. or use GlobalThemeProvider with `isRtl` flag
   */
  isArabic?: boolean
  isRtl?: boolean
  customStyles?: string
}

export const Alert = ({
  show,
  message,
  clearError,
  isArabic,
  isRtl = isArabic,
  customStyles,
  ...rest
}: AlertProps): ReactElement => {
  const [clear, setClear] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined

    if (show && !clear) {
      timer = setTimeout(clearError, 3000)
    }
    return () => {
      setClear(false)
      if (timer) clearTimeout(timer)
    }
  }, [show, clearError, clear])

  const onCloseClick = (): void => {
    setClear(true)
    clearError()
  }

  return (
    <S.StyledAlert
      $show={show}
      $isRtl={isRtl}
      $customStyles={customStyles}
      {...rest}
    >
      <p>{message}</p>
      {show && (
        <S.CloseAlert onClick={onCloseClick} $isRtl={isRtl}>×</S.CloseAlert>
      )}
    </S.StyledAlert>
  )
}
