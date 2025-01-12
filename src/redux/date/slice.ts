import { createSlice } from '@reduxjs/toolkit';

import { DateState } from './../../../types/DateTypes';

const initialState: DateState = {
  date: new Date().toISOString(),
  blockChangeMonthBtn: true,
};

const todayDate = new Date();
const todayYearMonth = new Date(
  todayDate.getFullYear(),
  todayDate.getMonth(),
  // todayDate.getDay(),
);

const slice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    nextMonth: state => {
      const current = new Date(state.date);
      // Set to first day of next month
      current.setMonth(current.getMonth() + 1);
      state.date = current.toISOString();
      const currentYearMonth = new Date(
        current.getFullYear(),
        current.getMonth(),
        // current.getDay(),
      );
      state.blockChangeMonthBtn = currentYearMonth >= todayYearMonth;
    },
    previousMonth: state => {
      const current = new Date(state.date);
      // Set to first day of previous month
      current.setMonth(current.getMonth() - 1);
      state.date = current.toISOString();
      const currentYearMonth = new Date(
        current.getFullYear(),
        current.getMonth(),
        // current.getDay(),
      );
      state.blockChangeMonthBtn = currentYearMonth >= todayYearMonth;
    },
  },
});

export const { nextMonth, previousMonth } = slice.actions;
export const dateSlice = slice.reducer;
