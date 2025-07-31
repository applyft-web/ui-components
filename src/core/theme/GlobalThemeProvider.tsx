import React, { type ReactNode, type ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { getTheme, type Theme, type ProjectName } from './theme'
import { GlobalStyles, useDynamicHeight } from './globalStyles'

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

interface ProviderComponentProps {
  children?: ReactNode | string
  projectTheme: string | Theme
  customGlobalStyles?: string
  customTheme?: Record<string, string>
  isArabic?: boolean
  enableRTL?: boolean
}

export const GlobalThemeProvider = ({
  children,
  projectTheme = fallback,
  customTheme = {},
  customGlobalStyles,
  isArabic = false,
  enableRTL = false // temp
}: ProviderComponentProps): ReactElement => {
  const currentTheme = typeof projectTheme === 'string'
    ? getTheme(namesList[projectTheme.toLowerCase()] ?? fallback)
    : projectTheme

  useDynamicHeight()

  return (
    <>
      <ThemeProvider theme={{ ...currentTheme, isArabic, enableRTL, ...{ custom: customTheme } }}>
        <GlobalStyles $customStyles={customGlobalStyles} $isArabic={isArabic && enableRTL} />
        {children}
      </ThemeProvider>
    </>
  )
}
