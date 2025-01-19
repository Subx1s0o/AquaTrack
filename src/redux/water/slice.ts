/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiResponseWaterDay } from 'types/WaterResponse';
import { WaterDayData, WaterMonthData } from 'types/WaterTypes';

import { fetchDayData } from './operations';
import { fetchMonthData } from './operations';
import { fetchTodayWater } from './operations';

interface WaterState {
  waterMonthly: {
    data: WaterMonthData[];
    isLoading: boolean;
    isError: string | null;
    currentDate: string;
  };
  waterDaily: {
    data: WaterDayData[];
    amount: number;
    percentage: number;
    date: string;
    isLoading: boolean;
    isError: string | null;
    errorMessage: string | null;
    successMessage: string | null;
  };
  todayPercentage: {
    value: number;
    isLoading: boolean;
    isError: string | null;
  };
}

const handleMonthPending = (state: WaterState) => {
  state.waterMonthly.isLoading = true;
  state.waterMonthly.isError = null;
};

const handleMonthRejected = (
  state: WaterState,
  action: PayloadAction<string | undefined>,
) => {
  state.waterMonthly.isLoading = false;
  const errorMessage = action.payload ?? null;
  state.waterMonthly.isError = errorMessage;
  state.waterMonthly.data = [];
};

const handleDayPending = (state: WaterState) => {
  state.waterDaily.isLoading = true;
  state.waterDaily.isError = null;
};

const handleDayRejected = (
  state: WaterState,
  action: PayloadAction<string | undefined>,
) => {
  state.waterDaily.isLoading = false;
  const errorMessage = action.payload ?? null;
  state.waterDaily.isError = errorMessage;
  state.waterDaily.data = [];
  state.waterDaily.amount = 0;
  state.waterDaily.percentage = 0;
  state.waterDaily.date = '';
};

const handleTodayPending = (state: WaterState) => {
  state.todayPercentage.isLoading = true;
  state.todayPercentage.isError = null;
};

const handleTodayRejected = (state: WaterState, action: PayloadAction<any>) => {
  state.todayPercentage.isLoading = false;
  state.todayPercentage.isError = action.payload ?? 'An error occurred';
};

const initialState: WaterState = {
  waterMonthly: {
    data: [],
    isLoading: false,
    isError: null,
    currentDate: new Date().toISOString(),
  },
  waterDaily: {
    data: [],
    amount: 0,
    percentage: 0,
    isLoading: false,
    date: '',
    isError: null,
    errorMessage: null,
    successMessage: null,
  },
  todayPercentage: {
    value: 0,
    isLoading: false,
    isError: null,
  },
};

const slice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.waterMonthly.currentDate = action.payload;
    },

    nextMonth: state => {
      const current = new Date(state.waterMonthly.currentDate);
      current.setMonth(current.getMonth() + 1);
      state.waterMonthly.currentDate = current.toISOString();
    },
    previousMonth: state => {
      const current = new Date(state.waterMonthly.currentDate);
      current.setMonth(current.getMonth() - 1);
      state.waterMonthly.currentDate = current.toISOString();
    },
  },
  extraReducers: builder => {
    builder
      // Month Data
      .addCase(fetchMonthData.pending, handleMonthPending)
      .addCase(
        fetchMonthData.fulfilled,
        (state: WaterState, action: PayloadAction<WaterMonthData[]>) => {
          state.waterMonthly.isLoading = false;
          state.waterMonthly.isError = null;
          state.waterMonthly.data = action.payload;
        },
      )
      .addCase(fetchMonthData.rejected, handleMonthRejected)

      // Day Data
      .addCase(fetchDayData.pending, handleDayPending)
      .addCase(
        fetchDayData.fulfilled,
        (state: WaterState, action: PayloadAction<ApiResponseWaterDay>) => {
          state.waterDaily.isLoading = false;
          state.waterDaily.isError = null;
          state.waterDaily.data = action.payload.records;
          state.waterDaily.percentage = action.payload.totalPercentage;
          state.waterDaily.date = action.payload.date;
        },
      )
      .addCase(fetchDayData.rejected, handleDayRejected)

      // Today Water Data
      .addCase(fetchTodayWater.pending, handleTodayPending)
      .addCase(
        fetchTodayWater.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.todayPercentage.isLoading = false;
          state.todayPercentage.value = action.payload;
        },
      )

      .addCase(fetchTodayWater.rejected, handleTodayRejected);
  },
});
export const { setCurrentDate, nextMonth, previousMonth } = slice.actions;
export const waterSlice = slice.reducer;
