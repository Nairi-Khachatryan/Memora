import { AvatarForm } from '../../components/avatarForm/AvatarForm';
import { createAvatar } from '../../api/avatar/createAvatar';
import { useNavigate, useLocation } from 'react-router-dom';
import type { AvatarType } from './CreateAvatar.types';
import { useAppSelector } from '../../app/hooks';
import { useToast } from '../../hooks/useToast';
import React, { useState } from 'react';
import { Card } from 'antd';

export const CreateAvatar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const ownerId = useAppSelector((state) => state.user.user.id);

  const handleSubmit = async (values: AvatarType) => {
    if (!ownerId) return;

    setLoading(true);
    const res = await createAvatar({
      ...values,
      ownerId,
      idx: location.state.idx,
    });

    showToast({
      type: res.success ? 'success' : 'error',
      message: res.message,
    });

    if (res.success) navigate(-1);
    setLoading(false);
  };

  return (
    <Card
      title="Create Avatar"
      className="max-w-md mx-auto mt-6 rounded-xl shadow"
    >
      <AvatarForm loading={loading} onSubmit={handleSubmit} />
    </Card>
  );
};
