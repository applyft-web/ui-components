import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ContinueButton, type ContinueButtonProps } from './ContinueButton'
import { themesToControls, type StoryWrapperType } from '../../../stories'
import { GlobalThemeProvider } from '../../../core'
import { MainLayout } from '../../Layouts'

type WrapperType = StoryWrapperType<ContinueButtonProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <ContinueButton {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['onClick']
    }
  },
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const ContinueButtonStoryTemplate: StoryObj<typeof meta> = {
  args: {
    children: 'Test!',
    theme: '',
    disabled: false,
    staticPosition: false,
    mt: 0,
    mb: 0,
    customStyles: {
      default: '',
      disabled: '',
      hover: ''
    },
    isRtl: false,
    centered: true
  }
}

ContinueButtonStoryTemplate.storyName = 'ContinueButton'
