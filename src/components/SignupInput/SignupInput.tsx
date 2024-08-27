import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getFormattedStyles } from '../../utils';
import * as S from './styled';

interface ButtonsCustomStylesProps {
  readonly wrapper?: string;
  readonly button?: string;
}

interface CustomStylesProps {
  readonly wrapper?: string;
  readonly label?: string;
  readonly placeholder?: string;
  readonly input?: string;
  readonly error?: string;
  readonly buttons?: ButtonsCustomStylesProps | string;
}

export interface SignupInputProps {
  value: string;
  placeholder: string;
  isValid: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  submitEmail: () => void;
  isArabic?: boolean;
  customStyles?: CustomStylesProps | string;
  autoFocus?: boolean;
  customId?: string;
  withDomainButtons?: boolean;
  withWrapper?: boolean;
  withError?: boolean;
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
  customId = 'sign-up-input',
  withDomainButtons = true,
  withWrapper = false,
  withError = false,
  ...rest
}: SignupInputProps) => {
  const { t } = useTranslation();
  const theme = rest?.theme;
  const [selected, setSelected] = useState<null | string>(null);
  const [error, setError] = useState(false);
  const DOMAINS = useMemo(() => ['gmail.com', 'yahoo.com', 'hotmail.com'], []);
  const DomainsList = ({ customStyles }: { customStyles?: ButtonsCustomStylesProps | string }) => {
    if (!withDomainButtons) return null;

    const buttonsStyles: ButtonsCustomStylesProps = getFormattedStyles(customStyles, 'wrapper');
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
        $customStyles={buttonsStyles?.button}
      >
        @{d}
      </S.DomainBtn>
    );

    const list = DOMAINS.filter((d) => (value && selected) ? d === selected : true);

    return (
      <S.BtnContainer $isArabic={isArabic} $customStyles={buttonsStyles?.wrapper}>
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
  const styles: CustomStylesProps = getFormattedStyles(customStyles, 'input');

  useEffect(() => {
    if (isValid) {
      const currentDomain = value.split('@')[1];
      setSelected(DOMAINS.indexOf(currentDomain) !== -1 ? currentDomain : null)
    }
  }, [value, DOMAINS, isValid]);

  const content = (
    <>
      <S.InputWrapper
        $isArabic={isArabic}
        $showPlaceholder={!value}
        data-placeholder={placeholder}
        $error={error}
        $customStyles={styles?.label}
        $placeholderStyles={styles?.placeholder}
      >
        <S.Input
          type="email"
          autoComplete="email"
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          onKeyPress={onKeyPressHandler}
          id={customId}
          $error={error}
          $isArabic={isArabic}
          $customStyles={styles?.input}
          theme={theme}
          autoFocus={autoFocus}
        />
        {withError && (
          <S.ErrorState $customStyles={styles?.error}>
            {error ? t(`email_error_message_${value.length > 0 ? 'invalid' : 'empty'}`) : ''}
          </S.ErrorState>
        )}
      </S.InputWrapper>
      <DomainsList customStyles={styles?.buttons} />
    </>
  );
  
  return withWrapper ? <S.Wrapper $customStyles={styles?.wrapper}>{content}</S.Wrapper> : content;
};
