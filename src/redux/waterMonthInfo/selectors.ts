import { Store } from 'types/WaterTypes';

export const selectMonthWater = (state: Store) => state.waterMonth.water.items;
export const selectMonthLoading = (state: Store) =>
  state.waterMonth.water.loading;
export const selectMonthError = (state: Store) => state.waterMonth.water.error;
