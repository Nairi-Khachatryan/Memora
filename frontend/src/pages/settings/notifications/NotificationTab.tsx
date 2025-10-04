import React from 'react';
import { Card, Switch } from 'antd';

export const NotificationTab = () => {
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
