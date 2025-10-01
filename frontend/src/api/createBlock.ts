import { createAsyncThunk } from '@reduxjs/toolkit';

interface reqParams {
  lable: string;
  text: string;
  ownerId: string | null;
}

// export const createBlock = createAsyncThunk(
//   'user/createBlock',
//   async ({ lable, text, ownerId }: reqParams) => {
//     console.log(lable);

//     const res = await fetch('http://localhost:5051/user/createBlock', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ lable, text, ownerId }),
//     });

//     console.log(res, 'res');
//   }
// );

export const createBlock = async ({ lable, text, ownerId }: reqParams) => {
  const res = await fetch('http://localhost:5051/user/createBlock', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lable, text, ownerId }),
  });

  return (await res.json());
};
