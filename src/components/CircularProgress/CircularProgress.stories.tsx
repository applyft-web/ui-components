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
      exclude: ['children'],
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
    size: 174,
    progress: 35,
    mt: 0,
    mb: 0,
    customStyles: 'margin: 0 auto;',
  },
};

CircularProgressStoryTemplate.storyName = 'CircularProgress';
