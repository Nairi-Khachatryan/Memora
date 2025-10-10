import { API_USER } from '../../routes/paths';

export const getUser = async (USER_ID: string | null) => {
  const res = await fetch(`${API_USER}/getMe/${USER_ID}`, {
    method: 'GET',
  });

  const data = await res.json();

  if (!data.success) throw new Error(data.message);

  return data.data;
};
