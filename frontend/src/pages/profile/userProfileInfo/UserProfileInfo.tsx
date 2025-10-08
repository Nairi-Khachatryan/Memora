import { Space, Avatar, Divider, Descriptions } from 'antd';
import { ThemeContext } from '../../../context/theme/themeContext';
import { Class } from '../../../utils/createShortClassname';
import { useAppSelector } from '../../../app/hooks';
import { UserOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../../api/user/getUser';
import { useContext } from 'react';
import s from './User.module.scss';

type UserType = {
  name: string;
  surname: string;
  phone: string;
  id: string;
  email: string;
};
// const { Title } = Typography;

export const UserProfileInfo = () => {
  const id = useAppSelector((state) => state.user.id);
  const { theme } = useContext(ThemeContext);

  const { data: user, isLoading: userLoading } = useQuery<UserType>({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });
  return (
    <>
      <Space align="center" direction="vertical" style={{ width: '100%' }}>
        <Avatar size={96} icon={<UserOutlined />} />
        {/* <Title
          style={{ color: theme === 'dark' ? 'white' : 'black' }}
          level={3}
        >
  
        </Title> */}
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
    </>
  );
};
