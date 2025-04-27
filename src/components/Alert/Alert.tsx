import React, { useEffect, useState } from 'react';
import * as S from './styled';

export interface AlertProps {
  show: boolean;
  message: string;
  clearError: () => void;
  isArabic?: boolean;
  customStyles?: string;
  [propName: string]: any;
}

export const Alert = ({
  show,
  message,
  clearError,
  isArabic,
  customStyles,
  ...rest
}: AlertProps) => {
  const theme = rest?.theme;
  const [clear, setClear] = useState(false);

  useEffect(() => {
    if (show && !clear) {
      var timer = setTimeout(clearError, 3000);
    }
    return () => {
      setClear(false);
      clearTimeout(timer);
    }
  }, [show, clearError, clear]);

  const onCloseClick = () => {
    setClear(true);
    clearError();
  };

  return (
    <S.StyledAlert
      $show={show}
      $isArabic={isArabic}
      $customStyles={customStyles}
      theme={theme}
      {...rest}
    >
      <p>{message}</p>
      {show && (
        <S.CloseAlert onClick={onCloseClick} $isArabic={isArabic} theme={theme}>×</S.CloseAlert>
      )}
    </S.StyledAlert>
  )
};
