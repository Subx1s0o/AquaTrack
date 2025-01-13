import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { privateInstance, publicInstance } from '../api';
import { AuthResponse } from './AuthResponse';

interface AuthCredentials {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<
  AuthResponse,
  AuthCredentials,
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await publicInstance.post<AuthResponse>(
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
  AuthResponse,
  AuthCredentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await publicInstance.post<AuthResponse>(
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
      window.location.href = '/';
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Logout failed.');
    }
  },
);
