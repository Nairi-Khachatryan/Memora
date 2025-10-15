import { API_AVATAR } from '../../routes/paths';
// import type { AvatarType } from '../../types/avatarType';
import type { AvatarType } from '../../pages/avatarDetailInfo/AvatarDetail.types';

interface CreateAvatarRes {
  success: boolean;
  message: string;
}

export const createAvatar = async (
  values: AvatarType
): Promise<CreateAvatarRes> => {
  const res = await fetch(`${API_AVATAR}/createAvatar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ values }),
  });

  return await res.json();
};
