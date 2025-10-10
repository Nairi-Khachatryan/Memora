import { API_BLOCK } from '../../routes/paths';

interface reqParams {
  lable: string;
  text: string;
  ownerId: string | null;
}

export const createBlock = async ({ lable, text, ownerId }: reqParams) => {
  const res = await fetch(`${API_BLOCK}/createBlock`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lable, text, ownerId }),
  });

  return await res.json();
};
