import { API_USER } from '../../routes/paths';

type DeleteUserRes = {
  success: boolean;
  message: string;
};

export const deleteAccount = async (userId: string | null) => {
  const res = await fetch(`${API_USER}/deleteAccount/${userId}`, {
    method: 'DELETE',
  });

  return (await res.json()) as DeleteUserRes;
};
