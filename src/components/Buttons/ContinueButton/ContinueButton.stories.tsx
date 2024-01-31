import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContinueButton } from './ContinueButton';
import { themesToControls } from '../../../stories/themesToControls';

const meta: Meta<typeof ContinueButton> = {
  component: ContinueButton,
  parameters: {
    controls: {
      exclude: ['customId', 'onClick']
    },
  },
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const ContinueButtonStoryTemplate: StoryObj<typeof meta> = {
  args: {
    children: 'Test!',
    onClick: () => console.log('test'),
    theme: 'Geozilla',
    isDisabled: false
  },
};

ContinueButtonStoryTemplate.storyName = 'ContinueButton';
