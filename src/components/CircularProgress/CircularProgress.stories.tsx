import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CircularProgress, type CircularProgressProps } from './CircularProgress'
import { type StoryWrapperType, themesToControls } from '../../stories'
import { GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

type WrapperType = StoryWrapperType<CircularProgressProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <CircularProgress {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['children']
    }
  },
  argTypes: {
    ...themesToControls,
    progress: {
      control: 'number'
    }
  }
}

export default meta

export const CircularProgressStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: '',
    size: 174,
    progress: 35,
    mt: 0,
    mb: 0,
    customStyles: 'margin: 0 auto;'
  }
}

CircularProgressStoryTemplate.storyName = 'CircularProgress'
