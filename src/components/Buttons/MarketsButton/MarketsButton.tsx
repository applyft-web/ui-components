import React from 'react';
import { ContinueButton, AppStoreIcon, GooglePlayIcon } from '../../index';

const marketsImages: {[key: string]: React.JSX.Element} = {
  google: <GooglePlayIcon />,
  apple: <AppStoreIcon />,
};

const styles: string = 'width:182px;background-color:#000;padding:0;';

interface MarketsButtonProps {
  marketName: string;
  onClick: () => void;
  customStyles?: string;
}

export const MarketsButton = ({
  marketName,
  onClick,
  customStyles,
}: MarketsButtonProps) => (
  <ContinueButton
    onClick={onClick}
    customId={`${marketName}MarketButton`}
    customStyles={styles.concat(customStyles)}
  >
    {marketsImages[marketName]}
  </ContinueButton>
);
