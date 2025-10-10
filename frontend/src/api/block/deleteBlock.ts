import { API_BLOCK } from '../../routes/paths';

export const deleteBlock = async (BLOCK_ID: string) => {
  const res = await fetch(`${API_BLOCK}/deleteBlock/${BLOCK_ID}`, {
    method: 'DELETE',
  });

  return await res.json();
};
