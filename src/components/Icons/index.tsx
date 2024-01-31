import React, { HTMLProps, FC } from 'react'

import { ReactComponent as GooglePlayIconComponent } from '../../core/assets/icons/GooglePlay.svg'
import { ReactComponent as AppStoreIconComponent } from '../../core/assets/icons/AppStore.svg'
import { ReactComponent as PaypalIconComponent } from '../../core/assets/icons/PapalIcon.svg'

export type IconProps = Partial<HTMLProps<SVGElement>>

const createIcon = (Icon: FC<IconProps>): FC<IconProps> => (props: IconProps) => <Icon {...props} />;

export const GooglePlayIcon = createIcon(GooglePlayIconComponent)
export const AppStoreIcon = createIcon(AppStoreIconComponent)
export const PaypalIcon = createIcon(PaypalIconComponent)
