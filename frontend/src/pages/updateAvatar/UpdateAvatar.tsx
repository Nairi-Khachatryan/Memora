import UpdateAvatarForm from '../../components/updateAvatarForm/UpdateAvatarForm';
import { updateAvatar } from '../../api/avatar/updateAvatar';
import { useLocation, useNavigate } from 'react-router-dom';
import type { UpdateAvatarInterface } from './types';
import { useToast } from '../../hooks/useToast';
import { useState } from 'react';
import _ from 'lodash';

export const UpdateAvatar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const foundAvatar = location.state;
  const { name, surname, role, email, phone, attribute } = location.state || {};

  const oldValue = {
    name: foundAvatar.name,
    surname: foundAvatar.surname,
    role: foundAvatar.role,
    email: foundAvatar.email,
    phone: foundAvatar.phone,
    attribute: foundAvatar.attribute
      ? foundAvatar.attribute.map((a: { topic: string; value: string }) => ({
          ...a,
        }))
      : [],
  };

  const [updatedValue, setUpdatedValue] = useState<UpdateAvatarInterface>(
    _.cloneDeep({
      name: name || '',
      surname: surname || '',
      role: role || '',
      email: email || '',
      phone: phone || '',
      attribute: attribute
        ? attribute.map((a: { topic: string; value: string }) => ({ ...a }))
        : [],
    })
  );

  const handleChange = <K extends keyof UpdateAvatarInterface>(
    key: string,
    value: UpdateAvatarInterface[K]
  ) => {
    setUpdatedValue((prev) => ({ ...prev, [key]: value }));
  };

  const handleAttributeChange = (
    index: number,
    field: 'topic' | 'value',
    value: string
  ) => {
    const newAttr = [...(updatedValue.attribute || [])];
    newAttr[index] = { ...newAttr[index], [field]: value };
    handleChange('attribute', newAttr);
  };

  const handleSubmit = async () => {
    const { name, surname, email, role, phone, attribute } = updatedValue;

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

    if (_.isEqual(updatedValue, oldValue)) {
      console.log('Old Value:', oldValue);
      console.log('Updated Value:', updatedValue);
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
    <UpdateAvatarForm
      handleAttributeChange={handleAttributeChange}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      updatedValue={updatedValue}
    />
  );
};
