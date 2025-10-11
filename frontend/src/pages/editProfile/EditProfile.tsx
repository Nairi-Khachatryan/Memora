import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ThemeContext } from '../../context/theme/themeContext';
import { updateUserInfo } from '../../api/user/updateUserInfo';
import { Card, Form, Input, Button, message } from 'antd';
import { cleanValues } from '../../utils/cleanFuncValues';
import { Class } from '../../utils/createShortClassname';
import { useToast } from '../../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import type { valuesProp } from './types';
import s from './Edit.module.scss';

export const EditProfile = () => {
  const [loading, setloading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const userId = useAppSelector((state) => state.user.id);
  const { showToast } = useToast();

  const onFinish = async (values: valuesProp) => {
    setloading(true);
    if (!userId) {
      message.error('User ID is not defined!');
      setloading(false);
      return;
    }

    const { name, surname, phone } = cleanValues(values);

    if (!name && !surname && !phone) {
      setloading(false);
      return showToast({ type: 'error', message: 'Nothing to Update' });
    }

    const res = await dispatch(
      updateUserInfo({ values: { name, surname, phone }, userId })
    ).unwrap();

    if (!res.success) {
      message.error('Error Updating User Profile!');
      return setloading(false);
    }

    message.success('Profile Updated Successfuly!');
    navigate(-1);
    setloading(false);
  };

  return (
    <div className={Class(s, 'editProfileContainer', theme)}>
      <Card
        title="Edit Profile"
        style={{
          borderRadius: 0,
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ message: 'Please Enter Your Name' }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            label="Surname"
            name="surname"
            rules={[{ message: 'Please enter your surname' }]}
          >
            <Input placeholder="Enter Surname" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ message: 'Please enter your phone' }]}
          >
            <Input placeholder="Enter phone" />
          </Form.Item>

          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Save
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={() => navigate(-1)}>
              Cansel
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
