import { Card, Tag, Typography, Button, Space, Avatar } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import s from './Avatar.module.scss';
import React from 'react';
import { deleteAvatar } from '../../api/avatar/deleteAvatar';
import { useAppSelector } from '../../app/hooks';
import { useToast } from '../../hooks/useToast';

const { Text } = Typography;

export const AvatarDetailInfo: React.FC = () => {
  const location = useLocation();
  const avatar = location.state.foundAvatar;
  const navigate = useNavigate();
  const id = useAppSelector((state) => state.user.id);
  const { showToast } = useToast();

  const handleDeleteAvatar = async () => {
    const res = await deleteAvatar(id);

    if (!res.success) {
      return showToast({ type: 'error', message: res.message });
    }

    showToast({ type: 'success', message: res.message });
    navigate(-1);
  };

  const handleUpdateAvatar = () => {};

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
          <Button onClick={() => navigate(-1)}>Back</Button>
          <Button onClick={handleUpdateAvatar} type="primary">
            Update
          </Button>
          <Button onClick={handleDeleteAvatar} danger>
            Delete
          </Button>
        </Space>
      </Card>
    </div>
  );
};
