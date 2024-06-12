import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaypalButton, type PaypalButtonProps } from './PaypalButton';
import { themesToControls } from '../../../stories';
import { getTheme, GlobalThemeProvider } from '../../../core';
import { MainLayout } from '../../Layouts';

const Wrapper = (props: PaypalButtonProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <PaypalButton {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  );
};

const meta: Meta<typeof PaypalButton> = {
  component: Wrapper,
  parameters: {
    controls: {
      include: ['theme', 'transparentStyle', 'customStyles'],
    },
  },
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const PaypalButtonStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    onClick: () => console.log('test'),
    transparentStyle: false,
  },
};

PaypalButtonStoryTemplate.storyName = 'PaypalButton';
