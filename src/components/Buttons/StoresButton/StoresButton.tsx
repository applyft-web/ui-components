import React from 'react';
import { ContinueButton } from '../../index';
import { PaypalIcon } from '../../Icons';

const styles: string = 'background-color:#F9C456;padding: 0 20px;';
const transparentStyles: string = 'background-color:rgba(0,157,225,.13);border:1px solid #009DE1;';

interface PaypalButtonProps {
  transparentStyle?: boolean;
  onClick: () => void;
  customStyles?: string;
}

export const PaypalButton = ({
  transparentStyle = false,
  onClick,
  customStyles,
  ...rest
}: PaypalButtonProps) => (
  <ContinueButton
    onClick={onClick}
    customId={'paypalButton'}
    customStyles={styles.concat(transparentStyle ? transparentStyles : '', customStyles)}
    {...rest}
  >
    <PaypalIcon />
  </ContinueButton>
);
