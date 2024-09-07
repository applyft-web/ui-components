import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Loader, type LoaderProps } from './Loader';
import { themesToControls } from '../../stories';
import { getTheme, GlobalThemeProvider } from '../../core';
import { MainLayout } from '../Layouts';

const Wrapper = (props: LoaderProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit. Nullam nec</p><br/>
        <br/>
        <p>Lorem ipsum dolor, consectetur adipiscing elit. Nullam nec</p><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit. Nullam nec</p><br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec</p><br/>
      </MainLayout>
      <Loader {...props} />
    </GlobalThemeProvider>
  );
};

const meta: Meta<typeof Loader> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['show'],
    },
  },
  argTypes: {
    ...themesToControls,
    type: {
      options: ['solid', 'dotted'],
      control: 'inline-radio',
    },
    fill: {
      control: 'color',
    },
  },
};

export default meta;

export const LoaderStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    transparent: false,
    message: 'Loading...',
  },
};

LoaderStoryTemplate.storyName = 'Loader';
