import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Alert, type AlertProps } from './Alert'
import { themesToControls, type StoryWrapperType } from '../../stories'
import { GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

type WrapperType = StoryWrapperType<AlertProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <Alert {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['show', 'clearError']
    }
  },
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const AlertStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: '',
    show: true,
    message: 'This is an alert message',
    isRtl: false,
    customStyles: '',
    clearError: () => { console.log('closed!') }
  }
}

AlertStoryTemplate.storyName = 'Alert'
