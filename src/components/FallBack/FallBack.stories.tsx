import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FallBack } from './FallBack';
import { themesToControls } from '../../stories';
import { getTheme } from '../../core';

const meta: Meta<typeof FallBack> = {
  component: FallBack,
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const FallBackStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
  },
};

FallBackStoryTemplate.storyName = 'FallBack';
