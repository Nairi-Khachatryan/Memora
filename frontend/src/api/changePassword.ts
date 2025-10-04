export const changePassword = async (
  userId: string,
  oldPassword: string,
  newPassword: string
) => {
  const res = await fetch(
    `http://localhost:5051/auth/changePassword/${userId}`,
    {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oldPassword, newPassword }),
    }
  );

  return await res.json();
};
