import React from 'react';
import {
  ContinueButton,
  type ContinueButtonProps,
  type ButtonCustomStylesWithStatesProps,
} from '../ContinueButton';
import { PaypalIcon } from '../../Icons';
import { mergeStyleObjects, getFormattedStyles } from '../../../utils';

const typeStyles: ButtonCustomStylesWithStatesProps = {
  default: 'background-color:#F9C456;padding:0 20px;border-radius:12px;',
  hover: 'background-color:#F9C456;',
};
const transparentStyles: ButtonCustomStylesWithStatesProps = {
  default: 'background-color:rgba(0,157,225,.13);border:1px solid #009DE1;border-radius:12px;',
  hover: 'background-color:rgba(0,157,225,.13);',
};

export interface PaypalButtonProps extends ContinueButtonProps {
  transparentStyle?: boolean;
}

export const PaypalButton = ({
  transparentStyle = false,
  onClick,
  customStyles,
  ...rest
}: PaypalButtonProps) => {
  const localStyles = mergeStyleObjects(typeStyles, transparentStyle ? transparentStyles : {});
  const styles: ButtonCustomStylesWithStatesProps = getFormattedStyles(customStyles, 'default');

  return (
    <ContinueButton
      onClick={onClick}
      customId={'paypal-pay-button'}
      staticPosition={true}
      customStyles={mergeStyleObjects(localStyles, styles)}
      {...rest}
    >
      <PaypalIcon />
    </ContinueButton>
  );
};
