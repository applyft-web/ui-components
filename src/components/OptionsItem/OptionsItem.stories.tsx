import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionsItem } from './OptionsItem';
import { themesToControls } from '../../stories';
import { getTheme } from '../../core/theme';

const meta: Meta<typeof OptionsItem> = {
  component: OptionsItem,
  parameters: {
    controls: {
      exclude: ['customId', 'onClick', 'mt', 'mb', 'customStyles']
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
    children: 'Test',
    onClick: () => console.log('test'),
    theme: getTheme(),
    isArabic: false,
    isActive: false,
    multiChoice: false,
    img: 'https://quiz.geodzilla.info/assets/track_target/partner.png',
  },
};

OptionsItemStoryTemplate.storyName = 'OptionsItem';
