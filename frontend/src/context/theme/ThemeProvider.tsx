import React, { useState } from 'react';
import type { Theme } from './themeContext';
import { ThemeContext } from './themeContext';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('Light');

  const handleChangeTheme = () =>
    setTheme((prev) => (prev === 'Light' ? 'Dark' : 'Light'));

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
