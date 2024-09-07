import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { type SignupInputProps, SignupInput } from './SignupInput';
import { themesToControls } from '../../stories';
import { getTheme, GlobalThemeProvider } from '../../core';
import { MainLayout } from '../Layouts';

const Wrapper = (props: SignupInputProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <SignupInput {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  );
}

const meta: Meta<typeof SignupInput> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['setValue', 'submitEmail', 'value'],
    },
  },
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const SignupInputStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    setValue: value => window.sessionStorage.setItem('email', value.toString()),
    submitEmail: () => alert('email submitted: ' + window.sessionStorage.getItem('email')),
    // value: window.sessionStorage.getItem('email'),
    placeholder: 'Enter your email address here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isArabic: false,
    withDomainButtons: true,
    withWrapper: true,
    customStyles: {
      wrapper: '',
      label: '',
      placeholder: '',
      input: '',
      error: '',
      buttons: {
        wrapper: '',
        button: '',
      },
    },
  },
};

SignupInputStoryTemplate.storyName = 'SignupInput';
