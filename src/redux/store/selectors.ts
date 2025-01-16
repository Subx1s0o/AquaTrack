import { RootState } from '../store';

export const selectUser = (state: RootState) => state.store.user;

export const selectIsAuthenticated = (state: RootState) =>
  state.store.isAuthenticated;
export const selectIsLoading = (state: RootState) => state.store.loading;

export const selectIsError = (state: RootState) => state.store.error;
