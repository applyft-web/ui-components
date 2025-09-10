import type { ReactNode } from 'react'
import {
  // type ThemesObject,
  // type ProjectName,
  // getTheme,
  themes
} from '../core/theme'

/*
const themesMapping = (): object => {
  return Object.keys(themes).reduce((acc, k): ThemesObject => {
    acc[k] = getTheme(k as ProjectName)
    return acc
  }, {})
}
*/

// spread to "argTypes"
export const themesToControls = {
  theme: {
    options: Object.keys(themes),
    // mapping: themesMapping(),
    control: 'inline-radio'
  }
}

export type StoryWrapperType<T = unknown> = T & { theme: string, isRtl: boolean, children: ReactNode }
