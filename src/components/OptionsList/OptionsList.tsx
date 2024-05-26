import React from 'react';
import styled from 'styled-components';
import { reactChildrenMapping } from '../../utils';

interface StyledOptionsListProps {
  readonly $customStyles?: string,
}

const StyledOptionsList = styled.div<StyledOptionsListProps>`
  display: flex;
  flex-direction: column;
  overflow: auto;

  ${({ $customStyles }) => $customStyles};
`;

interface OptionsListProps {
  children?: React.ReactNode | string;
  gap?: number;
  customStyles?: string,
  theme?: object,
}

export const OptionsList = ({
  children,
  gap = 12,
  customStyles,
  ...rest
}: OptionsListProps) => (
  <StyledOptionsList
    className={'scrollable'}
    $customStyles={customStyles}
    {...rest}
  >
    {reactChildrenMapping(children, {
      theme: rest?.theme,
      mt: gap,
    })}
  </StyledOptionsList>
);
