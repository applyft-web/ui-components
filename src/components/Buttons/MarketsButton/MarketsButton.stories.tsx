import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MarketsButton, type MarketsButtonProps } from './MarketsButton'
import { themesToControls, type StoryWrapperType } from '../../../stories'
import { GlobalThemeProvider } from '../../../core'
import { MainLayout } from '../../Layouts'

type WrapperType = StoryWrapperType<MarketsButtonProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <MarketsButton {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      include: ['theme', 'marketName', 'customStyles']
    }
  },
  argTypes: {
    ...themesToControls,
    marketName: {
      options: ['google', 'apple'],
      control: 'inline-radio'
    }
  }
}

export default meta

export const MarketsButtonStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: '',
    onClick: () => { console.log('test') },
    marketName: 'google'
  }
}

MarketsButtonStoryTemplate.storyName = 'MarketsButton'
