import { createSlice } from '@reduxjs/toolkit';
import { createUser, signInUser } from '../../api/authApi';

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
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.email = action.payload.data.email;
          state.id = action.payload.data.id;
        }
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.email = action.payload.data.email;
          state.id = action.payload.data.id;
        }
      });
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
