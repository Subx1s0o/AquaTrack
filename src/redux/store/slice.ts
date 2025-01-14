import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'types/user';

import { getUser, loginUser, logoutUser, registerUser } from './operations';

interface StoreState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: StoreState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const setLoading = (state: StoreState) => {
  state.loading = true;
  state.error = null;
};

const setError = (
  state: StoreState,
  action: PayloadAction<string | undefined>,
) => {
  state.loading = false;
  state.error = action.payload || 'An error occurred.';
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, setLoading)
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, setError)

      .addCase(loginUser.pending, setLoading)
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, setError)

      .addCase(logoutUser.pending, setLoading)
      .addCase(logoutUser.fulfilled, state => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, setError)
      .addCase(getUser.pending, setLoading)
      .addCase(getUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getUser.rejected, setError);
  },
});

export const { resetError } = storeSlice.actions;
export default storeSlice.reducer;
