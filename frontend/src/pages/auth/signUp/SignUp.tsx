import { createUser } from '../../../api/auth/authApi';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { ROUTES } from '../../../routes/routhPath';
import { useToast } from '../../../hooks/useToast';
import type { FieldType } from './SignUp.types';
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import type { FormProps } from 'antd';
import s from './SignUp.module.scss';

export const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [form] = useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const { email, password, confirmPassword } = values;
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords don’t match.');
      showToast({ type: 'error', message: 'Passwords don’t match.' });
      form.resetFields(['password', 'confirmPassword']);
      setLoading(false);
      return;
    }

    setError('');
    const res = await dispatch(createUser({ email, password })).unwrap();

    if (!res.success) {
      setLoading(false);
      return showToast({ type: 'error', message: res.message });
    }

    navigate(ROUTES.HOME_PATH);
    showToast({ type: 'success', message: res.message });
    setLoading(false);
  };

  return (
    <div className={s.page}>
      <div className={s.formContainer}>
        <Form
          className={s.form}
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, width: '100%' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className={s.headTextContainer}>
            <h1 className={s.headText}>Create Account</h1>
          </div>

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
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Please confirm your password!' },
              { min: 6, message: 'Password must be at least 6 characters' },
              { max: 16, message: 'Password must be at most 16 characters' },
            ]}
          >
            <Input.Password className={s.input} />
          </Form.Item>

          {error && <p className={s.error}>{error}</p>}

          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <div className={s.linkNavigate}>
            <p>Already have an account?</p>
            <Link className={s.myLink} to={ROUTES.SIGN_IN}>
              Sign In
            </Link>
          </div>

          <Form.Item>
            <Button
              loading={loading}
              className={s.submitBtn}
              type="primary"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
