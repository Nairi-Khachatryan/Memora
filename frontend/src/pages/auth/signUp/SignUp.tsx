import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch } from '../../../app/hooks';
import { ROUTES } from '../../../routes/routhPath';
import { useToast } from '../../../hooks/useToast';
import { createUser } from '../../../api/auth/authApi';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import type { FormProps } from 'antd';
import s from './SignUp.module.scss';

type FieldType = {
  email: string;
  password: string;
  confirmPassword: string;
  remember?: string;
};

export const SignUp: React.FC = () => {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [form] = useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setError('Passwords don’t match.');
      showToast({ type: 'error', message: 'Passwords don’t match.' });
      form.resetFields(['password', 'confirmPassword']);
      return;
    }
    setError('');
    try {
      const res = await dispatch(createUser({ email, password })).unwrap();

      if (!res.success) {
        return showToast({ type: 'error', message: res.message });
      }
      navigate(ROUTES.HOME_PATH);
      return showToast({ type: 'success', message: res.message });
    } catch (error) {
      form.resetFields();
      if (error instanceof Error) console.log(error);
    }
  };

  return (
    <div className={s.formContainer}>
      <Form
        className={s.form}
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
          <Input className={s.input} />
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
          <Input.Password className={s.input} />
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
          <Input.Password className={s.input} />
        </Form.Item>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <div className={s.linkNavigate}>
          <h1> Already have an account?</h1>
          <Link className={s.myLink} to={ROUTES.SIGN_IN}>
            Sign In
          </Link>
        </div>

        <Form.Item label={null}>
          <Button className={s.submitBtn} type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
