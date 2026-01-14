import React, { type ReactElement, type HTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { CheckIcon } from '../Icons'
import { getFormattedStyles } from '../../utils'
import * as S from './styled'

interface CustomStylesProps {
  readonly container?: string
  readonly item?: S.CustomStylesWithStatesProps | string
  readonly label?: string
  readonly check?: string
  readonly title?: string
  readonly fullPrice?: string
  readonly oldPrice?: string
  readonly price?: string
}

export interface PlanProps {
  readonly id: string
  readonly duration: string
  readonly price: string
  readonly period: string
  readonly currencySign: string
  readonly oldPrice?: string
  readonly fullPrice?: string
  readonly oldFullPrice?: string
  readonly coupon?: string
  readonly label?: string
}

export interface PlansListProps extends HTMLAttributes<HTMLUListElement> {
  activePlan: string
  plans: PlanProps[]
  onPlanClick: (plan: PlanProps) => void
  /**
   * @since 1.5.4
   * @deprecated use `isRtl` instead. or use GlobalThemeProvider with `isRtl` flag
   */
  isArabic?: boolean
  isRtl?: boolean
  gap?: string | number
  mt?: string | number
  mb?: string | number
  customStyles?: CustomStylesProps | string
}

export const PlansList = ({
  activePlan,
  plans,
  onPlanClick,
  isArabic,
  isRtl = isArabic,
  gap,
  mt,
  mb,
  customStyles,
  ...rest
}: PlansListProps): ReactElement => {
  const currentTheme = useTheme()
  const styles: CustomStylesProps = getFormattedStyles(customStyles, 'container')
  const renderPlans = (planInfo: PlanProps, index: number): ReactElement => {
    const {
      id,
      duration,
      price,
      period,
      oldPrice,
      fullPrice,
      oldFullPrice,
      currencySign = '$',
      label
    } = planInfo
    const isActive = id === activePlan
    const splitPrice = (str: string = '0.00'): string[] => (
      str.split('.')
    )
    const priceWithCurrency = (price: string = '0'): string => (
      `${currencySign}${price}`
    )

    return (
      <S.PlanLi
        $isActive={isActive}
        $isRtl={isRtl}
        $withLabel={!!label}
        $gap={gap}
        data-label={label}
        onClick={() => { onPlanClick(planInfo) }}
        id={'plan-button-' + (index + 1)}
        key={index}
        $customStyles={styles?.item}
        $labelCustomStyles={styles?.label}
      >
        <S.StyledPeriod $isRtl={isRtl}>
          <S.PlanCheck
            $isActive={isActive}
            $isRtl={isRtl}
            $customStyles={styles?.check}
          >
            <CheckIcon customStyles={{
              path: `fill: ${currentTheme.colors.planItemCheckBg};`
            }} />
          </S.PlanCheck>
          <S.PlanTitle
            $isActive={isActive}
            $isRtl={isRtl}
          >
            <S.PlanTitleText $customStyles={styles?.title}>{duration}</S.PlanTitleText>
            <S.StyledFullPrice $customStyles={styles?.fullPrice}>
              <S.Strike>{priceWithCurrency(oldFullPrice)}</S.Strike> {priceWithCurrency(fullPrice)}
            </S.StyledFullPrice>
          </S.PlanTitle>
        </S.StyledPeriod>
        <S.StyledPriceWrapper>
          <S.OldPrice $customStyles={styles?.oldPrice}>{priceWithCurrency(oldPrice)}</S.OldPrice>
          <S.PriceWrapper
            $isActive={isActive}
            data-currency={currencySign}
            $customStyles={styles?.price}
          >
            <S.Price>{splitPrice(price)[0]}</S.Price>
            <S.SmallItemsWrapper>
              <span>{splitPrice(price)[1] ?? '00'}</span>
              <S.PerDay>{period}</S.PerDay>
            </S.SmallItemsWrapper>
          </S.PriceWrapper>
        </S.StyledPriceWrapper>
      </S.PlanLi>
    )
  }

  return (
    <S.PlansBlock
      $mt={mt}
      $mb={mb}
      $customStyles={styles?.container}
      {...rest}
    >
      {plans.map(renderPlans)}
    </S.PlansBlock>
  )
}
