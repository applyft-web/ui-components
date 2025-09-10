import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OptionsItem } from '../OptionsItem'
import { OptionsList, type OptionsListProps } from './OptionsList'
import { type StoryWrapperType, themesToControls } from '../../stories'
import { GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

type WrapperType = StoryWrapperType<OptionsListProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <OptionsList {...rest} />
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

const meta: Meta<WrapperType> = {
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
    theme: '',
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
