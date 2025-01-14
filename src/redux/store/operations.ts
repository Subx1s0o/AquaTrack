import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { User } from 'types/user';

import { privateInstance, publicInstance } from '../api';

interface AuthCredentials {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<
  User,
  AuthCredentials,
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await publicInstance.post<User>(
      '/auth/register',
      credentials,
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('Registration failed.');
  }
});

export const loginUser = createAsyncThunk<
  User,
  AuthCredentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await publicInstance.post<User>(
      '/auth/login',
      credentials,
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('Login failed.');
  }
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await privateInstance.post('/auth/logout');
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Logout failed.');
    }
  },
);

export const getUser = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await privateInstance.get<User>('/users');
      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Failed to fetch user.');
    }
  },
);
