import type { AvatarType } from '../../types/avatarType';



export const createAvatar = async (values: AvatarType) => {
  const res = await fetch('http://localhost:5051/avatar/createAvatar', {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ values }),
  });

  return await res.json();
};
