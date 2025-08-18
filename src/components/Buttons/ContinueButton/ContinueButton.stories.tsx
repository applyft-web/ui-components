import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ContinueButton, type ContinueButtonProps } from './ContinueButton'
import { themesToControls } from '../../../stories'
import { getTheme, GlobalThemeProvider } from '../../../core'
import { MainLayout } from '../../Layouts'

const Wrapper = (props: ContinueButtonProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <ContinueButton {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  )
}

const meta: Meta<typeof ContinueButton> = {
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

export default meta;

export const ContinueButtonStoryTemplate: StoryObj<typeof meta> = {
  args: {
    children: 'Test!',
    theme: getTheme(),
    disabled: false,
    staticPosition: false,
    mt: 0,
    mb: 0,
    customStyles: {
      default: '',
      disabled: '',
      hover: ''
    }
  }
}

ContinueButtonStoryTemplate.storyName = 'ContinueButton'
