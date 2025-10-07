import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBlock } from '../../api/block/deleteBlock';
import { updateBlock } from '../../api/block/updateBlock';
import { Card, Input, Button, message } from 'antd';
import s from './BlockDetail.module.scss';
import { useState } from 'react';

export const BlockDetailInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blockId = location.state.block._id;
  const header = location.state.block.lable;
  const inputValue = location.state.block.text;
  const [loading, setLoading] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(location.state.block.text);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      if (updatedValue === inputValue) {
        return message.success('Nothing to Update');
      }

      const data = await updateBlock(blockId, updatedValue);
      if (!data.success) {
        message.error(data.message || 'Update failed');
        return;
      }

      message.success('Block has been updated successfully.');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) message.error('Error updating block');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {

      const data = await deleteBlock(blockId);

      if (!data.success) {
        message.error(data.message || 'Delete failed');
        return;
      }

      message.success('Block has been Deleted successfully.');
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) message.error('Error Deleting block');
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
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
          rows={8}
          placeholder="Edit block text"
        />
        <div style={{ marginTop: 16, textAlign: 'right' }}>
          <Button onClick={handleDelete} type="primary" danger>
            Delete
          </Button>
          <Button type="primary" onClick={handleUpdate} loading={loading}>
            Update
          </Button>
          <Button onClick={() => navigate(-1)} type="dashed" danger>
            Exit
          </Button>
        </div>
      </Card>
    </div>
  );
};
