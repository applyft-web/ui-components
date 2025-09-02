import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OptionsItem } from '../OptionsItem'
import { OptionsList, type OptionsListProps } from './OptionsList'
import { themesToControls } from '../../stories'
import { getTheme, GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

const Wrapper = (props: OptionsListProps): ReactElement => (
  <GlobalThemeProvider projectTheme={props.theme}>
    <MainLayout>
      <OptionsList {...props} />
    </MainLayout>
  </GlobalThemeProvider>
)

const test = (): ReactElement[] => {
  const options = new Array(4).fill(0)
  return options.map((el, i) => (
    <OptionsItem
      onClick={null}
      img={i === options.length - 1
        ? ' '
        : 'https://placehold.co/100x100'
      }
      multiChoice
      isActive={i > 0}
      imgSize={i * 40}
      key={i}
      {...el}
    >
      {i === 1 ? <div><div>Test 123</div><div>Test 321</div></div> : undefined}
    </OptionsItem>
  ))
}

const meta: Meta<typeof OptionsList> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['children']
    }
  },
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const OptionsItemStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    children: test(),
    gap: 12,
    scrollable: true,
    customStyles: {
      wrapper: '',
      list: ''
    }
  }
}

OptionsItemStoryTemplate.storyName = 'OptionsList'
