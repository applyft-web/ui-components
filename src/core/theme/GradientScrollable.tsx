import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ScrollableContainerProps {
  $topGradient: boolean;
  $bottomGradient: boolean;
  $customStyles?: string;
}

const ScrollableContainer = styled.div<ScrollableContainerProps>`
  overflow-x: auto;
  overflow-y: auto;
  position: relative;
  
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  
  &:before, &:after {
    content: '';
    position: sticky;
    right: 0;
    left: 0;
    display: block;
    min-height: 20px;
    background-color: ${({theme}) => theme?.colors?.bodyBackground || '#fff'};
    box-shadow: 0 0 30px 30px ${({theme}) => theme?.colors?.bodyBackground || '#fff'};
    pointer-events: none;
    z-index: 10;
    transition: opacity 600ms ease;
  }
  
  &:before {
    opacity: ${({ $topGradient }) => $topGradient ? 1 : 0};
    top: 0;
  }
  
  &:after {
    opacity: ${({ $bottomGradient }) => $bottomGradient ? 1 : 0};
    bottom: 0;
    transform: rotate(180deg);
  }
  
  ${({ $customStyles }) => $customStyles};
`;

interface GradientScrollableProps {
  children?: any;
  [propName: string]: any;
}

export const GradientScrollable = ({ children, customStyles, customRef, ...rest }: GradientScrollableProps) => {
  const [topGradient, setTopGradient] = useState(false);
  const [bottomGradient, setBottomGradient] = useState(true);
  const ref = customRef || useRef<HTMLDivElement>(null);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLDivElement;
    setTopGradient(scrollTop > 1);
    setBottomGradient(scrollTop + clientHeight + 1 < scrollHeight); // +1 to prevent flickering or non-disappearing bottom gradient
  };

  useEffect(() => {
    if (ref.current) {
      const { scrollHeight, clientHeight } = ref.current;
      setBottomGradient(scrollHeight !== clientHeight);
    }
  }, []);

  return (
    <ScrollableContainer
      $topGradient={topGradient}
      $bottomGradient={bottomGradient}
      $customStyles={customStyles}
      onScroll={handleScroll}
      ref={ref}
      {...rest}
    >
      {children}
    </ScrollableContainer>
  );
};
