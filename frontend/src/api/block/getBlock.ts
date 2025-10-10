import {  API_BLOCK } from '../../routes/paths';

type BlockType = {
  _id: string;
  lable: string;
  text: string;
  ownerId: string;
};

export const getBlock = async (id: string | null): Promise<BlockType[]> => {
  const res = await fetch(`${API_BLOCK}/getBlock/${id}`, {
    method: 'GET',
  });

  const data = await res.json();

  if (!data.success) {
    return data.data;
  }

  return data.data ?? [];
};
