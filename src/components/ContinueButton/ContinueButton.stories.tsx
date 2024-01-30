import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContinueButton } from './ContinueButton';

const meta: Meta<typeof ContinueButton> = {
  component: ContinueButton,
  parameters: {
    controls: {
      exclude: ['customId', 'onClick']
    },
  },
};

export default meta;

type ContinueButtonStoryTemplate = StoryObj<typeof ContinueButton>;

export const Primary: ContinueButtonStoryTemplate = {
  args: {
    children: 'Test!',
    onClick: () => console.log('test'),
  },
};
