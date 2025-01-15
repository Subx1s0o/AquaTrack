import { RootState } from '../store';

export const selectDate = (state: RootState) => state.date.date;
