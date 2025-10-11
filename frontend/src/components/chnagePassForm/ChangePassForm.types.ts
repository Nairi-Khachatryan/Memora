import React from 'react';

export type Props = {
  error: string;
  loading: boolean;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  setOldPassword: React.Dispatch<React.SetStateAction<string>>;
  handleChangePassword: () => Promise<void>;
};
