import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_AUTH } from '../../routes/paths';

type reqParams = {
  email: string;
  password: string;
};

type createUserResponce = {
  success: boolean;
  message: string;
  data?: {
    email: string;
    id: string;
  };
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: reqParams) => {
    const res = await fetch(`${API_AUTH}/signUp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    return (await res.json()) as createUserResponce;
  }
);

export const signInUser = createAsyncThunk(
  'user/signIn',
  async ({ email, password }: reqParams) => {
    const res = await fetch(`${API_AUTH}/signIn`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    return (await res.json()) as createUserResponce;
  }
);
