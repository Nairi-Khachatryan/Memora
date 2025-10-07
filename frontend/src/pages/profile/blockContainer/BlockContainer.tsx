import { ThemeContext } from '../../../context/theme/themeContext';
import { Class } from '../../../utils/createShortClassname';
import { useAppSelector } from '../../../app/hooks';
import { ROUTES } from '../../../routes/routhPath';
import { PlusOutlined } from '@ant-design/icons';
import { getBlock } from '../../../api/block/getBlock';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Space } from 'antd';
import { useContext } from 'react';
import s from './Block.module.scss';

type BlockType = {
  _id: string;
  lable: string;
  text: string;
  ownerId: string;
};

export const BlockContainer = () => {
  const navigate = useNavigate();
  const id = useAppSelector((state) => state.user.id);
  const { theme } = useContext(ThemeContext);
  const { data: blocks = [], isLoading: blocksLoading } = useQuery<BlockType[]>(
    {
      queryKey: ['block', id],
      queryFn: () => getBlock(id),
      enabled: !!id,
    }
  );

  return (
    <>
      <Card
        title="My Blocks"
        className={Class(s, 'blocksCard', theme)}
        style={{ marginTop: 20 }}
      >
        {blocksLoading && <p>Loading Blocks...</p>}
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
    </>
  );
};
