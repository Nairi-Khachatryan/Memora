import { useAppDispatch } from '../../../app/hooks';
import { ROUTES } from '../../../routes/routhPath';
import { useToast } from '../../../hooks/useToast';
import { signInUser } from '../../../api/authApi';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import { Button, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import s from './SignIn.module.scss';
import React from 'react';

type FieldType = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const { showToast } = useToast();
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const res = await dispatch(signInUser(values)).unwrap();

    if (!res.success) {
      return showToast({ type: 'error', message: res.message });
    }

    navigate(ROUTES.HOME_PATH);
    showToast({ type: 'success', message: res.message });
  };
  return (
    <>
      <div className={s.formContainer}>
        <div>nairi.khachatryan357@gmail.com</div>

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
            <Input className={s.input} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className={s.input} />
          </Form.Item>

          <div className={s.linkNavigate}>
            <h1>New to Memora?</h1>
            <Link className={s.myLink} to={ROUTES.SIGN_UP}>
              Sign Up
            </Link>
          </div>

          <Form.Item label={null}>
            <Button className={s.submitBtn} type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
