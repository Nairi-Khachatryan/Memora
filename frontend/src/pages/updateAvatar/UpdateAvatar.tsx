import { updateAvatar } from '../../api/avatar/updateAvatar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Input, Button, Card, Space } from 'antd';
import { useToast } from '../../hooks/useToast';
import { useState } from 'react';
import _ from 'lodash';

export const UpdateAvatar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const foundAvatar = location.state;

  interface UpdateAvatar {
    name: string;
    surname: string;
    phone: string;
    role: string;
    email: string;
  }

  const { name, surname, role, email, phone } = location.state || {};
  const [updatedValue, setUpdatedValue] = useState<UpdateAvatar>({
    name: name || '',
    surname: surname || '',
    role: role || '',
    email: email || '',
    phone: phone || '',
  });

  const handleChange = (key: string, value: string) => {
    setUpdatedValue((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const { name, surname, email, role, phone, _id } = foundAvatar;
    const oldValue = { name, surname, phone, role, email };

    if (_.isEqual(updatedValue, oldValue)) {
      return showToast({ type: 'error', message: 'Nothing to Update' });
    }

    const res = await updateAvatar(_id, updatedValue);

    if (!res.success) {
      return showToast({ type: 'error', message: res.message });
    }

    showToast({ type: 'success', message: res.message });
    navigate(-2);
  };

  return (
    <Card
      title="Update Avatar Info"
      style={{ maxWidth: 400, margin: '40px auto', borderRadius: 8 }}
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Input
          placeholder="Name"
          value={updatedValue.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />

        <Input
          placeholder="Surname"
          value={updatedValue.surname}
          onChange={(e) => handleChange('surname', e.target.value)}
        />

        <Input
          placeholder="Role"
          value={updatedValue.role}
          onChange={(e) => handleChange('role', e.target.value)}
        />

        <Input
          placeholder="Email"
          type="email"
          value={updatedValue.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />

        <Input
          placeholder="Phone"
          value={updatedValue.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />

        <Button type="primary" block onClick={handleSubmit}>
          Update
        </Button>

        <Button type="primary" ghost block onClick={() => navigate(-1)}>
          Back
        </Button>
      </Space>
    </Card>
  );
};
