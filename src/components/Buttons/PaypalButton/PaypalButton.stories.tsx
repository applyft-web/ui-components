import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PaypalButton, type PaypalButtonProps } from './PaypalButton'
import { type StoryWrapperType, themesToControls } from '../../../stories'
import { GlobalThemeProvider } from '../../../core'
import { MainLayout } from '../../Layouts'

type WrapperType = StoryWrapperType<PaypalButtonProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <PaypalButton {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      include: ['theme', 'transparentStyle', 'customStyles']
    }
  },
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const PaypalButtonStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: '',
    onClick: () => { console.log('test') },
    transparentStyle: false
  }
}

PaypalButtonStoryTemplate.storyName = 'PaypalButton'
