import styled from 'styled-components';
import { getCssSize } from '../../utils';

interface ProgressWrapperProps {
  readonly $size: number;
  readonly $customStyles?: string;
  readonly $mt?: number | string;
  readonly $mb?: number | string;
}

export const ProgressWrapper = styled.div<ProgressWrapperProps>`
  ${({ $size }) => $size && `
    width: ${$size}px!important;
    height: ${$size}px!important;
  `};;
  box-shadow: inset 0 0 0 12px ${({ theme }) => theme?.colors?.circularProgressBg || '$fff'};
  border-radius: 50%;
  position: relative;
  ${({ $mt }) => $mt !== undefined && `margin-top: ${getCssSize($mt)}`};
  ${({ $mb }) => $mb !== undefined && `margin-bottom: ${getCssSize($mb)}`};
  ${({ $customStyles }) => $customStyles}
`;

export const StyledSvg = styled.svg<{ $size: number }>`
  stroke: ${({ theme }) => theme?.colors?.primary};
  stroke-linecap: round;
  ${({ $size }) => `
    width: ${$size}px;
    height: ${$size}px;
    top: calc(50% - ${$size/2}px);
    left: calc(50% - ${$size/2}px);
  `};
  position: absolute;
  transform: rotate(-90deg);
`;

export const StyledCircle = styled.circle<{ $small: boolean }>`
  transition: stroke-dashoffset 300ms linear 0ms;
  opacity: .38;

  &:first-child {
    opacity: 1;
    ${({ $small }) => $small ? 'transition-delay: 100ms' : ''};
  }
`;
