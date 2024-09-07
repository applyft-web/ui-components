import React from 'react';
import { useTheme } from 'styled-components';
import { CheckIcon } from '../Icons';
import { getFormattedStyles } from '../../utils';
import * as S from './styled';

interface CustomStylesProps {
  readonly container?: string;
  readonly item?: S.CustomStylesWithStatesProps | string;
  readonly label?: string;
  readonly title?: string;
  readonly fullPrice?: string;
  readonly oldPrice?: string;
  readonly price?: string;
}

export interface PlanProps {
  readonly id: string;
  readonly duration: string;
  readonly price: string;
  readonly period: string;
  readonly currencySign: string;
  readonly oldPrice?: string;
  readonly fullPrice?: string;
  readonly oldFullPrice?: string;
  readonly coupon?: string;
  readonly label?: string;
}

export interface PlansListProps {
  activePlan: string;
  plans: PlanProps[];
  onPlanClick: (plan: PlanProps) => void;
  isArabic?: boolean;
  gap?: string | number;
  mt?: string | number;
  mb?: string | number;
  customStyles?: CustomStylesProps | string;
  [propName: string]: any;
}

export const PlansList = ({
  activePlan,
  plans,
  onPlanClick,
  isArabic,
  gap,
  mt,
  mb,
  customStyles,
  ...rest
}: PlansListProps) => {
  const theme = rest?.theme;
  const currentTheme = useTheme();
  const styles: CustomStylesProps = getFormattedStyles(customStyles, 'container');
  const renderPlans = (planInfo: PlanProps, index: number) => {
    const {
      id,
      duration,
      price,
      period,
      oldPrice,
      fullPrice,
      oldFullPrice,
      currencySign = '$',
      label,
    } = planInfo;
    const isActive = id === activePlan;
    const splitPrice = (str: string = '0.00'): string[] => (
      str.split('.')
    );
    const priceWithCurrency = (price: string = '0'): string => (
      `${currencySign}${price}`
    );

    return (
      <S.PlanLi
        $isActive={isActive}
        $isArabic={isArabic}
        $withLabel={!!label}
        $gap={gap}
        data-label={label}
        onClick={() => onPlanClick(planInfo)}
        id={'plan-button-' + (index + 1)}
        key={index}
        $customStyles={styles?.item}
        $labelCustomStyles={styles?.label}
      >
        <S.StyledPeriod $isArabic={isArabic}>
          <S.PlanCheck $isActive={isActive} $isArabic={isArabic}>
            <CheckIcon customStyles={{path: `fill: ${currentTheme?.colors?.planItemCheckBg};`}} />
          </S.PlanCheck>
          <S.PlanTitle $isActive={isActive}>
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
    );
  };

  return (
    <S.PlansBlock
      $mt={mt}
      $mb={mb}
      theme={theme}
      $customStyles={styles?.container}
    >
      {plans.map(renderPlans)}
    </S.PlansBlock>
  );
};
