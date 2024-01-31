import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaypalButton } from './PaypalButton';

const meta: Meta<typeof PaypalButton> = {
  component: PaypalButton,
  parameters: {
    controls: {
      exclude: ['onClick'],
    },
  },
  argTypes: {
    transparentStyle: {
      options: ['transparent (familo style)'],
      control: 'boolean',
    }
  },
};

export default meta;

export const PaypalButtonStoryTemplate: StoryObj<typeof meta> = {
  args: {
    onClick: () => console.log('test'),
    transparentStyle: false,
  },
};

PaypalButtonStoryTemplate.storyName = 'PaypalButton';
