import styled from 'styled-components';

export interface StyledOptionsListProps {
  readonly $customStyles?: string;
}

export const StyledOptionsList = styled.div<StyledOptionsListProps>`
  display: flex;
  flex-direction: column;
  overflow: auto;

  ${({ $customStyles }) => $customStyles};
`;
