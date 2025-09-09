import React, {
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import { useTheme } from 'styled-components'
import { getFormattedStyles } from '../../utils'
import * as S from './styled'

// TODO draggable slider

export interface ReviewProps {
  name: string
  text: string
  img?: string
}

interface CustomStylesProps {
  readonly container?: string
  readonly item?: string
}

export interface ReviewsSliderProps extends HTMLAttributes<HTMLDivElement> {
  reviewsList: ReviewProps[] | ReactNode[]
  mt?: number | string
  mb?: number | string
  interval?: number
  sideMargin?: number
  staticMode?: boolean
  /**
   * @since 1.5.4
   * @deprecated use `isRtl` instead. or use GlobalThemeProvider with `isRtl` flag
   */
  isArabic?: boolean
  isRtl?: boolean
  customStyles?: CustomStylesProps | string
}

export const ReviewsSlider = ({
  reviewsList,
  mt,
  mb,
  interval = 2,
  sideMargin,
  staticMode = false,
  isArabic,
  isRtl = isArabic,
  customStyles,
  ...rest
}: ReviewsSliderProps): ReactElement => {
  const currentTheme = useTheme()
  const styles: CustomStylesProps = getFormattedStyles(customStyles, 'container')
  const sliderInterval = interval * 1000
  const sliderRef = useRef<HTMLDivElement>(null)
  const [stopAutoScroll, setStopAutoScroll] = useState(false)
  const [lastItemAdded, setLastItemAdded] = useState(false)
  const renderReviews = (r: ReviewProps | ReactNode, index: number): ReactElement => {
    const { name, text, img } = r as ReviewProps
    return (
      <S.ReviewsItem
        $staticMode={staticMode}
        $isRtl={isRtl}
        $customStyles={styles?.item}
        $sideMargin={sideMargin}
        key={index}
      >
        { (React.isValidElement(r) || typeof r === 'string')
          ? r
          : (
              <>
                <S.Reviewer
                  $image={img}
                  $isRtl={isRtl}
                >
                  {name || '\u00A0'}
                </S.Reviewer>
                <S.ReviewText>{text}</S.ReviewText>
              </>
            )
        }
      </S.ReviewsItem>
    )
  }
  const items = reviewsList.map(renderReviews)
  const touchMoveHandler = (e: React.TouchEvent): void => {
    /*
    if (staticMode) return;

    e.preventDefault();
    if (stopAutoScroll) {
      const slider = sliderRef.current;
      if (!slider) return;
      const { clientX } = e.changedTouches[0];
      const { width } = slider.getBoundingClientRect();
      const { left } = slider.getBoundingClientRect();
      const x = clientX - left;
      const percent = x / width * 100;
      slider.style.transform = `translateX(calc(-${percent}% - ${percent * APP_SIDE_PADDING}px))`;
    }
    */
  }
  const touchStartHandler = (e: React.TouchEvent): void => {
    if (staticMode) return
    setStopAutoScroll(true)
  }
  const touchEndHandler = (e: React.TouchEvent): void => {
    if (staticMode) return
    setStopAutoScroll(false)
  }

  useEffect(() => {
    if (staticMode || lastItemAdded) return
    const slider = sliderRef.current
    if (slider) {
      slider.appendChild(slider.children[0].cloneNode(true))
      setLastItemAdded(true)
    }
  }, [staticMode])

  useEffect(() => {
    if (staticMode) return
    const slider = sliderRef.current
    if (!slider) return

    let counter = 0

    const nextSlide = (): void => {
      if (stopAutoScroll) return
      counter++
      updateSlidePosition()
    }

    const sliderItem = slider.children[0] as HTMLElement
    const sliderItemWidth = sliderItem.offsetWidth
    const sliderItemMargin = sideMargin ?? parseInt(currentTheme?.sidePadding as string) ?? 16

    const updateSlidePosition = (): void => {
      slider.style.cssText = `
        transform: translateX(calc(-${counter * sliderItemWidth}px - ${counter * sliderItemMargin}px))
      `
      if (counter === reviewsList.length) {
        setTimeout(() => {
          counter = 0
          slider.style.cssText = 'transition: none; transform: translateX(0)'
        }, sliderInterval / 2)
      }
    }

    const interval = setInterval(nextSlide, sliderInterval)

    return () => {
      clearInterval(interval)
    }
  }, [staticMode, stopAutoScroll, reviewsList.length, sliderInterval])

  return (
    <S.ReviewsContainer
      $mt={mt}
      $mb={mb}
      $customStyles={styles?.container}
      $staticMode={staticMode}
      {...rest}
    >
      {staticMode
        ? items
        : (
            <S.ReviewsBlock
              ref={sliderRef}
              id={'slider'}
              onTouchStart={touchStartHandler}
              onTouchMove={touchMoveHandler}
              onTouchEnd={touchEndHandler}
            >
              {items}
            </S.ReviewsBlock>
          )
      }
    </S.ReviewsContainer>
  )
}
