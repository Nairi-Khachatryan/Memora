import { Button, Card, message, Popconfirm } from 'antd';
import type React from 'react';

export const Account: React.FC = () => {
  const handleDeleteAccount = () => message.success('Account Deleted');

  return (
    <Card>
      <Popconfirm
        title="Are you shure you wont to delete your Account"
        onConfirm={handleDeleteAccount}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary" danger>
          Delete My Account
        </Button>
      </Popconfirm>
    </Card>
  );
};
