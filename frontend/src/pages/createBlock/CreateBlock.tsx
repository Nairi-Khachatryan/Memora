import { createBlock } from '../../api/block/createBlock';
import { Card, Form, Input, Button } from 'antd';
import { useAppSelector } from '../../app/hooks';
import { useToast } from '../../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import s from './Create.module.scss';
import { useState } from 'react';

export const CreateBlock = () => {
  
  const navigate = useNavigate();
  const { showToast } = useToast();
  const ownerId = useAppSelector((state) => state.user.id);

  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { lable: string; text: string }) => {
    setLoading(true);
    try {
      const data = await createBlock({ ...values, ownerId });

      if (!data.success) {
        showToast({ type: 'error', message: data.message });
        return;
      }

      showToast({ type: 'success', message: data.message });
      navigate(-1);
    } catch (err) {
      if (err instanceof Error) console.log(err.message);
      showToast({ type: 'error', message: 'Error creating block' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.createBlockContainer}>
      <Card
        title="Create New Block"
        style={{
          borderRadius: 0,
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Block Title"
            name="lable"
            rules={[{ required: true, message: 'Please enter a title' }]}
          >
            <Input placeholder="Enter block title" />
          </Form.Item>

          <Form.Item
            label="Text"
            name="text"
            rules={[{ required: true, message: 'Please enter text' }]}
          >
            <Input.TextArea placeholder="Enter block text" rows={6} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Create
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
