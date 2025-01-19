import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { AuthResponse } from 'types/AuthResponse';

import { User } from '@/types';

import { getUser, login, logout, register } from './operations';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const setLoading = (state: AuthState) => {
  state.loading = true;
  state.error = null;
};

const setError = (
  state: AuthState,
  action: PayloadAction<string | undefined>,
) => {
  state.loading = false;
  state.error = action.payload || 'An error occurred.';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, setLoading)
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.isAuthenticated = true;
          setCookies(action.payload);
        },
      )
      .addCase(register.rejected, setError)

      .addCase(login.pending, setLoading)
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.isAuthenticated = true;
          setCookies(action.payload);
        },
      )
      .addCase(login.rejected, setError)

      .addCase(logout.pending, setLoading)
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        removeCookies();
      })
      .addCase(logout.rejected, setError)
      .addCase(getUser.pending, setLoading)
      .addCase(getUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getUser.rejected, setError);
  },
});

function setCookies(authResponse: AuthResponse) {
  Cookies.set('accessToken', authResponse.accessToken);
  Cookies.set('refreshToken', authResponse.refreshToken);
  Cookies.set('sessionId', authResponse.sessionId);
}

function removeCookies() {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  Cookies.remove('sessionId');
}
export const { resetError } = authSlice.actions;
export default authSlice.reducer;
