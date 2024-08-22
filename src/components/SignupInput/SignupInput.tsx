import React, { useState, useEffect, useMemo } from 'react';
import * as S from './styled';

export interface SignupInputProps {
  value: string;
  placeholder: string;
  isValid: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  submitEmail: () => void;
  isArabic?: boolean;
  customStyles?: string;
  autoFocus?: boolean;
  [propName: string]: any;
}

export const SignupInput = ({
  value,
  placeholder,
  isValid,
  setValue,
  submitEmail,
  isArabic = false,
  customStyles = '',
  autoFocus = true,
  ...rest
}: SignupInputProps) => {
  const theme = rest?.theme;
  const [selected, setSelected] = useState<null | string>(null);
  const [error, setError] = useState(false);
  const DOMAINS = useMemo(() => ['gmail.com', 'yahoo.com', 'hotmail.com'], []);
  const DomainsList = () => {
    const onAddDomainClick = (domain: string) => {
      if (!value) return;
      setValue((prevState) => (prevState.split('@')[0] += domain));
      setSelected(domain);
      setError(isValid);
    };

    const renderDomainItem = (d: string, index: number) => (
      <S.DomainBtn
        onClick={() => onAddDomainClick('@' + d)}
        id={'domain-button-'+(index+1)}
        tabIndex={index}
        key={d}
        theme={theme}
      >
        @{d}
      </S.DomainBtn>
    );

    const list = DOMAINS.filter((d) => (value && selected) ? d === selected : true);

    return (
      <S.BtnContainer $isArabic={isArabic}>
        {list.map(renderDomainItem)}
      </S.BtnContainer>
    );
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError(false);
  };
  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.relatedTarget?.id?.includes('domain')) {
      setError(!!value && !isValid);
    }
  };
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isValid) {
      e.preventDefault();
      submitEmail();
    }
  };

  useEffect(() => {
    if (isValid) {
      const currentDomain = value.split('@')[1];
      setSelected(DOMAINS.indexOf(currentDomain) !== -1 ? currentDomain : null)
    }
  }, [value, DOMAINS, isValid]);

  return (
    <>
      <S.InputWrapper
        $isArabic={isArabic}
        $showPlaceholder={!value}
        data-placeholder={placeholder}
      >
        <S.Input
          type="email"
          autoComplete="email"
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onKeyPress={onKeyPressHandler}
          id={'sign-up-input'}
          $error={error}
          $isArabic={isArabic}
          $customStyles={customStyles}
          theme={theme}
          autoFocus={autoFocus}
        />
      </S.InputWrapper>
      <DomainsList />
    </>
  )
};
