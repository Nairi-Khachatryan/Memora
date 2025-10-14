import type { AvatarFormProps } from './Avatar.types';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';

export const AvatarForm: React.FC<AvatarFormProps> = ({
  loading,
  onSubmit,
}) => {
  const [form] = Form.useForm();
  const topics = Form.useWatch('attribute', form) || [];



  

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

      {/* Dynamic Topics */}
      <Form.List name="attribute">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...rest }) => {
              const topic = topics?.[name]?.topic;

              return (
                <div
                  key={key}
                  style={{
                    border: '1px solid #d9d9d9',
                    borderRadius: 8,
                    padding: 16,
                    marginBottom: 16,
                  }}
                >
                  <Form.Item {...rest} name={[name, 'topic']} label="Name">
                    <Input placeholder="Enter atributte name" />
                  </Form.Item>

                  {topic && (
                    <>
                      <Form.Item name={[name, 'value']} label="Value">
                        <Input placeholder="value" />
                      </Form.Item>
                    </>
                  )}

                  <Button danger onClick={() => remove(name)}>
                    Remove topic
                  </Button>
                </div>
              );
            })}
            <Button type="dashed" onClick={() => add()} block>
              + Add Topic
            </Button>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button loading={loading} type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
