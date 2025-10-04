import { Card, Tabs, Switch, Form, Input, Button } from 'antd';
import { ThemeContext } from '../../context/theme/themeContext';
import s from './Settings.module.scss';
import type { TabsProps } from 'antd';
import { useContext } from 'react';

export const Settings = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Theme',
      children: (
        <Card style={{ borderRadius: 0 }}>
          <p>Mode:</p>
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            checked={theme === 'dark'}
            onChange={handleChangeTheme}
          />
        </Card>
      ),
    },
    {
      key: '2',
      label: 'Password',
      children: (
        <Card style={{ borderRadius: 0 }}>
          <Form layout="vertical" style={{ maxWidth: 400 }}>
            <Form.Item label="Old Password">
              <Input.Password placeholder="Enter Old Password" />
            </Form.Item>
            <Form.Item label="New Password">
              <Input.Password placeholder="Enter New Password" />
            </Form.Item>
            <Form.Item label="Confirm Password">
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
            <Button type="primary">Save</Button>
          </Form>
        </Card>
      ),
    },
    {
      key: '3',
      label: 'Notifications',
      children: (
        <Card style={{ borderRadius: 0 }}>
          <p>Enable email notifications:</p>
          <Switch defaultChecked />
          <p style={{ marginTop: 16 }}>Enable push notifications:</p>
          <Switch />
        </Card>
      ),
    },
  ];

  return (
    <div className={`${s[`settingsContainer-${theme}`]}`}>
      <Card title="Settings" style={{ borderRadius: 0 }}>
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
    </div>
  );
};
