import type { AvatarType } from '../../types/avatarType';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface AvatarFormProps {
  loading: boolean;
  onSubmit: (values: AvatarType) => void;
}

export const AvatarForm = ({ loading, onSubmit }: AvatarFormProps) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" onFinish={onSubmit}>
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

      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input placeholder="Enter name" />
      </Form.Item>

      <Form.Item label="Surname" name="surname" rules={[{ required: true }]}>
        <Input placeholder="Enter surname" />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[{ type: 'email' }]}>
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item label="Phone" name="phone">
        <Input placeholder="Enter phone" />
      </Form.Item>

      <Form.Item label="Role" name="role">
        <Input placeholder="Enter role" />
      </Form.Item>

      <Form.Item label="Gender" name="gender">
        <Input placeholder="Enter gender" />
      </Form.Item>

      <Form.Item>
        <Button loading={loading} type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
