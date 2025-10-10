import { Card, Tag, Typography, Button, Space, Avatar } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import s from './Avatar.module.scss';
import React, { useContext } from 'react';
import { deleteAvatar } from '../../api/avatar/deleteAvatar';
import { useAppSelector } from '../../app/hooks';
import { useToast } from '../../hooks/useToast';
import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
// import { updateAvatar } from '../../api/avatar/updateAvatar';
import { ROUTES } from '../../routes/routhPath';

const { Text } = Typography;

export const AvatarDetailInfo: React.FC = () => {
  const location = useLocation();
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

  // const handleUpdateAvatar = async () => {
  // navigate(ROUTES.)
  // const res = await updateAvatar(avatarId, )
  // };

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
          <Button
            onClick={() =>
              navigate(ROUTES.UPDATE_AVATAR, { state: foundAvatar })
            }
            type="primary"
          >
            Go to Update
          </Button>
          <Button onClick={handleDeleteAvatar} danger>
            Delete
          </Button>
        </Space>
      </Card>
    </div>
  );
};
