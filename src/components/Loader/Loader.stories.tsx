import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Loader, type LoaderProps } from './Loader'
import { type StoryWrapperType, themesToControls } from '../../stories'
import { GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

type WrapperType = StoryWrapperType<LoaderProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. Nullam nec</div><br/>
      <br/>
      <div>Lorem ipsum dolor, consectetur adipiscing elit. Nullam nec</div><br/>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit. Nullam nec</div><br/>
      <div style={{ position: 'relative' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec consectetur adipiscing elit. Nullam nec consectetur adipiscing elit. Nullam nec
        <Loader {...rest} />
      </div>
      <br/>
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
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
    theme: '',
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
