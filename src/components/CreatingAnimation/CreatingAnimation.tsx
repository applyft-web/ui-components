import React, { useEffect, useState } from 'react';
import { CircularProgress } from '../CircularProgress';
import * as S from './styled';

export interface CreatingAnimationProps {
  duration?: number;
  doneCallback?: (a: boolean) => void;
  size?: number;
  mt?: string | number;
  mb?: string | number;
  customStyles?: string;
  [propName: string]: any;
}

export const CreatingAnimation = ({
  duration = 5,
  doneCallback,
  size,
  mt,
  mb,
  customStyles,
  ...rest
}: CreatingAnimationProps ) => {
  const theme = rest?.theme;
  const [progress, setProgress] = useState(0);
  const timeout = duration * 1000 / 100; // "* convert to milliseconds / 100 for 100%"

  useEffect(() => {
    if (doneCallback && progress === 100) {
      doneCallback(true)
    }
  }, [progress, doneCallback]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      )
    }, timeout);

    return () => clearInterval(timer);
  }, [timeout]);

  return (
    <CircularProgress
      progress={progress}
      size={size}
      customStyles={customStyles}
      theme={theme}
      mt={mt}
      mb={mb}
    >
      <S.Percentage theme={theme}>{progress}<span>%</span></S.Percentage>
    </CircularProgress>
  );
};
