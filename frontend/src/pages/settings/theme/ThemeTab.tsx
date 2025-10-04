import type { ThemeContextType } from '../../../context/theme/themeContext';
import { Card, Switch } from 'antd';
import React from 'react';

export const ThemeTab: React.FC<ThemeContextType> = ({
  theme,
  handleChangeTheme,
}) => {
  return (
    <>
      <Card style={{ borderRadius: 0 }}>
        <p>Mode:</p>
        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          checked={theme === 'dark'}
          onChange={handleChangeTheme}
        />
      </Card>
    </>
  );
};
