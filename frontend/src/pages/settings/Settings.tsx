import { NotificationTab } from './notifications/NotificationTab';
import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
import { PasswordTab } from './password/PasswordTab';
import { ThemeTab } from './theme/ThemeTab';
import s from './Settings.module.scss';
import type { TabsProps } from 'antd';
import { useContext } from 'react';
import { Card, Tabs } from 'antd';

export const Settings = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Theme',
      children: (
        <ThemeTab theme={theme} handleChangeTheme={handleChangeTheme} />
      ),
    },
    {
      key: '2',
      label: 'Password',
      children: <PasswordTab />,
    },
    {
      key: '3',
      label: 'Notifications',
      children: <NotificationTab />,
    },
  ];

  return (
    <div className={Class(s, 'settingsContainer', theme)}>
      <Card title="Settings" style={{ borderRadius: 0 }}>
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
    </div>
  );
};
