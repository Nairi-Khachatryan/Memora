import { API_BLOCK } from '../../routes/paths';

export const updateBlock = async (blokcId: string, updatedValue: string) => {
  const res = await fetch(`${API_BLOCK}/updateBlock/${blokcId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ updatedValue }),
  });

  return await res.json();
};
