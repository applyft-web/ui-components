import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionsItem } from '../OptionsItem';
import { OptionsList } from './OptionsList';
import { themesToControls } from '../../stories';
import { themes } from '../../core/theme';

const test = () => {
  const options = new Array(3).fill(0);
  return options.map((el, i) => (
    <OptionsItem
      onClick={null}
      img={i === options.length - 1
        ? 'other'
        : 'https://quiz.geodzilla.info/assets/track_target/partner.png'
      }
      multiChoice
      isActive
      {...el}
    >
      {i===1 ? <div><div>Test 123</div><div>Test 321</div></div> : undefined}
    </OptionsItem>
  ))
};

const meta: Meta<typeof OptionsList> = {
  component: OptionsList,
  parameters: {
    controls: {
      exclude: ['children']
    },
  },
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const OptionsItemStoryTemplate: StoryObj<typeof meta> = {
  args: {
    children: test(),
    theme: themes['Geozilla'],
  },
};

OptionsItemStoryTemplate.storyName = 'OptionsList';
