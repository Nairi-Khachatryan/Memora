import { API_BLOCK } from '../../routes/paths';

interface DeleteBlock {
  success: boolean;
  message: number;
}

export const deleteBlock = async (BLOCK_ID: string) => {
  const res = await fetch(`${API_BLOCK}/deleteBlock/${BLOCK_ID}`, {
    method: 'DELETE',
  });

  return (await res.json()) as DeleteBlock;
};
