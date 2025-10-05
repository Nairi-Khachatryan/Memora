import { UserOutlined, SettingOutlined, EditOutlined } from '@ant-design/icons';
import { ThemeContext } from '../../context/theme/themeContext';
import { Class } from '../../utils/createShortClassname';
import { useAppSelector } from '../../app/hooks';
import { useQuery } from '@tanstack/react-query';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api/getUser';
import s from './Profile.module.scss';
import { Block } from './block/Block';
import { useContext } from 'react';
import {
  Card,
  Avatar,
  Button,
  Descriptions,
  Space,
  Divider,
  Typography,
} from 'antd';

type UserType = {
  name: string;
  surname: string;
  phone: string;
  id: string;
  email: string;
};

const { Title } = Typography;
export const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const { data: user, isLoading: userLoading } = useQuery<UserType>({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });

  return (
    <div
      className={Class(
        s,
        'ProfileDescriptions',
        theme === 'dark' ? 'dark' : 'light'
      )}
    >
      <Card
        style={{ borderRadius: 0, border: 'none' }}
        className={Class(s, 'profileCard', theme)}
      >
        <Space align="center" direction="vertical" style={{ width: '100%' }}>
          <Avatar size={96} icon={<UserOutlined />} />
          <Title
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
            level={3}
          >
            User Profile
          </Title>
        </Space>
        <Divider />
        {userLoading ? (
          <p>Loading...</p>
        ) : (
          <Descriptions
            className={Class(s, 'profileDescriptions', theme)}
            column={1}
            bordered
            size="middle"
          >
            <Descriptions.Item
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
              label="Name"
            >
              {user?.name}
            </Descriptions.Item>
            <Descriptions.Item
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
              label="Surname"
            >
              {user?.surname}
            </Descriptions.Item>
            <Descriptions.Item
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
              label="Phone"
            >
              {user?.phone}
            </Descriptions.Item>
            <Descriptions.Item
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
              label="User ID"
            >
              {user?.id}
            </Descriptions.Item>
            <Descriptions.Item
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
              label="Email"
            >
              {user?.email}
            </Descriptions.Item>
          </Descriptions>
        )}
        <Divider />
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
      <Block />
    </div>
  );
};
