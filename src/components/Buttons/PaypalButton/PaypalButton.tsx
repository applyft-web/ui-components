import React from 'react';
import { ContinueButton, type ContinueButtonProps, type CustomStylesWithStatesProps } from '../../index';
import { PaypalIcon } from '../../Icons';
import { mergeStyleObjects } from '../../../utils';

const typeStyles: CustomStylesWithStatesProps = {
  default: 'background-color:#F9C456;padding: 0 20px;',
  hover: 'background-color:#F9C456;',
};
const transparentStyles: CustomStylesWithStatesProps = {
  default: 'background-color:rgba(0,157,225,.13);border:1px solid #009DE1;',
  hover: 'background-color:rgba(0,157,225,.13);',
};

interface PaypalButtonProps extends ContinueButtonProps {
  transparentStyle?: boolean;
}

export const PaypalButton = ({
  transparentStyle = false,
  onClick,
  customStyles,
  ...rest
}: PaypalButtonProps) => {
  const localStyles = mergeStyleObjects(typeStyles, transparentStyle ? transparentStyles : {});
  let styles: CustomStylesWithStatesProps;
  if (typeof(customStyles) === 'string') {
    styles = {
      default: customStyles,
      hover: '',
      disabled: '',
    };
  } else {
    styles = customStyles;
  }

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
