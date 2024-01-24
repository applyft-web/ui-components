import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background-color: aquamarine;
`;

const Button = ({ children, customStyles }) => {
  return <StyledButton style={{customStyles}}>{children}</StyledButton>;
};

export default Button;
