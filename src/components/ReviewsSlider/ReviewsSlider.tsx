import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import * as S from './styled';

// TODO draggable slider

export interface ReviewProps {
  name: string;
  text: string;
  img?: string;
}

export interface ReviewsSliderProps {
  reviewsList: ReviewProps[];
  mt?: number | string;
  mb?: number | string;
  interval?: number;
  staticMode?: boolean;
  isArabic?: boolean;
  [propName: string]: any;
}

export const ReviewsSlider = ({
  reviewsList,
  mt,
  mb,
  interval = 2,
  staticMode = false,
  isArabic = false,
  ...rest
}: ReviewsSliderProps) => {
  const theme = rest?.theme;
  const currentTheme = useTheme();
  const sliderInterval = interval * 1000;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [stopAutoScroll, setStopAutoScroll] = useState(false);
  const [lastItemAdded, setLastItemAdded] = useState(false);
  const renderReviews = (r: ReviewProps, index: number) => {
    const { name, text, img } = r;
    return (
      <S.ReviewsItem
        $staticMode={staticMode}
        $isArabic={isArabic}
        theme={theme}
        key={index}
      >
        <S.Reviewer $image={img} theme={theme}>{name || '\u00A0'}</S.Reviewer>
        <S.ReviewText theme={theme}>{text}</S.ReviewText>
      </S.ReviewsItem>
    );
  };
  const touchMoveHandler = (e: React.TouchEvent) => {
    if (staticMode) return;
    /*e.preventDefault();
    if (stopAutoScroll) {
      const slider = sliderRef.current;
      if (!slider) return;
      const { clientX } = e.changedTouches[0];
      const { width } = slider.getBoundingClientRect();
      const { left } = slider.getBoundingClientRect();
      const x = clientX - left;
      const percent = x / width * 100;
      slider.style.transform = `translateX(calc(-${percent}% - ${percent * APP_SIDE_PADDING}px))`;
    }*/
  };
  const touchStartHandler = (e: React.TouchEvent) => {
    if (staticMode) return;
    setStopAutoScroll(true);
  };
  const touchEndHandler = (e: React.TouchEvent) => {
    if (staticMode) return;
    setStopAutoScroll(false);
  };

  useEffect(() => {
    if (staticMode || lastItemAdded) return;
    const slider = sliderRef.current;
    if (slider) {
      slider.appendChild(slider.children[0].cloneNode(true));
      setLastItemAdded(true);
    }
  }, [staticMode]);

  useEffect(() => {
    if (staticMode) return;
    const slider = sliderRef.current;
    if (!slider) return;

    let counter = 0;

    const nextSlide = () => {
      if (stopAutoScroll) return;
      counter++;
      updateSlidePosition();
    };

    const sliderItem = slider.children[0] as HTMLElement;
    const sliderItemWidth = sliderItem.offsetWidth;
    const sliderItemMargin = currentTheme?.sidePadding || 16;

    const updateSlidePosition = () => {
      slider.style.cssText = `
        transform: translateX(calc(-${counter * sliderItemWidth}px - ${counter * sliderItemMargin}px))
      `;
      if (counter === reviewsList.length) {
        setTimeout(() => {
          counter = 0;
          slider.style.cssText = 'transition: none; transform: translateX(0)';
        }, sliderInterval/2);
      }
    };

    const interval = setInterval(nextSlide, sliderInterval);

    return () => clearInterval(interval);
  }, [staticMode, stopAutoScroll, reviewsList.length, sliderInterval]);

  return (
    <S.ReviewsContainer $mt={mt} $mb={mb} theme={theme}>
      <S.ReviewsBlock
        ref={sliderRef}
        id={'slider'}
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandler}
        onTouchEnd={touchEndHandler}
        $staticMode={staticMode}
        theme={theme}
      >
        {reviewsList.map(renderReviews)}
      </S.ReviewsBlock>
    </S.ReviewsContainer>
  );
};
