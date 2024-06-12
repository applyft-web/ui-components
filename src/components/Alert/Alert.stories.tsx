import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, type AlertProps } from './Alert';
import { themesToControls } from '../../stories';
import { getTheme, GlobalThemeProvider } from '../../core';
import { MainLayout } from '../Layouts';

const Wrapper = (props: AlertProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <Alert {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  );
}

const meta: Meta<typeof Alert> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['show', 'clearError'],
    },
  },
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const AlertStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    show: true,
    message: 'This is an alert message',
    isArabic: false,
  },
};

AlertStoryTemplate.storyName = 'Alert';
