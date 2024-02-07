import React from 'react';
import styled from 'styled-components';
import { reactChildrenMapping } from '../../utils';

interface StyledOptionsListProps {
  readonly $customStyles?: string,
}

const StyledOptionsList = styled.div<StyledOptionsListProps>`
  display: flex;
  flex-direction: column;
  ${({ $customStyles }) => $customStyles};
`;

interface OptionsListProps {
  children?: React.ReactNode | string;
  customStyles?: string,
  theme?: object,
}

export const OptionsList = ({
  children,
  customStyles,
  ...rest
}: OptionsListProps) => (
  <StyledOptionsList
    $customStyles={customStyles}
    {...rest}
  >
    {reactChildrenMapping(children, {
      theme: rest?.theme,
      mt: 12,
    })}
  </StyledOptionsList>
);
