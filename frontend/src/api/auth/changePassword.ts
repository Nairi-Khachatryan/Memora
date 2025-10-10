import { API_AUTH } from '../../routes/paths';

interface ChangePassRes {
  success: boolean;
  message: string;
}

export const changePassword = async (
  userId: string,
  oldPassword: string,
  newPassword: string
): Promise<ChangePassRes> => {
  const res = await fetch(`${API_AUTH}/changePassword/${userId}`, {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ oldPassword, newPassword }),
  });

  return await res.json();
};
