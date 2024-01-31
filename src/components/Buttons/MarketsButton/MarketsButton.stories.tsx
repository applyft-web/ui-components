import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MarketsButton } from './MarketsButton';

const meta: Meta<typeof MarketsButton> = {
  component: MarketsButton,
  parameters: {
    controls: {
      exclude: ['onClick'],
    },
  },
  argTypes: {
    marketName: {
      options: ['google', 'apple'],
      control: 'inline-radio',
    }
  },
};

export default meta;

export const MarketsButtonStoryTemplate: StoryObj<typeof meta> = {
  args: {
    onClick: () => console.log('test'),
    marketName: 'google',
  },
};

MarketsButtonStoryTemplate.storyName = 'MarketsButton';
