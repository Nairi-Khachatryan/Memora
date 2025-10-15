import React from 'react';

export type Props = {
  error: string;
  loading: boolean;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  handleCancelChangePass: () => void;
  handleChangePassword: () => Promise<void>;
  setOldPassword: React.Dispatch<React.SetStateAction<string>>;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
};
