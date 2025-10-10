import { API_AVATAR } from '../../routes/paths';

interface UpdateAvatarResponse {
  success: boolean;
  message: string;
}

interface UpdatedValue {
  name?: string;
  surname?: string;
  role?: string;
  email?: string;
  phone?: string;
}

export const updateAvatar = async (
  avatarId: string,
  updatedValue: UpdatedValue
): Promise<UpdateAvatarResponse> => {
  const res = await fetch(`${API_AVATAR}/updateAvatar/${avatarId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedValue),
  });

  return res.json();
};
