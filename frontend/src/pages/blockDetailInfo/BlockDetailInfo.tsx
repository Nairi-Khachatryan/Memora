import { useLocation, useNavigate } from 'react-router-dom';
import { updateBlock } from '../../api/updateBlock';
import { Card, Input, Button, message } from 'antd';
import s from './BlockDetail.module.scss';
import { useState } from 'react';

export const BlockDetailInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(location.state.block.text);
  const [loading, setLoading] = useState(false);

  const header = location.state.block.lable;
  const blockId = location.state.block._id;

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const data = await updateBlock(blockId, { text: inputValue });

      console.log(data);

      // if (!data.success) {
      //   message.error(data.message || 'Update failed');
      //   return;
      // }

      message.success('Block updated successfully');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) message.error('Error updating block');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.blockDetailContainer}>
      <Card
        title={header}
        style={{
          borderRadius: 0,
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <Input.TextArea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          rows={8}
          placeholder="Edit block text"
        />
        <div style={{ marginTop: 16, textAlign: 'right' }}>
          <Button type="primary" onClick={handleUpdate} loading={loading}>
            Update
          </Button>
        </div>
      </Card>
    </div>
  );
};
