import { createContext } from 'react';

export type Theme = 'Light' | 'Dark';

export type ThemeContextType = {
  theme: Theme;
  handleChangeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'Light',
  handleChangeTheme: () => {},
});
