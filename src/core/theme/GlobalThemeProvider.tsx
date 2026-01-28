import React, { type PropsWithChildren, type JSX, useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { getTheme, type Theme, type ProjectName } from './theme'
import { GlobalStyles } from './globalStyles'
import { useDynamicHeight } from '../../utils'

const GZ: ProjectName = 'geozilla'
const FL: ProjectName = 'family-locator'
const FO: ProjectName = 'familo'
const BB: ProjectName = 'brainbloom'

const aliases: Record<string, ProjectName> = {
  geozilla: GZ,
  gz: GZ,
  'family-locator': FL,
  fl: FL,
  familo: FO,
  fo: FO,
  brainbloom: BB,
  bb: BB
}

const fallback = aliases.gz

// TODO: replace `isArabic` with `isRtl` when all projects are updated + components refactoring
// TODO: remove `enableRTL` when all projects are updated

interface ProviderComponentProps {
  projectTheme: string | Theme
  customGlobalStyles?: string
  customTheme?: Record<string, string>
  /**
   * @since 1.5.4
   * @deprecated use `isRtl` instead of `isArabic` (still working for backward compatibility)
   */
  isArabic?: boolean
  isRtl?: boolean
  /**
   * @since 1.5.1
   * @experimental use in projects with `dir` attribute in `<html>` tag
   */
  enableRTL?: boolean
}

/**
 * Lets you wrap your app with theme context using {@link ThemeProvider}.
 *
 * @example
 *
 * ```tsx
 * import { GlobalThemeProvider } from '@applyft-web/ui-components';
 *
 * <GlobalThemeProvider
 *   projectTheme={'GZ'}
 *   customGlobalStyles={'body { background-color: red; }'}
 *   isRtl={true}
 *   enableRTL={true}
 * >
 *  <App />
 * </GlobalThemeProvider>
 * ```
 */
export const GlobalThemeProvider = ({
  children,
  projectTheme = fallback,
  customTheme = {},
  customGlobalStyles,
  isArabic = false,
  isRtl = isArabic,
  enableRTL = false
}: PropsWithChildren<ProviderComponentProps>): JSX.Element => {
  const currentTheme = typeof projectTheme === 'string'
    ? getTheme(aliases[projectTheme.toLowerCase()] ?? fallback)
    : projectTheme

  useDynamicHeight()

  useLayoutEffect(() => {
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
        custom: customTheme
      }}>
        <GlobalStyles $customStyles={customGlobalStyles} />
        {children}
      </ThemeProvider>
    </>
  )
}
