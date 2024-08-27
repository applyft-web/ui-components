import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { type ReviewProps, type ReviewsSliderProps, ReviewsSlider } from './ReviewsSlider';
import { themesToControls } from '../../stories';
import { getTheme, GlobalThemeProvider, GradientScrollable } from '../../core';
import { MainLayout } from '../Layouts';

const reviewsList: ReviewProps[] = [
  {
    name: 'John Saymont',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.',
    img: 'https://quiz-stage.brainbloom.me/assets/images/reviewers/review_1.png',
  },
  {
    name: 'Erica Hilertoff',
    text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.',
    img: 'https://quiz-stage.brainbloom.me/assets/images/reviewers/review_2.png',
  },
  {
    name: 'Yan Frunder',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.',
    img: 'https://quiz-stage.brainbloom.me/assets/images/reviewers/review_3.png',
  },
  {
    name: 'Kiara Martínez',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.',
    img: 'https://quiz-stage.brainbloom.me/assets/images/reviewers/review_4.png',
  },
  {
    name: 'Wesley Everson',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.',
    img: 'https://quiz-stage.brainbloom.me/assets/images/reviewers/review_5.png',
  },
  {
    name: 'Shanon Burges',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.',
    img: 'https://quiz-stage.brainbloom.me/assets/images/reviewers/review_6.png',
  },
];

const reviewsList2 = [
  <>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </>,
  <>
    <span>4</span>
    <div>5</div>
    <span>6</span>
  </>,
  <img src={'https://placehold.co/100x100'} width={100} height={100} alt={'placeholder'}/>,
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nunc. Nulla facilisi.',
];

const Wrapper = (props: ReviewsSliderProps) => {
  return (
    <GlobalThemeProvider projectTheme={props.theme}>
      <MainLayout>
        <GradientScrollable>
          <ReviewsSlider {...props} reviewsList={reviewsList2} />
        </GradientScrollable>
        <div style={{fontSize:'12px',whiteSpace:'nowrap',color:'gray',marginTop:30}}>{'Edit ReviewsSlider.stories.tsx to see classic reviews'}</div>
      </MainLayout>
    </GlobalThemeProvider>
  );
}

const meta: Meta<typeof ReviewsSlider> = {
  component: Wrapper,
  parameters: {
    controls: {
      exclude: ['mt', 'mb'],
    },
  },
  argTypes: {
    ...themesToControls,
  },
};

export default meta;

export const ReviewsSliderStoryTemplate: StoryObj<typeof meta> = {
  args: {
    theme: getTheme(),
    interval: 3,
    staticMode: true,
  },
};

ReviewsSliderStoryTemplate.storyName = 'ReviewsSlider';
