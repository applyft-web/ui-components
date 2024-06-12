import React from 'react';
import { ContinueButton, type ContinueButtonProps, type CustomStylesWithStatesProps } from '../ContinueButton';
import { AppStoreIcon, GooglePlayIcon } from '../../Icons';
import { mergeStyleObjects } from '../../../utils';

const marketsImages: {[key: string]: React.JSX.Element} = {
  google: <GooglePlayIcon />,
  apple: <AppStoreIcon />,
};

const typeStyles: CustomStylesWithStatesProps = {
  default: `
    width: 182px;
    background-color: #000;
    padding: 0;
  `,
  hover: 'background-color: #000;',
};

export interface MarketsButtonProps extends ContinueButtonProps {
  marketName: 'apple' | 'google';
}

export const MarketsButton = ({
  marketName,
  onClick,
  customStyles,
  ...rest
}: MarketsButtonProps) => {
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

  return(
    <ContinueButton
      onClick={onClick}
      customId={`${marketName}MarketButton`}
      staticPosition={true}
      customStyles={mergeStyleObjects(typeStyles, styles)}
      {...rest}
    >
      {marketsImages[marketName]}
    </ContinueButton>
  );
};
