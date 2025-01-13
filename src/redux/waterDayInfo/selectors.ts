import { Store } from 'types/WaterTypes';

export const selectDayWater = (state: Store) => state.waterDay.water.items;
export const selectDayLoading = (state: Store) => state.waterDay.water.loading;
export const selectDayError = (state: Store) => state.waterDay.water.error;
