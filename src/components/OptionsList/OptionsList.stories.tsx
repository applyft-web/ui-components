import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionsItem } from '../OptionsItem';
import { OptionsList, type OptionsListProps } from './OptionsList';
import { themesToControls } from '../../stories';
import { getTheme, GlobalThemeProvider } from '../../core';
import { MainLayout } from '../Layouts';

const Wrapper = (props: OptionsListProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <OptionsList {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  );
};

const test = () => {
  const options = new Array(4).fill(0);
  return options.map((el, i) => (
    <OptionsItem
      onClick={null}
      img={i === options.length - 1
        ? ' '
        : 'https://quiz.geodzilla.info/assets/track_target/partner.png'
      }
      multiChoice
      isActive={i > 0}
      imgSize={i*40}
      {...el}
    >
      {i===1 ? <div><div>Test 123</div><div>Test 321</div></div> : undefined}
    </OptionsItem>
  ))
};

const meta: Meta<typeof OptionsList> = {
  component: Wrapper,
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
    theme: getTheme(),
    children: test(),
  },
};

OptionsItemStoryTemplate.storyName = 'OptionsList';
