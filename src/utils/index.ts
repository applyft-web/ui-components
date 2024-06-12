import React, { useEffect } from 'react';

export const getTextAlign = (isArabic: boolean = false): string => {
  return isArabic ? 'right' : 'left';
};

export const reactChildrenMapping = (children: React.ReactNode, customProps: object = {}) => {
  if (children) {
    return (
      React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const props = {
            key: index,
            ...customProps,
            ...child.props
          };
          return React.cloneElement(child, props);
        }
      })
    );
  }
};

export const useDynamicHeight = () => {
  useEffect(() => {
    const setDynamicVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setTimeout(() => {
      setDynamicVH();
      window.addEventListener('resize', setDynamicVH, false);
    },100);

    return () => window.removeEventListener('resize', setDynamicVH, false);
  }, []);
};

export const getCssSize = (val: string | number = 0): string => {
  if (!isNaN(+val)) return `${val || 0}px`
  return val.toString();
};

export const mergeStyleObjects = (obj1: any = {}, obj2: any = {}): object => {
  const mergedTheme = Object.keys(obj1).reduce((acc, key) => {
    return obj1[key] && obj2[key]
      ? { ...acc, ...{ [key]: [obj1[key], obj2[key]].join(';') } }
      : acc;
  }, {});

  return { ...obj1, ...obj2, ...mergedTheme };
};
