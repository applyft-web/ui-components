import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout, type MainLayoutProps } from './MainLayout';
import { themesToControls } from '../../../stories';
import { getTheme, GlobalThemeProvider } from '../../../core';
import styled from 'styled-components';
import { ProgressBar, ContinueButton } from '../../../components';

const ChildComponent = styled.div`
  flex-grow: 1;
  background-color: rgb(109 138 184);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LegendBlock = styled.div`
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
`;

const Wrapper = (props: MainLayoutProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout {...props}>
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
  );
}

const meta: Meta<typeof MainLayout> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['customStyles', 'children'],
    },
  },
  argTypes: {
    ...themesToControls,
    pt: {
      control: 'number',
    },
    pb: {
      control: 'number',
    },
  },
};

export default meta;

export const MainLayoutStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    customStyles: 'background-color: rgb(162 220 150); height: 100%;',
    pt: 52,
    pb: 88,
    adaptive: true,
  },
};

MainLayoutStoryTemplate.storyName = 'MainLayout';
