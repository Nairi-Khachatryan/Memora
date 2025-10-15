import type { UpdateAvatarInterface } from '../../pages/updateAvatar/types';
import { Card, Input, Space, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import type React from 'react';

interface UpdateAvatarProps {
  handleChange: (key: string, value: string) => void;
  handleSubmit: () => Promise<void>;
  updatedValue: UpdateAvatarInterface;
  handleAttributeChange: (
    index: number,
    field: 'topic' | 'value',
    value: string
  ) => void;
}

export interface AttributeItem {
  _id?: string;
  topic: string;
  value: string;
}

const UpdateAvatarForm: React.FC<UpdateAvatarProps> = ({
  handleChange,
  handleAttributeChange,
  handleSubmit,
  updatedValue,
}) => {
  const navigate = useNavigate();

  return (
    <>
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
            updatedValue.attribute.map((item: AttributeItem, index: number) => (
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
    </>
  );
};

export default UpdateAvatarForm;
