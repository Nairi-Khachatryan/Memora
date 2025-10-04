import { ThemeContext } from '../../context/theme/themeContext';
import { useAppSelector } from '../../app/hooks';
import { useQuery } from '@tanstack/react-query';
import { ROUTES } from '../../routes/routhPath';
import { getBlock } from '../../api/getBlock';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api/getUser';
import s from './Profile.module.scss';
import { useContext } from 'react';
import {
  UserOutlined,
  SettingOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  Card,
  Avatar,
  Button,
  Descriptions,
  Space,
  Divider,
  Typography,
} from 'antd';
import { Class } from '../../utils/createShortClassname';
const { Title } = Typography;

type BlockType = {
  _id: string;
  lable: string;
  text: string;
  ownerId: string;
};

type UserType = {
  name: string;
  surname: string;
  phone: string;
  id: string;
  email: string;
};

export const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  if (!id) return null;

  const { data: user, isLoading: userLoading } = useQuery<UserType>({
    queryKey: ['user', id],
    queryFn: () => getUser(id),
    enabled: !!id,
  });

  const { data: blocks = [], isLoading: blocksLoading } = useQuery<BlockType[]>(
    {
      queryKey: ['block', id],
      queryFn: () => getBlock(id),
      enabled: !!id,
    }
  );

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

      <Card
        title="My Blocks"
        className={Class(s, 'blocksCard', theme)}
        style={{ marginTop: 20 }}
      >
        {blocksLoading && <p>Загрузка блоков...</p>}
        {!blocksLoading && blocks.length === 0 && <p>No blocks yet</p>}

        <Space wrap>
          {blocks?.map((block) => (
            <Button
              key={block._id}
              onClick={() => navigate(ROUTES.DETAIL_INFO, { state: { block } })}
            >
              {block.lable}
            </Button>
          ))}
          <Button
            type="dashed"
            icon={<PlusOutlined />}
            onClick={() => navigate(ROUTES.CREATE_BLOCK)}
          >
            Add block
          </Button>
        </Space>
      </Card>
    </div>
  );
};
