type Values = {
  name: string;
  surname: string;
  email?: string;
  role?: string;
  ownerId: string;
};

export const createAvatar = async (values: Values) => {
  const res = await fetch('http://localhost:5051/avatar/createAvatar', {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ values }),
  });

  return await res.json();
};
