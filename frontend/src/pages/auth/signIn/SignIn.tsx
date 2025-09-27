import { useAppDispatch } from '../../../app/hooks';
import { ROUTES } from '../../../routes/routhPath';
import { signInUser } from '../../../api/authApi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { Button, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import React from 'react';

type FieldType = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const res = await dispatch(signInUser(values));

      navigate(ROUTES.HOME_PATH);

      console.log(res);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};
