import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FallBack } from './FallBack'
import { type StoryWrapperType, themesToControls } from '../../stories'
import { GlobalThemeProvider } from '../../core'

const Wrapper = ({ theme, isRtl, ...rest }: StoryWrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <FallBack {...rest} />
  </GlobalThemeProvider>
)

const meta: Meta<StoryWrapperType> = {
  component: Wrapper,
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const FallBackStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: ''
  }
}

FallBackStoryTemplate.storyName = 'FallBack'
