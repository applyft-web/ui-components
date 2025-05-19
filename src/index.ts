export * from './components'
export * from './core'
export { getCssSize, getTextAlign } from './utils'

import 'styled-components';
import { type Theme } from './core';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
