import React, { type ReactElement } from 'react'
import { getFormattedStyles } from '../../../utils'
import * as S from './styled'

export interface MainLayoutProps {
  children?: any
  pt?: string | number
  pb?: string | number
  customStyles?: S.MainLayoutCustomStylesWithStatesProps | string
  adaptive?: boolean
  [propName: string]: any
}

export const MainLayout = ({
  children,
  pt = 16,
  pb = 16,
  customStyles,
  adaptive = false,
  ...rest
}: MainLayoutProps): ReactElement => {
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
