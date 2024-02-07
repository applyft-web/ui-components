import React from 'react';

export const getTextAlign = (isArabic: boolean = false): string => {
  return isArabic ? 'left' : 'right';
};

export const reactChildrenMapping = (children: React.ReactNode, customProps: object) => {
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
