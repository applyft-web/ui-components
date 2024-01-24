import React, { FC, HTMLAttributes } from 'react';
/*import styled from 'styled-components';

const StyledButton = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background-color: aquamarine;
`;*/

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <button {...props}>
    {children}
  </button>
)
