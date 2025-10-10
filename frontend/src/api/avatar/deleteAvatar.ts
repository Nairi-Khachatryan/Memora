import { API_AVATAR } from '../../routes/paths';

export const deleteAvatar = async (ownerId: string | null) => {
  const res = await fetch(`${API_AVATAR}/deleteAvatar/${ownerId}`, {
    method: 'Delete',
  });

  return await res.json();
};
