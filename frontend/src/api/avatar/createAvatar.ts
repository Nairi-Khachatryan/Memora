import { API_AVATAR } from '../../routes/paths';
import type { AvatarType } from '../../types/avatarType';

export const createAvatar = async (values: AvatarType) => {
  const res = await fetch(`${API_AVATAR}/createAvatar`, {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ values }),
  });

  return await res.json();
};
