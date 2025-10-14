import { updateAvatar } from '../../api/avatar/updateAvatar';
import { useLocation, useNavigate } from 'react-router-dom';
import type { UpdateAvatarInterface } from './types';
import { Button, Card, Input, Space } from 'antd';
import { useToast } from '../../hooks/useToast';
import { useState } from 'react';
import _ from 'lodash';

export const UpdateAvatar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const foundAvatar = location.state;
  const { name, surname, role, email, phone, attribute } = location.state || {};

  const [updatedValue, setUpdatedValue] = useState<UpdateAvatarInterface>({
    name: name || '',
    surname: surname || '',
    role: role || '',
    email: email || '',
    phone: phone || '',
    attribute: attribute || [],
  });

  const handleChange = (key: string, value: string) => {
    setUpdatedValue((prev) => ({ ...prev, [key]: value }));
  };

  const handleAttributeChange = (
    index: number,
    field: 'topic' | 'value',
    value: string
  ) => {
    const newAttr = [...(updatedValue.attribute || [])];
    newAttr[index][field] = value;
    handleChange('attribute', newAttr as any);
  };

  const handleSubmit = async () => {
    const { name, surname, email, role, phone, attribute } = updatedValue;

    // Manual required validation
    if (!name || !surname || !email || !role || !phone) {
      return showToast({ type: 'error', message: 'All fields are required' });
    }

    if (Array.isArray(attribute)) {
      for (const item of attribute) {
        if (!item.topic || !item.value) {
          return showToast({
            type: 'error',
            message: 'All attribute fields are required',
          });
        }
      }
    }

    const { _id } = foundAvatar;
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

        {Array.isArray(updatedValue.attribute) &&
          updatedValue.attribute.map((item: any, index: number) => (
            <Space key={item._id} style={{ width: '100%' }}>
              <Input
                placeholder="Topic"
                value={item.topic}
                onChange={(e) =>
                  handleAttributeChange(index, 'topic', e.target.value)
                }
              />
              <Input
                placeholder="Value"
                value={item.value}
                onChange={(e) =>
                  handleAttributeChange(index, 'value', e.target.value)
                }
              />
            </Space>
          ))}

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
