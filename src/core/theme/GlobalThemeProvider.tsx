import React, { type ReactNode, type ReactElement, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { getTheme, type Theme, type ProjectName } from './theme'
import { GlobalStyles } from './globalStyles'
import { useDynamicHeight } from '../../utils'

const GZ = 'geozilla'
const FL = 'family-locator'
const FO = 'familo'
const BB = 'brainbloom'

const namesList: Record<string, ProjectName> = {
  geozilla: GZ,
  gz: GZ,
  'family-locator': FL,
  fl: FL,
  familo: FO,
  fo: FO,
  brainbloom: BB,
  bb: BB
}

const fallback = namesList.gz

// TODO: replace `isArabic` with `isRtl` when all projects are updated + components refactoring
// TODO: remove `enableRTL` when all projects are updated

interface ProviderComponentProps {
  children?: ReactNode | string
  projectTheme: string | Theme
  customGlobalStyles?: string
  customTheme?: Record<string, string>
  /**
   * @deprecated use `isRtl` instead of `isArabic` (still working for backward compatibility)
   */
  isArabic?: boolean
  isRtl?: boolean
  enableRTL?: boolean
}

/**
 * @param {enableRTL} - use in projects with `dir` attribute in `html` tag
 */
export const GlobalThemeProvider = ({
  children,
  projectTheme = fallback,
  customTheme = {},
  customGlobalStyles,
  isArabic = false,
  isRtl = isArabic,
  enableRTL = false
}: ProviderComponentProps): ReactElement => {
  const currentTheme = typeof projectTheme === 'string'
    ? getTheme(namesList[projectTheme.toLowerCase()] ?? fallback)
    : projectTheme

  useDynamicHeight()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('dir', isRtl && enableRTL ? 'rtl' : 'ltr')
      // document.documentElement.dir = isRtl && enableRTL ? 'rtl' : 'ltr';
    }
  }, [isRtl, enableRTL])

  return (
    <>
      <ThemeProvider theme={{
        ...currentTheme,
        isRtl,
        isArabic: isRtl,
        enableRTL,
        ...{ custom: customTheme }
      }}>
        <GlobalStyles $customStyles={customGlobalStyles} />
        {children}
      </ThemeProvider>
    </>
  )
}
