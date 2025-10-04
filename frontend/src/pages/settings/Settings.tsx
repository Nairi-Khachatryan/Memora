import { Card, Tabs, Switch, Form, Input, Button } from 'antd';
import { ThemeContext } from '../../context/theme/themeContext';
import { changePassword } from '../../api/changePassword';
import { Class } from '../../utils/createShortClassname';
import { useContext, useState } from 'react';
import s from './Settings.module.scss';
import type { TabsProps } from 'antd';
import { useAppSelector } from '../../app/hooks';

export const Settings = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  const USER_ID = useAppSelector((state) => state.user.id);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = async () => {
    if (confirmPassword !== newPassword) {
      setError('Passwords Didnt Match');
      return;
    }

    if (!USER_ID) {
      return setError('Invalid User ID');
    }

    const res = await changePassword(USER_ID, oldPassword, newPassword);

    console.log(res, 'res on component');
  };

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
              <Input.Password
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter Old Password"
              />
            </Form.Item>
            <Form.Item label="New Password">
              <Input.Password
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter New Password"
              />
            </Form.Item>
            <Form.Item label="Confirm Password">
              <Input.Password
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Button onClick={handleChangePassword} type="primary">
              Save
            </Button>
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
    <div className={Class(s, 'settingsContainer', theme)}>
      <Card title="Settings" style={{ borderRadius: 0 }}>
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
    </div>
  );
};
