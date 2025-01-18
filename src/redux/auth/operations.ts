import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AuthResponse } from 'types/AuthResponse';

import { User } from '@/types';

import { privateInstance, publicInstance } from '../api';

interface AuthCredentials {
  email: string;
  password: string;
}

export const register = createAsyncThunk<
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

export const login = createAsyncThunk<
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

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
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
export const updateUserInfo = createAsyncThunk<
  User,
  { name?: string; email?: string; avatarURL?: string; dailyNorm: number },
  { rejectValue: string }
>('auth/getUser', async (userInfo, { rejectWithValue }) => {
  try {
    const { data } = await privateInstance.patch<User>('/users', userInfo);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      return rejectWithValue(error.response.data.message);
    }
    return rejectWithValue('Failed to fetch user.');
  }
});
