import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContinueButton } from './ContinueButton';
import { themesToControls } from '../../../stories';
import { themes } from '../../../core/theme';

const meta: Meta<typeof ContinueButton> = {
  component: ContinueButton,
  parameters: {
    controls: {
      include: ['children', 'theme', 'isDisabled', 'customStyles', 'staticPosition'],
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
    theme: themes['Geozilla'],
    isDisabled: false,
    staticPosition: false,
  },
};

ContinueButtonStoryTemplate.storyName = 'ContinueButton';
