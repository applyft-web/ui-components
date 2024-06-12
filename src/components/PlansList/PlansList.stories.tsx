import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { type PlansListProps, PlansList } from './PlansList';
import { themesToControls } from '../../stories';
import { getTheme, GlobalThemeProvider } from '../../core';
import { MainLayout } from '../Layouts';

const plans = [
  {
    id: '1-week',
    duration: '1 week',
    price: '0.99',
    oldPrice: '1.99',
    period: 'per day',
    fullPrice: '6.99',
    oldFullPrice: '14.99',
    currencySign: '$',
  },
  {
    id: '1-month',
    duration: '1 month',
    price: '0.36',
    oldPrice: '0.50',
    period: 'per day',
    fullPrice: '10.99',
    oldFullPrice: '14.99',
    currencySign: '$',
    coupon: 'discount_4_usd_off_onetime',
    label: 'Most popular',
  },
  {
    id: '1-year',
    duration: '1 year',
    price: '0.08',
    oldPrice: '0.11',
    period: 'per day',
    fullPrice: '29.99',
    oldFullPrice: '39.99',
    currencySign: '$',
    coupon: 'discount_10_usd_off_onetime',
  },
];

const Wrapper = (props: PlansListProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <PlansList {...props} />
      </MainLayout>
    </GlobalThemeProvider>
  );
}

const meta: Meta<typeof PlansList> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['plans'],
    },
  },
  argTypes: {
    ...themesToControls,
    mt: {
      control: 'number',
    },
    mb: {
      control: 'number',
    },
  },
};

export default meta;

export const PlansListStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    isArabic: false,
    plans,
    activePlan: '1-month',
    onPlanClick: (plan) => console.log(plan),
  },
};

PlansListStoryTemplate.storyName = 'PlansList';
