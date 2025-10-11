import { Card, Tag, Typography, Button, Space, Avatar, Popconfirm } from 'antd';
import { ThemeContext } from '../../context/theme/themeContext';
import { deleteAvatar } from '../../api/avatar/deleteAvatar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Class } from '../../utils/createShortClassname';
import type { AvatarType } from './AvatarDetail.types';
import { UserOutlined } from '@ant-design/icons';
import type { Location } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { useToast } from '../../hooks/useToast';
import { ROUTES } from '../../routes/routhPath';
import React, { useContext } from 'react';
import s from './Avatar.module.scss';

const { Text } = Typography;

export const AvatarDetailInfo: React.FC = () => {
  type LocationState = { foundAvatar: AvatarType };

  const location = useLocation() as Location<LocationState>;
  const avatar = location.state.foundAvatar;
  const navigate = useNavigate();
  const id = useAppSelector((state) => state.user.id);
  const { showToast } = useToast();
  const { theme } = useContext(ThemeContext);

  const foundAvatar = location.state.foundAvatar;

  const handleDeleteAvatar = async () => {
    const res = await deleteAvatar(id);

    if (!res.success) {
      return showToast({ type: 'error', message: res.message });
    }

    showToast({ type: 'success', message: res.message });
    navigate(-1);
  };

  return (
    <div className={Class(s, 'wrapper', theme)}>
      <Card
        title={
          <div className={s.header}>
            <Avatar size={64} icon={<UserOutlined />} />
            <div className={s.name}>
              <Text strong>{`${avatar.name} ${avatar.surname}`}</Text>
              {avatar.role && (
                <Tag color="blue" className={s.tag}>
                  <div className={s.tagContent}>
                    <span className={s.tagLabel}>Role:</span>
                    <span className={s.tagValue}>{avatar.role}</span>
                  </div>
                </Tag>
              )}
              {avatar.gender && (
                <Tag color="blue" className={s.tag}>
                  <div className={s.tagContent}>
                    <span className={s.tagLabel}>Gender:</span>
                    <span className={s.tagValue}>{avatar.gender}</span>
                  </div>
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
          <Button
            onClick={() =>
              navigate(ROUTES.UPDATE_AVATAR, { state: foundAvatar })
            }
            type="primary"
          >
            Go to Update
          </Button>
          <Popconfirm
            title="Are you sure you want to Delete Avatar?"
            onConfirm={handleDeleteAvatar}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      </Card>
    </div>
  );
};
