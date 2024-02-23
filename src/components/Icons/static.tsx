import React, { HTMLProps, FC } from 'react'

import { ReactComponent as GooglePlayIconComponent } from '../../core/assets/icons/GooglePlay.svg'
import { ReactComponent as AppStoreIconComponent } from '../../core/assets/icons/AppStore.svg'
import { ReactComponent as PaypalIconComponent } from '../../core/assets/icons/PapalIcon.svg'

type IconProps = Partial<HTMLProps<SVGElement>>

const createIcon = (Icon: FC<IconProps>, width?: string, height?: string): FC<IconProps> => (props: IconProps) => (
  <Icon {...props} {...{width, height}} />
);

export const GooglePlayIcon = createIcon(GooglePlayIconComponent, '163px', '40px')
export const AppStoreIcon = createIcon(AppStoreIconComponent, '148px', '38px')
export const PaypalIcon = createIcon(PaypalIconComponent, '85px', '34px')
