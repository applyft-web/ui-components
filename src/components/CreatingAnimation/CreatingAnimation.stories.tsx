import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { type CreatingAnimationProps, CreatingAnimation } from './CreatingAnimation';
import { themesToControls } from '../../stories';
import { getTheme, GlobalThemeProvider } from '../../core';
import {MainLayout} from "../Layouts";

const Wrapper = (props: CreatingAnimationProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <CreatingAnimation {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  );
}

const meta: Meta<typeof CreatingAnimation> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['doneCallback'],
    },
  },
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const CircularProgressStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    doneCallback: () => alert('Done!'),
    duration: 100,
    size: 174,
    mt: 0,
    mb: 0,
    customStyles: '',
  },
};

CircularProgressStoryTemplate.storyName = 'CreatingAnimation';
