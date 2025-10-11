import { Space, Avatar, Divider, Descriptions, message } from 'antd';
import { ThemeContext } from '../../../context/theme/themeContext';
import { CopyOutlined, UserOutlined } from '@ant-design/icons';
import { copyProfInfo } from '../../../utils/copyProfileInfo';
import { Class } from '../../../utils/createShortClassname';
import { useAppSelector } from '../../../app/hooks';
import { getUser } from '../../../api/user/getUser';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import s from './User.module.scss';

type UserType = {
  name: string;
  surname: string;
  phone: string;
  id: string;
  email: string;
};

export const UserProfileInfo = () => {
  const id = useAppSelector((state) => state.user.id);
  const { theme } = useContext(ThemeContext);

  const { data: user, isLoading: userLoading } = useQuery<UserType>({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });

  function handleCopyItem(text: string | undefined) {
    copyProfInfo(text);
    message.success('Text Copied');
  }
  return (
    <>
      <Space align="center" direction="vertical" style={{ width: '100%' }}>
        <Avatar size={96} icon={<UserOutlined />} />
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
            <CopyOutlined
              onClick={() => handleCopyItem(user?.name)}
              className={s.copy}
            />
          </Descriptions.Item>
          <Descriptions.Item
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
            label="Surname"
          >
            {user?.surname}
            <CopyOutlined
              onClick={() => handleCopyItem(user?.surname)}
              className={s.copy}
            />
          </Descriptions.Item>
          <Descriptions.Item
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
            label="Phone"
          >
            {user?.phone}
            <CopyOutlined
              onClick={() => handleCopyItem(user?.phone)}
              className={s.copy}
            />
          </Descriptions.Item>
          <Descriptions.Item
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
            label="User ID"
          >
            {user?.id}
            <CopyOutlined
              onClick={() => handleCopyItem(user?.id)}
              className={s.copy}
            />
          </Descriptions.Item>
          <Descriptions.Item
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
            label="Email"
          >
            {user?.email}
            <CopyOutlined
              onClick={() => handleCopyItem(user?.email)}
              className={s.copy}
            />
          </Descriptions.Item>
        </Descriptions>
      )}
      <Divider />
    </>
  );
};
