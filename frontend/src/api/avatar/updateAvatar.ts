import { API_AVATAR } from '../../routes/paths';

export const updateAvatar = async (avatarId: string, updatedValue) => {
  const res = await fetch(`${API_AVATAR}/updateAvatar/${avatarId}`, {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedValue),
  });

  return await res.json();
};
