import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaypalButton } from './PaypalButton';

const meta: Meta<typeof PaypalButton> = {
  component: PaypalButton,
  parameters: {
    controls: {
      include: ['transparentStyle', 'customStyles'],
    },
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
