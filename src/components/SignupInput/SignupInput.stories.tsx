import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { type SignupInputProps, SignupInput } from './SignupInput'
import { type StoryWrapperType, themesToControls } from '../../stories'
import { GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

type WrapperType = StoryWrapperType<SignupInputProps>

const Wrapper = ({ theme, isRtl, ...rest }: WrapperType): ReactElement => (
  <GlobalThemeProvider projectTheme={theme} isRtl={isRtl} enableRTL={true}>
    <MainLayout>
      <SignupInput {...rest} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<WrapperType> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['setValue', 'submitEmail', 'value']
    }
  },
  argTypes: {
    ...themesToControls
  }
}

export default meta

export const SignupInputStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: '',
    setValue: value => { window.sessionStorage.setItem('email', value.toString()) },
    submitEmail: () => { alert('email submitted: ' + window.sessionStorage.getItem('email')) },
    // value: window.sessionStorage.getItem('email'),
    placeholder: 'Enter your email address here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRtl: false,
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
        button: ''
      }
    }
  }
}

SignupInputStoryTemplate.storyName = 'SignupInput'
