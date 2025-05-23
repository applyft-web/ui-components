import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ContinueButton,
  MainLayout,
  OptionsItem,
  OptionsList,
  ProgressBar,
} from '../../components';
import { GlobalThemeProvider } from '../../core';
import { themes } from './theme';

const Test = () => {
  const options = new Array(5).fill(0);
  return (
    <MainLayout pt={56} pb={88}>
      <ProgressBar
        totalCount={15}
        currentRoute={5}
        isSegmented
        skipButton={'Text'}
      />
      <OptionsList>
        {
          options.map((el, i) => (
            <OptionsItem
              onClick={null}
              img={i === options.length - 1 || i === 1
                ? i === 1 ? ' ' : ''
                : 'https://placehold.co/100x100'
              }
              multiChoice
              isActive={i > 1}
              key={i}
              imgSize={i === 2 ? 40 : null}
              {...el}
            >
              {i === 2 ? <div><div>Test 123</div><div>Test 321</div></div> : undefined}
            </OptionsItem>
          ))
        }
      </OptionsList>
      <ContinueButton onClick={null} mt={16} />
    </MainLayout>
  );
};

const meta: Meta<typeof GlobalThemeProvider> = {
  title: 'core/GlobalThemeProvider',
  component: GlobalThemeProvider,
  argTypes: {
    projectTheme: {
      options: Object.keys(themes),
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: {
      exclude: ['children', 'customTheme']
    },
  },
};

export default meta;

const customTheme = {
  property1: '#F0EFEF',
  property2: '#FDC21C',
  property3: '#F0EFEF',
  property4: '350',
  property5: '744',
  property6: '1280',
  property7: '343',
  property8: '343',
};

export const GlobalThemeProviderStoryTemplate: StoryObj<typeof meta> = {
  args: {
    projectTheme: 'geozilla',
    // projectTheme: customTheme,
    isArabic: false,
    customTheme,
    children: <Test />,
  },
};

GlobalThemeProviderStoryTemplate.storyName = 'GlobalThemeProvider';
