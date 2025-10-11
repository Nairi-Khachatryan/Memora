import { Card, Switch } from 'antd';
import type React from 'react';

export const NotificationTab: React.FC = () => {
  return (
    <>
      <Card style={{ borderRadius: 0 }}>
        <p>Enable email notifications:</p>
        <Switch defaultChecked />
        <p style={{ marginTop: 16 }}>Enable push notifications:</p>
        <Switch />
      </Card>
    </>
  );
};
