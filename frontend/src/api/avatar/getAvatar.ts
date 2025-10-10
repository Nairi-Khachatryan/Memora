import { API_AVATAR } from '../../routes/paths';
import type { AvatarType } from '../../types/avatarType';

export const getAvatars = async (id: string | null): Promise<AvatarType[]> => {
  const res = await fetch(`${API_AVATAR}/getAvatar/${id}`);

  const data = await res.json();

  if (!data.success) {
    return data.data;
  }

  return data.data ?? [];
};
