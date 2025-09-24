import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  token: string | null;
  id: string | null;
  name: string | null;
  surname: string | null;
}

const initialState: UserState = {
  email: null,
  token: null,
  id: null,
  name: null,
  surname: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: () => {},
    removeUser: () => {},
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
