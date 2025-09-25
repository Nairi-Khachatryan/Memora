import { Button, Checkbox, Form, Input } from 'antd';
import { createUser } from '../../../api/authApi';
import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routhPath';
import { useForm } from 'antd/es/form/Form';
import { useAppDispatch } from '../../../app/hooks';

type FieldType = {
  email: string;
  password: string;
  confirmPassword: string;
  remember?: string;
};

export const SignUp: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [form] = useForm();
  const dispatch = useAppDispatch();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      form.resetFields(['password', 'confirmPassword']);
      return;
    }

    setError('');

    try {
      const res = await dispatch(createUser({ email, password }));

      // console.log(res, 'res');
      navigate(ROUTES.HOME_PATH);
    } catch (error) {
      form.resetFields();
      if (error instanceof Error) console.log(error);
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
        label="Username"
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
        rules={[
          { required: true, message: 'Please input your password!' },
          { min: 6, message: 'Password must be at least 6 characters' },
          { max: 16, message: 'Password must be at most 16 characters' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="ConfirmPassword"
        name="confirmPassword"
        rules={[
          { required: true, message: 'Please input your password!' },
          { min: 6, message: 'Password must be at least 6 characters' },
          { max: 16, message: 'Password must be at most 16 characters' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        label={null}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};
