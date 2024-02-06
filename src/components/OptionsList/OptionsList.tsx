import React from 'react';
import styled from 'styled-components';

interface StyledOptionsListProps {
  readonly $customStyles?: string,
}

const StyledOptionsList = styled.div<StyledOptionsListProps>`
  display: flex;
  flex-direction: column;
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
    {children && (
      <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {...child.props, theme: rest?.theme})
          }
        })}
      </>
    )}
  </StyledOptionsList>
);
