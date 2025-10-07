import { createSlice } from '@reduxjs/toolkit';
import { createUser, signInUser } from '../../api/auth/authApi';
import { updateUserInfo } from '../../api/user/updateUserInfo';

interface UserState {
  email: string | null;
  id: string | null;
  name: string | null;
  surname: string | null;
  phone: string | null;
}

const initialState: UserState = {
  email: null,
  id: null,
  name: null,
  surname: null,
  phone: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: () => {
      return { ...initialState };
    },
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
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.name = action.payload.data.name;
        state.surname = action.payload.data.surname;
        state.phone = action.payload.data.phone;
      });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
