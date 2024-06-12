import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress, type CircularProgressProps } from './CircularProgress';
import { themesToControls } from '../../stories';
import { getTheme, GlobalThemeProvider } from '../../core';
import { MainLayout } from '../Layouts';

const Wrapper = (props: CircularProgressProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <CircularProgress {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  );
};

const meta: Meta<typeof CircularProgress> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['mt', 'mb', 'customStyles'],
    },
  },
  argTypes: {
    ...themesToControls,
    progress: {
      control: 'number',
    },
  },
};

export default meta;

export const CircularProgressStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    progress: 35,
    customStyles: 'margin: 0 auto;',
  },
};

CircularProgressStoryTemplate.storyName = 'CircularProgress';
