import { Card, Tag, Typography, Button, Space, Avatar } from 'antd';
import { useLocation } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import s from './Avatar.module.scss';
import React from 'react';

const { Text } = Typography;

export const AvatarDetailInfo: React.FC = () => {
  const location = useLocation();
  const avatar = location.state.foundAvatar;

  return (
    <div className={s.wrapper}>
      <Card
        title={
          <div className={s.header}>
            <Avatar size={64} icon={<UserOutlined />} />
            <div className={s.name}>
              <Text strong>{`${avatar.name} ${avatar.surname}`}</Text>
              {avatar.role && (
                <Tag color="blue" className={s.tag}>
                  {avatar.role}
                </Tag>
              )}
            </div>
          </div>
        }
        className={s.card}
      >
        <div className={s.info}>
          {avatar.email && (
            <Text>
              <strong>Email:</strong> {avatar.email}
            </Text>
          )}
          {avatar.phone && (
            <Text>
              <strong>Phone:</strong> {avatar.phone}
            </Text>
          )}
        </div>

        <Space className={s.buttons}>
          <Button>Back</Button>
          <Button type="primary">Update</Button>
          <Button danger>Delete</Button>
        </Space>
      </Card>
    </div>
  );
};
