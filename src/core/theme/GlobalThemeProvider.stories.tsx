import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContinueButton } from '../../components';
import { GlobalThemeProvider, themes } from '../../core';
import styled from 'styled-components';

const TestWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  position: relative;
  
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.colorPrimary};
    opacity: .3;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Test = () => (
  <TestWrapper>
    <ContinueButton onClick={null} />
  </TestWrapper>
);

const meta: Meta<typeof GlobalThemeProvider> = {
  component: GlobalThemeProvider,
  argTypes: {
    projectName: {
      options: Object.keys(themes),
      control: 'inline-radio',
    },
  },
};

export default meta;

export const GlobalThemeProviderStoryTemplate: StoryObj<typeof meta> = {
  args: {
    projectName: 'Geozilla',
    children: <Test />
  },
};

GlobalThemeProviderStoryTemplate.storyName = 'GlobalThemeProvider';
