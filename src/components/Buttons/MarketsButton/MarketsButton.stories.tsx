import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MarketsButton, type MarketsButtonProps } from './MarketsButton'
import { themesToControls } from '../../../stories'
import { getTheme, GlobalThemeProvider } from '../../../core'
import { MainLayout } from '../../Layouts'

const Wrapper = (props: MarketsButtonProps): ReactElement => (
  <GlobalThemeProvider projectTheme={props.theme}>
    <MainLayout>
      <div>
        <MarketsButton {...props} />
      </div>
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<typeof MarketsButton> = {
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
    theme: getTheme(),
    onClick: () => { console.log('test') },
    marketName: 'google'
  }
}

MarketsButtonStoryTemplate.storyName = 'MarketsButton'
