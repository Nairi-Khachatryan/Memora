export const updateAvatar = async (avatarId: string, updatedValue) => {
  const res = await fetch(
    `http://localhost:5051/avatar/updateAvatar/${avatarId}`,
    {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedValue),
    }
  );

  return await res.json();
};
