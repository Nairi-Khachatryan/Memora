import { Form, Input, Button, Upload, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createAvatar } from '../../api/avatar/createAvatar';
import { useToast } from '../../hooks/useToast';
import { useAppSelector } from '../../app/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import type { AvatarType } from '../../types/avatarType';

export const CreateAvatar = () => {
  const [form] = Form.useForm();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const ownerId = useAppSelector((state) => state.user.id);

  const handleSubmit = async (values: AvatarType) => {
    if (!ownerId) {
      return;
    }

    const finalValues = { ...values, ownerId, idx: location.state.idx };
    const res = await createAvatar(finalValues);

    if (!res.success) {
      return showToast({ type: 'error', message: res.message });
    }

    showToast({ type: 'success', message: res.message });
    navigate(-1);
  };

  return (
    <Card
      title="Create Avatar"
      className="max-w-md mx-auto mt-6 rounded-xl shadow"
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Avatar"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          rules={[{ message: 'Please upload an image!' }]}
        >
          <Upload name="image" listType="picture" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: 'Please enter your surname!' }]}
        >
          <Input placeholder="Enter surname" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { message: 'Please enter your email!' },
            { type: 'email', message: 'Invalid email format!' },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ message: 'Please enter your phone number!' }]}
        >
          <Input placeholder="Enter phone" />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ message: 'Please select a role!' }]}
        >
          <Input placeholder="Enter Role" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
