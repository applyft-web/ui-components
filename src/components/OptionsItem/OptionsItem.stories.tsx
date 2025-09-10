import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OptionsItem, type OptionsItemProps } from './OptionsItem'
import { type StoryWrapperType, themesToControls } from '../../stories'
import { GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

type WrapperType = StoryWrapperType<OptionsItemProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <OptionsItem {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['customId', 'onClick']
    }
  },
  argTypes: {
    ...themesToControls,
    img: {
      control: 'text'
    }
  }
}

export default meta

export const OptionsItemStoryTemplate: StoryObj<typeof meta> = {
  args: {
    children: 'Test',
    onClick: () => {
      console.log('test')
    },
    theme: '',
    isRtl: false,
    isActive: false,
    multiChoice: false,
    img: 'https://placehold.co/100x100',
    imgSize: [80, 50],
    mt: 0,
    mb: 0,
    customStyles: {
      option: {
        default: '',
        disabled: '',
        hover: '',
        active: ''
      },
      img: '',
      check: '',
      checkIcon: {
        svg: '',
        path: ''
      }
    }
  }
}

OptionsItemStoryTemplate.storyName = 'OptionsItem'
