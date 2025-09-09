import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { type CreatingAnimationProps, CreatingAnimation } from './CreatingAnimation'
import { type StoryWrapperType, themesToControls } from '../../stories'
import { GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

type WrapperType = StoryWrapperType<CreatingAnimationProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <CreatingAnimation {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['doneCallback']
    }
  },
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const CircularProgressStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: '',
    doneCallback: () => { alert('Done!') },
    duration: 100,
    size: 174,
    mt: 0,
    mb: 0,
    customStyles: ''
  }
}

CircularProgressStoryTemplate.storyName = 'CreatingAnimation'
