import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ThemeContext } from '../../context/theme/themeContext';
import { Card, Form, Input, Button, message } from 'antd';
import { updateUserInfo } from '../../api/updateUserInfo';
import { Class } from '../../utils/createShortClassname';
import { useNavigate } from 'react-router-dom';
import s from './Edit.module.scss';
import { useContext } from 'react';

function cleanValues(values: valuesProp) {
  return Object.fromEntries(
    Object.entries(values).filter((_, v) => v !== undefined)
  );
}

interface valuesProp {
  name?: string;
  surname?: string;
  phone?: string;
}

export const EditProfile = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const userId = useAppSelector((state) => state.user.id);

  const onFinish = async (values: valuesProp) => {
    if (!userId) {
      message.error('User ID is not defined!');
      return;
    }

    const res = await dispatch(
      updateUserInfo({ values: cleanValues(values), userId })
    ).unwrap();

    if (!res.success) {
      message.error('Error Updating User Profile!');
    }

    message.success('Profile Updated Successfuly!');
    navigate(-1);
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
            rules={[{ message: 'Please Enter Your Name', required: true }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            label="Surname"
            name="surname"
            rules={[{ message: 'Please enter your surname', required: true }]}
          >
            <Input placeholder="Enter Surname" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ message: 'Please enter your phone', required: true }]}
          >
            <Input placeholder="Enter phone" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
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
