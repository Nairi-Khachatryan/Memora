export const updateBlock = async (blokcId: string, updatedValue: string) => {
  const res = await fetch(`http://localhost:5051/user/updateBlock/${blokcId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ updatedValue }),
  });

  return await res.json();
};
