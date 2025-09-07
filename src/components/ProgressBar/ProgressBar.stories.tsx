import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar, type ProgressBarProps } from './ProgressBar'
import { themesToControls } from '../../stories'
import { getTheme, GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

const Wrapper = (props: ProgressBarProps): ReactElement => (
  <GlobalThemeProvider projectTheme={props.theme}>
    <MainLayout>
      <ProgressBar {...props} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<typeof ProgressBar> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['onContinueClick']
    }
  },
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const ProgressBarStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    isSegmented: true,
    staticPosition: false,
    totalCount: 15,
    currentRoute: 5,
    skipButton: 'skip',
    isRtl: false,
    customStyles: {
      container: '',
      bar: '',
      segment: '',
      skip: ''
    }
  }
}

ProgressBarStoryTemplate.storyName = 'ProgressBar'
