import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar, type ProgressBarProps } from './ProgressBar'
import { type StoryWrapperType, themesToControls } from '../../stories'
import { GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

type WrapperType = StoryWrapperType<ProgressBarProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <ProgressBar {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
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
    theme: '',
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
