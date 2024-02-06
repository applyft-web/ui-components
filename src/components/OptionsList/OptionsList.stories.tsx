import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionsItem } from '../OptionsItem';
import { OptionsList } from './OptionsList';
import { themesToControls } from '../../stories';
import { themes } from '../../core/theme';
import styled from "styled-components";

const TestWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  position: relative;
  
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.colorPrimary};
    opacity: .3;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Test = (props: any) => (
  <>
    <OptionsItem
      onClick={null}
      img={'https://quiz.geodzilla.info/assets/track_target/partner.png'}
      multiChoice
      isActive
      {...props}
    />
    <OptionsItem
      onClick={null}
      mt={'12px'}
      img={'https://quiz.geodzilla.info/assets/track_target/partner.png'}
      multiChoice
      isActive
      {...props}
    />
    <OptionsItem
      onClick={null}
      mt={'12px'}
      img={'other'}
      multiChoice
      isActive
      {...props}
    />
  </>
);

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
    children: <Test />,
    theme: themes['Geozilla'],
  },
};

OptionsItemStoryTemplate.storyName = 'OptionsList';
