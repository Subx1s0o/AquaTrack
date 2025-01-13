import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'types/user';

import { AuthResponse } from './AuthResponse';
import { loginUser, logoutUser, registerUser } from './operations';

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
      .addCase(registerUser.pending, setLoading)
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.isAuthenticated = true;
        },
      )
      .addCase(registerUser.rejected, setError)

      .addCase(loginUser.pending, setLoading)
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.isAuthenticated = true;
        },
      )
      .addCase(loginUser.rejected, setError)

      .addCase(logoutUser.pending, setLoading)
      .addCase(logoutUser.fulfilled, state => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, setError);
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;
