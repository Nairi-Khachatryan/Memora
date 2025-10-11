import { API_AVATAR } from '../../routes/paths';

interface DeleteResponce {
  success: boolean;
  message: string;
}

export const deleteAvatar = async (
  ownerId: string | null,
  idx: number
): Promise<DeleteResponce> => {
  const res = await fetch(`${API_AVATAR}/deleteAvatar/${ownerId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idx }),
  });

  return await res.json();
};
