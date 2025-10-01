interface valuesProp {
  name?: string;
  surname?: string;
  phone?: string;
}

export const updateUserInfo = async (values: valuesProp, userId: string) => {
  const res = await fetch(
    `http://localhost:5051/user/updateUserInfo/${userId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ values }),
    }
  );

  return await res.json();
};
