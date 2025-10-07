export const deleteBlock = async (BLOCK_ID: string) => {
  const res = await fetch(
    `http://localhost:5051/user/deleteBlock/${BLOCK_ID}`,
    {
      method: 'DELETE',
    }
  );

  return await res.json();
};
