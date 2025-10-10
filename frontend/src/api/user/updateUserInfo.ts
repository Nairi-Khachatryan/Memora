import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_USER } from '../../routes/paths';

interface ValuesProp {
  name?: string;
  surname?: string;
  phone?: string;
}

export const updateUserInfo = createAsyncThunk(
  'user/updateInfo',
  async (
    { values, userId }: { values: ValuesProp; userId: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(`${API_USER}/updateUserInfo/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values }),
      });

      if (!res.ok) {
        return rejectWithValue(await res.text());
      }

      return await res.json();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
