import React from 'react';
import * as S from './styled';

interface CustomStylesProps {
  readonly container?: string;
  readonly bar?: string;
  readonly segment?: string;
  readonly skip?: string;
}

interface ProgressBarProps {
  isSegmented?: boolean;
  totalCount: number;
  currentRoute: number;
  skipButton?: string;
  customStyles?: CustomStylesProps | string;
  onContinueClick?: () => void;
  [propName: string]: any;
}

export const ProgressBar = ({
  isSegmented = false,
  totalCount,
  currentRoute,
  skipButton,
  customStyles,
  ...rest
}: ProgressBarProps) => {
  const theme = rest?.theme;
  const pages = new Array(totalCount).fill(0);
  let styles: CustomStylesProps;

  if (typeof(customStyles) === 'string') {
    styles = {
      container: customStyles,
      bar: '',
      segment: '',
      skip: '',
    };
  } else {
    styles = customStyles;
  }

  const renderProgress = (_: any, i: number) => (
    <S.StyledBarItem
      $isActive={i <= currentRoute}
      $isSegmented={isSegmented}
      theme={theme}
      $customStyles={styles?.segment}
      key={i}
    />
  );

  return (
    <S.StyledContainer theme={theme} $customStyles={styles?.container}>
      <S.StyledBar
        $isSegmented={isSegmented}
        theme={theme}
        $customStyles={styles?.bar}
      >
        {pages.map(renderProgress)}
      </S.StyledBar>
      {skipButton && (
        <S.StyledSkip
          onClick={rest?.onContinueClick}
          theme={theme}
          $customStyles={styles?.skip}
        >
          {skipButton}
        </S.StyledSkip>
      )}
    </S.StyledContainer>
  );
};
