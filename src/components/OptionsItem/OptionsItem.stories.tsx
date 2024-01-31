import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionsItem } from './OptionsItem';
import { themesToControls } from '../../stories/themesToControls';

const meta: Meta<typeof OptionsItem> = {
  component: OptionsItem,
  parameters: {
    controls: {
      exclude: ['customId', 'onClick']
    },
  },
  argTypes: {
    ...themesToControls,
    img: {
      control: 'text',
    },
  },
};

export default meta;

export const OptionsItemStoryTemplate: StoryObj<typeof meta> = {
  args: {
    children: 'Test!',
    onClick: () => console.log('test'),
    theme: 'Geozilla',
    isArabic: false,
    isActive: false,
    img: 'https://quiz.geodzilla.info/assets/track_target/partner.png',
  },
};

OptionsItemStoryTemplate.storyName = 'OptionsItem';