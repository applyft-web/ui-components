import React, {
  type ReactElement,
  type PropsWithChildren,
  type HTMLAttributes
} from 'react'
import { getFormattedStyles } from '../../../utils'
import * as S from './styled'

export interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  pt?: string | number
  pb?: string | number
  customStyles?: S.MainLayoutCustomStylesWithStatesProps | string
  adaptive?: boolean
}

export const MainLayout = ({
  children,
  pt = 16,
  pb = 16,
  customStyles,
  adaptive = false,
  ...rest
}: PropsWithChildren<MainLayoutProps>): ReactElement => {
  const styles: S.MainLayoutCustomStylesWithStatesProps = getFormattedStyles(customStyles, 'default')

  return (
    <S.StyledLayout
      $pt={pt}
      $pb={pb}
      $customStyles={styles}
      $adaptive={adaptive}
      {...rest}
    >
      {children}
    </S.StyledLayout>
  )
}
