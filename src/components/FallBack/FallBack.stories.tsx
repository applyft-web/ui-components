import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FallBack } from './FallBack'
import { themesToControls } from '../../stories'
import { getTheme, GlobalThemeProvider } from '../../core'

const Wrapper = (props: any): ReactElement => (
  <GlobalThemeProvider projectTheme={props.theme}>
    <FallBack {...props} />
  </GlobalThemeProvider>
)

const meta: Meta<typeof FallBack> = {
  component: Wrapper,
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const FallBackStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme()
  }
}

FallBackStoryTemplate.storyName = 'FallBack'
