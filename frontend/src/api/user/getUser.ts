export const getUser = async (USER_ID: string | null ) => {
  const res = await fetch(`http://localhost:5051/user/getMe/${USER_ID}`, {
    method: 'GET',
  });

  const data = await res.json();

  if (!data.success) throw new Error(data.message);

  return data.data; 
};