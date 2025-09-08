export const extractPositioningRules = (cssString: string): string => {
  const positioningRules = cssString.match(/(position|top|right|bottom|left|z-index)\s*:\s*[^;]+;?/g)
  return positioningRules ? positioningRules.join(' ') : ''
}

type StyleValue = string | number | undefined
type StyleObject = Record<string, StyleValue>

export const extractPositioningRulesFromObject = (style: StyleObject = {}): StyleObject => {
  if (!style) return {}

  const positioningProperties = ['position', 'top', 'right', 'bottom', 'left', 'zIndex'] as const
  const extractedStyles: StyleObject = {}

  for (const property in style) {
    if ((positioningProperties as readonly string[]).includes(property)) {
      extractedStyles[property] = style[property]
    }
  }

  return extractedStyles
}
