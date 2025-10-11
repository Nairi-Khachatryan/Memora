import { ThemeContext } from '../../../context/theme/themeContext';
import { Class } from '../../../utils/createShortClassname';
import { getBlock } from '../../../api/block/getBlock';
import { useAppSelector } from '../../../app/hooks';
import { ROUTES } from '../../../routes/routhPath';
import { PlusOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import type { BlockType } from './Block.types';
import { Card, Button, Space } from 'antd';
import React, { useContext } from 'react';
import s from './Block.module.scss';

export const BlockContainer: React.FC = () => {
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
      <Card className={Class(s, 'blocksCard', theme)} style={{ marginTop: 20 }}>
        <h2>My blocks</h2>
        {blocksLoading && <p>Loading Blocks...</p>}

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
