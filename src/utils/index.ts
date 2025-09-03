import {
  type ReactNode,
  useEffect,
  isValidElement,
  cloneElement,
  Children
} from 'react'

export const getTextAlign = (isRtl: boolean = false): string => {
  return isRtl ? 'right' : 'left'
}

export const reactChildrenMapping = (children: ReactNode, customProps: object = {}) => {
  if (children) {
    return (
      Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const props = {
            key: index,
            ...customProps,
            ...child.props
          }
          return cloneElement(child, props)
        }
      })
    )
  }
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

export const mergeStyleObjects = (obj1: Record<string, any> = {}, obj2: Record<string, any> = {}): object => {
  const mergedTheme = Object.keys(obj1).reduce((acc, key) => {
    return { ...acc, ...{ [key]: [obj1[key], obj2[key]].join(';') } }
  }, {})

  return { ...obj1, ...obj2, ...mergedTheme }
}

export const getFormattedStyles = <T extends Record<string, any>>(styles: T | string, defaultKey: string): T => {
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
