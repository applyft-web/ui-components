import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Loader, type LoaderProps } from './Loader'
import { themesToControls } from '../../stories'
import { getTheme, GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

const Wrapper = (props: LoaderProps): ReactElement => (
  <GlobalThemeProvider projectTheme={props.theme}>
    <MainLayout>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. Nullam nec</div><br/>
      <br/>
      <div>Lorem ipsum dolor, consectetur adipiscing elit. Nullam nec</div><br/>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit. Nullam nec</div><br/>
      <div style={{ position: 'relative' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec consectetur adipiscing elit. Nullam nec consectetur adipiscing elit. Nullam nec
        <Loader {...props} />
      </div>
      <br/>
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<typeof Loader> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['show']
    }
  },
  argTypes: {
    ...themesToControls,
    type: {
      options: ['solid', 'dotted'],
      control: 'inline-radio'
    },
    fill: {
      control: 'color'
    }
  }
}

export default meta

export const LoaderStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    transparent: false,
    message: 'Loading...',
    localPosition: false,
    customStyles: {
      container: '',
      svg: ''
    }
  }
}

LoaderStoryTemplate.storyName = 'Loader'
