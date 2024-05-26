import React from 'react';
import { ContinueButton, type ContinueButtonProps } from '../../index';

interface PayButtonProps extends ContinueButtonProps {
  marketName: 'apple' | 'google';
}

export const PayButton = ({
  transparentStyle = false,
  onClick,
  marketName,
  customStyles,
  ...rest
}: PayButtonProps) => (
  <ContinueButton
    onClick={onClick}
    customId={`${marketName}PayButton`}
    {...rest}
  >
  </ContinueButton>
);
