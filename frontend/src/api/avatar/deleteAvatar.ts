export const deleteAvatar = async (ownerId: string | null) => {
  const res = await fetch(
    `http://localhost:5051/avatar/deleteAvatar/${ownerId}`,
    {
      method: 'Delete',
    }
  );

  return await res.json();
};
