import React, { type HTMLAttributes, type ReactElement } from 'react'
import styled from 'styled-components'
import { Loader } from '../Loader'

const FallBackWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  height: calc(var(--vh,1svh) * 100);
  background-color: ${({ theme }) => theme?.colors?.bodyBackground};
  position: fixed;
  top: 0;
  left: 0;
`

export const FallBack: React.FC<HTMLAttributes<HTMLDivElement>> = (): ReactElement => (
  <FallBackWrapper>
    <Loader show={true} transparent={true} />
  </FallBackWrapper>
)
