import React, { type ReactElement } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { type PlansListProps, PlansList } from './PlansList'
import { themesToControls } from '../../stories'
import { getTheme, GlobalThemeProvider } from '../../core'
import { MainLayout } from '../Layouts'

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
    label: 'Most popular'
  },
  {
    id: '1-month',
    duration: '1 month very long title',
    price: '0.36',
    oldPrice: '0.50',
    period: 'per day',
    fullPrice: '10.99',
    oldFullPrice: '14.99',
    currencySign: '$',
    coupon: 'discount_4_usd_off_onetime',
    label: 'Most popular'
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
    coupon: 'discount_10_usd_off_onetime'
  }
]

const Wrapper = (props: PlansListProps): ReactElement => (
  <GlobalThemeProvider projectTheme={props.theme}>
    <MainLayout>
      <PlansList {...props} />
    </MainLayout>
  </GlobalThemeProvider>
)

const meta: Meta<typeof PlansList> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['plans', 'onPlanClick']
    }
  },
  argTypes: {
    ...themesToControls,
    mt: {
      control: 'number'
    },
    mb: {
      control: 'number'
    },
    gap: {
      control: 'number'
    }
  }
}

export default meta

export const PlansListStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    activePlan: '1-month',
    plans,
    isRtl: false,
    gap: 8,
    mt: 0,
    mb: 0,
    customStyles: {
      container: '',
      item: {
        default: '',
        active: 'box-shadow: 0 6px 24px rgba(24,25,37,.1);'
      },
      label: '',
      check: '',
      title: '',
      fullPrice: '',
      oldPrice: '',
      price: ''
    }
  }
}

PlansListStoryTemplate.storyName = 'PlansList'
