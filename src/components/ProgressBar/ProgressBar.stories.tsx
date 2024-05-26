import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { themesToControls } from '../../stories';
import { getTheme } from '../../core/theme';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  parameters: {
    controls: {
      include: ['theme', 'isSegmented', 'totalCount', 'currentRoute', 'skipButton'],
    },
  },
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const ProgressBarStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    isSegmented: true,
    totalCount: 15,
    currentRoute: 5,
    skipButton: 'skip',
  },
};

ProgressBarStoryTemplate.storyName = 'ProgressBar';
