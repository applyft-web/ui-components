import styled, { keyframes, css } from 'styled-components';

export const spinning = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

interface StyledSpinnerProps {
  $transparent: boolean;
  $localPosition: boolean;
  $customStyles?: string;
}

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  ${({ $transparent }) => !$transparent && 'background-color: rgba(0,0,0,.3)'};
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  z-index: 1000;
  
  ${({ $localPosition }) => $localPosition && css`
    position: absolute;
    background-color: transparent;
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    padding: 8px;
  `};
  
  ${({ $customStyles }) => $customStyles};
`;

export const StyledSVG = styled.svg<{ $fill?: string }>`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  animation: ${spinning} 1.5s linear infinite;
    
  circle, path {
    fill: ${({ theme, $fill }) => $fill || theme?.colors?.primary};
  }
`;

export const Message = styled.span`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  white-space: break-spaces;
  margin-top: 32px;
`;
