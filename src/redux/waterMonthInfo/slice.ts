import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WaterState } from 'types/WaterTypes';

import { ApiResponseWater } from '@/types';

import { fetchMonthData } from './operations';

const handlePending = (state: WaterState) => {
  state.loading = true;
};

const handleRejected = (
  state: WaterState,
  action: PayloadAction<string | undefined>,
) => {
  state.loading = false;
  state.error = action.payload;
  state.records = [];
};

const initialState: WaterState = {
  records: [],
  totalPercentage: 0,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'waterMonth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMonthData.pending, handlePending)
      .addCase(
        fetchMonthData.fulfilled,
        (state: WaterState, action: PayloadAction<ApiResponseWater>) => {
          state.loading = false;
          state.error = null;
          state.records = action.payload.records;
          state.totalPercentage = action.payload.totalPercentage;
        },
      )
      .addCase(fetchMonthData.rejected, handleRejected);
  },
});

export const waterMonthSlice = slice.reducer;
