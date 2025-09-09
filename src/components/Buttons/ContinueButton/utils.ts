export const extractPositioningRules = (cssString: string): string => {
  const positioningRules = cssString.match(/(position|top|right|bottom|left|z-index)\s*:\s*[^;]+;?/g)
  return positioningRules ? positioningRules.join(' ') : ''
}

export const extractPositioningRulesFromObject = (style: Record<string, any>): Record<string, any> => {
  if (!style) return {}

  const positioningProperties = ['position', 'top', 'right', 'bottom', 'left', 'zIndex']
  const extractedStyles: Record<string, any> = {}

  for (const property in style) {
    if (positioningProperties.includes(property)) {
      extractedStyles[property] = style[property]
    }
  }

  return extractedStyles
}
