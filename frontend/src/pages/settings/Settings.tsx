import { NotificationTab } from './notifications/NotificationTab';
import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
import { PasswordTab } from './password/PasswordTab';
import { useNavigate } from 'react-router-dom';
import { ThemeTab } from './theme/ThemeTab';
import { Account } from './account/Account';
import React, { useContext } from 'react';
import { Button, Card, Tabs } from 'antd';
import s from './Settings.module.scss';
import type { TabsProps } from 'antd';

export const Settings: React.FC = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

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
    {
      key: '4',
      label: 'Account',
      children: <Account />,
    },
  ];

  return (
    <div className={Class(s, 'settingsContainer', theme)}>
      <Card className={s.cardContainer} title="Settings">
        <Tabs className={s.tabs} defaultActiveKey="1" items={items} />
      </Card>
      <Button onClick={() => navigate(-1)} className={s.backButton}>
        Back
      </Button>
    </div>
  );
};
