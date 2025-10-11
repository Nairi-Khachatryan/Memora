import { SettingOutlined, EditOutlined } from '@ant-design/icons';
import { ROUTES } from '../../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import { Card, Space, Button } from 'antd';
import type React from 'react';

export const SettingsContainer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{ borderRadius: 0, border: 'none', background: 'transparent' }}
      >
        <Space style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            icon={<SettingOutlined />}
            onClick={() => navigate(ROUTES.SETTINGS)}
          >
            Settings
          </Button>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => navigate(ROUTES.EDIT_PROFILE)}
          >
            Edit Profile
          </Button>
        </Space>
      </Card>
    </>
  );
};
