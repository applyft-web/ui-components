import React from 'react';
import { ContinueButton, type ContinueButtonProps } from '../../index';
import { AppStoreIcon, GooglePlayIcon } from '../../Icons';

const marketsImages: {[key: string]: React.JSX.Element} = {
  google: <GooglePlayIcon />,
  apple: <AppStoreIcon />,
};

const styles: string = `
  width: 182px;
  background-color: #000;
  padding: 0;
  
  @media screen and (hover: hover) {
    &:hover {
      background-color: #000;
    }
  }
`;

interface MarketsButtonProps extends ContinueButtonProps {
  marketName: 'apple' | 'google';
}

export const MarketsButton = ({
  marketName,
  onClick,
  customStyles,
  ...rest
}: MarketsButtonProps) => (
  <ContinueButton
    onClick={onClick}
    customId={`${marketName}MarketButton`}
    staticPosition={true}
    customStyles={styles.concat(customStyles)}
    {...rest}
  >
    {marketsImages[marketName]}
  </ContinueButton>
);
