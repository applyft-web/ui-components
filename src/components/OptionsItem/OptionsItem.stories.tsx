import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OptionsItem, type OptionsItemProps } from './OptionsItem'
import { themesToControls } from '../../stories'
import { getTheme, GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

const Wrapper = (props: OptionsItemProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <OptionsItem {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  )
}

const meta: Meta<typeof OptionsItem> = {
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
    theme: getTheme(),
    isArabic: false,
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
