export const getTextAlign = (isArabic: boolean = false): string => {
  return isArabic ? 'left' : 'right';
};
