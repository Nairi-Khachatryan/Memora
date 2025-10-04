import { changePassword } from '../../../api/changePassword';
import { useAppSelector } from '../../../app/hooks';
import { Card, Form, Input, Button } from 'antd';
import { useState } from 'react';

export const PasswordTab = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const USER_ID = useAppSelector((state) => state.user.id);

  console.log(error);

  const handleChangePassword = async () => {
    if (confirmPassword !== newPassword) {
      setError('Passwords Didnt Match');
      return;
    }

    if (!USER_ID) {
      return setError('Invalid User ID');
    }

    const res = await changePassword(USER_ID, oldPassword, newPassword);

    console.log(res, 'res on component');
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
              required={true}
            />
          </Form.Item>
          <Form.Item label="New Password">
            <Input.Password
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter New Password"
              required={true}
            />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input.Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Button onClick={handleChangePassword} type="primary">
            Save
          </Button>
        </Form>
      </Card>
    </>
  );
};
