import { signInUser } from '../../../api/auth/authApi';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { ROUTES } from '../../../routes/routhPath';
import { useToast } from '../../../hooks/useToast';
import type { FieldType } from './SignIn.types';
import { useForm } from 'antd/es/form/Form';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import type { FormProps } from 'antd';
import s from './SignIn.module.scss';

export const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [form] = useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setLoading(true);
    const res = await dispatch(signInUser(values)).unwrap();

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
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, width: '100%' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          className={s.form}
        >
          <div className={s.headTextContainer}>
            <h1 className={s.headText}>Sign In</h1>
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
            <Input autoComplete="username" className={s.input} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              autoComplete="current-password"
              className={s.input}
            />
          </Form.Item>

          <div className={s.linkNavigate}>
            <p>New to Memora?</p>
            <Link className={s.myLink} to={ROUTES.SIGN_UP}>
              Sign Up
            </Link>
          </div>

          <Form.Item>
            <Button
              loading={loading}
              className={s.submitBtn}
              type="primary"
              htmlType="submit"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
