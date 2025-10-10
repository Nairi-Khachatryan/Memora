import { API_AVATAR } from '../../routes/paths';

interface DeleteResponce {
  success: boolean;
  message: string;
}

export const deleteAvatar = async (
  ownerId: string | null
): Promise<DeleteResponce> => {
  const res = await fetch(`${API_AVATAR}/deleteAvatar/${ownerId}`, {
    method: 'DELETE',
  });

  return await res.json();
};
