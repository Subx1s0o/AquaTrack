import { createSlice } from '@reduxjs/toolkit';

import { DateState } from './../../../types/DateTypes';

const initialState: DateState = {
  date: new Date().toISOString(),
};

const slice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    nextMonth: (state: DateState) => {
      const current = new Date(state.date);
      // Set to first day of next month
      current.setMonth(current.getMonth() + 1);
      state.date = current.toISOString();
    },
    previousMonth: (state: DateState) => {
      const current = new Date(state.date);
      // Set to first day of previous month
      current.setMonth(current.getMonth() - 1);
      state.date = current.toISOString();
    },
  },
});

export const { nextMonth, previousMonth } = slice.actions;
export const dateSlice = slice.reducer;
