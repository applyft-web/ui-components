import React, {
  type HTMLAttributes,
  type ReactElement,
  type PropsWithChildren
} from 'react'
import { getFormattedStyles, reactChildrenMapping } from '../../utils'
import { GradientScrollable } from '../../core'
import * as S from './styled'

interface CustomStylesProps {
  readonly wrapper?: string
  readonly list?: string
}

export interface OptionsListProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number
  customStyles?: CustomStylesProps | string
  scrollable?: boolean
}

export const OptionsList = ({
  children,
  gap = 12,
  customStyles,
  scrollable = true,
  ...rest
}: PropsWithChildren<OptionsListProps>): ReactElement => {
  const styles: CustomStylesProps = getFormattedStyles(customStyles, scrollable ? 'wrapper' : 'list')
  const content = (
    <S.StyledOptionsList
      $customStyles={styles?.list}
      {...rest}
    >
      {reactChildrenMapping(children, { mt: gap })}
    </S.StyledOptionsList>
  )

  return scrollable ? <GradientScrollable customStyles={styles?.wrapper}>{content}</GradientScrollable> : content
}
