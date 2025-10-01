// import { ProfileItem } from '../../components/ProfileItem';
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
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../../app/hooks';
import { ROUTES } from '../../routes/routhPath';
import { useNavigate } from 'react-router-dom';
import { getBlock } from '../../api/getBlock';
import s from './Profile.module.scss';

const { Title } = Typography;

export const Profile = () => {
  const { id, email } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  type BlockType = {
    _id: string;
    lable: string;
    text: string;
    ownerId: string;
  };

  const { data = [], isLoading } = useQuery<BlockType[]>({
    queryKey: ['block', id],
    queryFn: () => getBlock(id as string),
    enabled: !!id,
  });

  return (
    <div className={s.profileContainer}>
      <Card style={{ borderRadius: 0 }} className={s.profileCard}>
        <Space align="center" direction="vertical" style={{ width: '100%' }}>
          <Avatar size={96} icon={<UserOutlined />} />
          <Title level={3}>User Profile</Title>
        </Space>

        <Divider />

        <Descriptions column={1} bordered size="middle">
          <Descriptions.Item label="Name">Name</Descriptions.Item>
          <Descriptions.Item label="Surname">Surname</Descriptions.Item>
          <Descriptions.Item label="Phone">055107115</Descriptions.Item>
          <Descriptions.Item label="User ID">{id}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
        </Descriptions>

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
        className={s.blocksCard}
        style={{ marginTop: 20 }}
      >
        {isLoading && 'Loading...'}
        {!isLoading && data.length === 0 && <p>No blocks yet</p>}
        <Space wrap>
          {data?.map((block) => (
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
