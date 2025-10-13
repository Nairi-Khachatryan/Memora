import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import type { Props } from './ChangePassForm.types';

export const ChangePassForm: React.FC<Props> = ({
  error,
  loading,
  oldPassword,
  newPassword,
  setNewPassword,
  setOldPassword,
  confirmPassword,
  setConfirmPassword,
  handleChangePassword,
}) => {
  return (
    <>
      <Card style={{ borderRadius: 0 }}>
        <Form layout="vertical" style={{ maxWidth: 400 }}>
          <Form.Item label="Old Password">
            <Input.Password
              autoComplete="old-password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter Old Password"
              required
            />
          </Form.Item>
          <Form.Item label="New Password">
            <Input.Password
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter New Password"
              required
            />
          </Form.Item>
          <Form.Item label="Confirm Password">
            <Input.Password
              autoComplete="confirm-password"
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
