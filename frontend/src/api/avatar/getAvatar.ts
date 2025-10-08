import type { AvatarType } from '../../types/avatarType';

export const getAvatars = async (id: string | null): Promise<AvatarType[]> => {
  const res = await fetch(`http://localhost:5051/avatar/getAvatar/${id}`);

  const data = await res.json();

  if (!data.success) {
    return data.data;
  }

  return data.data ?? [];
};
