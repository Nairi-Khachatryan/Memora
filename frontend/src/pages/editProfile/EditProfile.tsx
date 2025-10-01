import { Card, Form, Input, Button, message } from 'antd';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import s from './Edit.module.scss';

export const EditProfile = () => {
  const { email } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Updated info:', values);
    message.success('Профиль обновлён!');
    navigate(-1);
  };

  return (
    <div className={s.editProfileContainer}>
      <Card
        title="Edit Profile"
        style={{
          borderRadius: 0,
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            name: 'Name',
            surname: 'Surname',
            phone: '055107115',
            email: email,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Имя"
            name="name"
            rules={[{ required: true, message: 'Please Enter Your Name' }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            label="Фамилия"
            name="surname"
            rules={[{ required: true, message: 'Пожалуйста, введите фамилию' }]}
          >
            <Input placeholder="Введите фамилию" />
          </Form.Item>

          <Form.Item
            label="Телефон"
            name="phone"
            rules={[
              { required: true, message: 'Пожалуйста, введите номер телефона' },
            ]}
          >
            <Input placeholder="Введите номер телефона" />
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
