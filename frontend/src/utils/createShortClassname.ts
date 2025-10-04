import type { Theme } from '../context/theme/themeContext';

export const Class = (
  classes: Record<string, string>,
  className: string,
  theme: Theme
): string => {
  return classes[`${className}-${theme}`] || '';
};
