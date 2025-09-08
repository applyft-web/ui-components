import {
  type ReactNode,
  type ReactElement,
  useEffect,
  isValidElement,
  cloneElement,
  Children
} from 'react'

export const getTextAlign = (isRtl: boolean = false): string => {
  return isRtl ? 'right' : 'left'
}

export const reactChildrenMapping = (
  children: ReactNode,
  customProps: Record<string, unknown> = {}
): ReactNode | undefined => {
  if (children) {
    return (
      Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const element = child as ReactElement<Record<string, unknown>>
          const props: Record<string, unknown> = {
            key: index,
            ...customProps,
            ...element.props
          }
          return cloneElement(element, props)
        }
        return null
      })
    )
  }
  return undefined
}

export const useDynamicHeight = (): void => {
  useEffect(() => {
    const setDynamicVH = (): void => {
      const vh = (window.innerHeight * 0.01).toFixed(2)
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setTimeout(() => {
      setDynamicVH()
      window.addEventListener('resize', setDynamicVH, false)
    }, 100)

    return () => {
      window.removeEventListener('resize', setDynamicVH, false)
    }
  }, [])
}

export const getCssSize = (val: string | number = 0): string => {
  if (!isNaN(+val)) return `${val || 0}px`
  return val.toString()
}

type StyleObject = Record<string, string | number | undefined>

export const mergeStyleObjects = (
  obj1: StyleObject = {},
  obj2: StyleObject = {}
): StyleObject => {
  const mergedTheme = Object.keys(obj1).reduce<StyleObject>((acc, key) => {
    return { ...acc, [key]: [obj1[key], obj2[key]].join(';') }
  }, {})

  return { ...obj1, ...obj2, ...mergedTheme }
}

export const getFormattedStyles = <T extends Record<string, unknown>>(styles: T | string, defaultKey: string): T => {
  if (styles) {
    if (typeof styles === 'string') {
      return { [defaultKey]: styles } as T
    } else {
      return styles
    }
  } else {
    return { [defaultKey]: '' } as T
  }
}
