import { ChangePassForm } from '../../../components/chnagePassForm/ChangePassForm';
import { changePassword } from '../../../api/auth/changePassword';
import { useAppSelector } from '../../../app/hooks';
import { useToast } from '../../../hooks/useToast';
import React, { useState } from 'react';

export const PasswordTab: React.FC = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { showToast } = useToast();

  const USER_ID = useAppSelector((state) => state.user.id);

  const handleChangePassword = async () => {
    setLoading(true);

    if (confirmPassword !== newPassword) {
      setError('Passwords Didnt Match');
      setLoading(false);
      setConfirmPassword('');
      setNewPassword('');
      return;
    }

    if (!USER_ID) {
      setLoading(false);
      return setError('Invalid User ID');
    }

    if (!oldPassword || !newPassword || !confirmPassword) {
      setLoading(false);
      return setError('All fields are required');
    }

    const res = await changePassword(USER_ID, oldPassword, newPassword);

    if (!res.success) {
      setLoading(false);
      setOldPassword('');
      return showToast({ type: 'error', message: res.message });
    }

    showToast({ type: 'success', message: res.message });

    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setLoading(false);
  };
  return (
    <>
      <ChangePassForm
        newPassword={newPassword}
        error={error}
        loading={loading}
        oldPassword={oldPassword}
        setNewPassword={setNewPassword}
        setOldPassword={setOldPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleChangePassword={handleChangePassword}
      />
    </>
  );
};
