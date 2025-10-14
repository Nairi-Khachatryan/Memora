import { deleteAccount } from '../../../api/user/deleteAccount';
import { removeUser } from '../../../features/user/userSlice';
import { Button, Card, message, Popconfirm } from 'antd';
import { useAppSelector } from '../../../app/hooks';
import { ROUTES } from '../../../routes/routhPath';
import { useToast } from '../../../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import type React from 'react';

export const Account: React.FC = () => {
  const userId = useAppSelector((state) => state.user.user.id);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteAccount = async () => {
    setLoading(true);
    const res = await deleteAccount(userId);

    if (!res.success) {
      setLoading(false);
      return showToast({ type: 'error', message: res.message });
    }

    message.success('Account Deleted');
    dispatch(removeUser());
    navigate(ROUTES.SIGN_IN);
    setLoading(false);
  };

  return (
    <Card>
      <Popconfirm
        title="Are you shure you wont to delete your Account"
        onConfirm={handleDeleteAccount}
        okText="Yes"
        cancelText="No"
      >
        <Button loading={loading} type="primary" danger>
          Delete My Account
        </Button>
      </Popconfirm>
    </Card>
  );
};
