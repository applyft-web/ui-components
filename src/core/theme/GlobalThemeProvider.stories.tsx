import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContinueButton, OptionsItem } from '../../components';
import { GlobalThemeProvider } from '../../core';
import { themes } from './theme';
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

const Test = (props: any) => (
  <TestWrapper>
    <OptionsItem
      onClick={null}
      customStyles={'margin-bottom: 20px'}
      // img={'https://quiz.geodzilla.info/assets/track_target/partner.png'}
      img={'other'}
      multiChoice
      isActive
      {...props}
    />
    <ContinueButton onClick={null} />
  </TestWrapper>
);

const meta: Meta<typeof GlobalThemeProvider> = {
  title: 'core/GlobalThemeProvider',
  component: GlobalThemeProvider,
  argTypes: {
    projectName: {
      options: Object.keys(themes),
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: {
      exclude: ['children']
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
