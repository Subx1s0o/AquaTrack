import { RootState } from '../store';

export const selectMonthWater = (state: RootState) =>
  state.waterMonth.water.items;
export const selectMonthLoading = (state: RootState) =>
  state.waterMonth.water.loading;
export const selectMonthError = (state: RootState) =>
  state.waterMonth.water.error;
