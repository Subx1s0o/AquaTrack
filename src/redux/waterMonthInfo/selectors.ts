import { RootState } from '../store';

export const selectMonthWater = (state: RootState) => state.waterMonth.records;
export const selectMonthLoading = (state: RootState) =>
  state.waterMonth.loading;

export const selectMonthError = (state: RootState) => state.waterMonth.error;
