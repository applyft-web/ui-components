import React from 'react';
import { ContinueButton, type ContinueButtonProps, type ButtonCustomStylesWithStatesProps } from '../ContinueButton';
import { AppStoreIcon, GooglePlayIcon } from '../../Icons';
import { mergeStyleObjects, getFormattedStyles } from '../../../utils';

const marketsImages: {[key: string]: React.JSX.Element} = {
  google: <GooglePlayIcon />,
  apple: <AppStoreIcon />,
};

const typeStyles: ButtonCustomStylesWithStatesProps = {
  default: 'width:182px;background-color:#000;padding:0;border-radius:12px;',
  hover: 'background-color:#000;',
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
  const styles: ButtonCustomStylesWithStatesProps = getFormattedStyles(customStyles, 'default');

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
