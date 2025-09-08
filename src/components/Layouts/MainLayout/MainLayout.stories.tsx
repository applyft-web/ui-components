import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MainLayout, type MainLayoutProps } from './MainLayout'
import { type StoryWrapperType, themesToControls } from '../../../stories'
import { GlobalThemeProvider } from '../../../core'
import styled from 'styled-components'
import { ProgressBar, ContinueButton } from '../../../components'

const ChildComponent = styled('div')`
  flex-grow: 1;
  background-color: rgb(109 138 184);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LegendBlock = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  div {
    width: 20px;
    height: 20px;
    background-color: rgb(162 220 150);
    margin-right: 10px;
  }
`

type WrapperType = StoryWrapperType<MainLayoutProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout {...rest}>
      <ProgressBar totalCount={15} currentRoute={5} />
      <ChildComponent>
        <h1>Content</h1>
        <LegendBlock>
          <div /> &mdash; padding
        </LegendBlock>
      </ChildComponent>
      <ContinueButton onClick={() => null} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['customStyles', 'children']
    }
  },
  argTypes: {
    ...themesToControls,
    pt: {
      control: 'number'
    },
    pb: {
      control: 'number'
    }
  }
}

export default meta

export const MainLayoutStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: '',
    customStyles: 'background-color: rgb(162 220 150); height: 100%;',
    pt: 52,
    pb: 88,
    adaptive: true
  }
}

MainLayoutStoryTemplate.storyName = 'MainLayout'
