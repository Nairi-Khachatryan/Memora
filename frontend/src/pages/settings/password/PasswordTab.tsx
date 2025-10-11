import { changePassword } from '../../../api/auth/changePassword';
import { useAppSelector } from '../../../app/hooks';
import { useToast } from '../../../hooks/useToast';
import { Card, Form, Input, Button } from 'antd';
import { useState } from 'react';

export const PasswordTab = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { showToast } = useToast();

  const USER_ID = useAppSelector((state) => state.user.id);

  const handleChangePassword = async () => {
    setLoading(true);

    if (confirmPassword !== newPassword) {
      setError('Passwords Didnt Match');
      setLoading(false);
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
      return showToast({ type: 'error', message: res.message });
    }

    showToast({ type: 'success', message: res.message });
    setLoading(false);
  };
  return (
    <>
      <Card style={{ borderRadius: 0 }}>
        <Form layout="vertical" style={{ maxWidth: 400 }}>
          <Form.Item label="Old Password">
            <Input.Password
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter Old Password"
              required
            />
          </Form.Item>
          <Form.Item label="New Password">
            <Input.Password
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter New Password"
              required
            />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input.Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </Form.Item>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <Button
            loading={loading}
            onClick={handleChangePassword}
            type="primary"
          >
            Save
          </Button>
        </Form>
      </Card>
    </>
  );
};
