import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ApiResponseWater, WaterData, WaterState } from '@/types';

import { addWaterData, deleteWaterData, fetchDayData } from './operations';

const initialState: WaterState = {
  records: [],
  totalPercentage: 0,
  loading: false,
  error: null,
};

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
  state.totalPercentage = 0;
};

const slice = createSlice({
  name: 'waterDay',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDayData.pending, handlePending)
      .addCase(
        fetchDayData.fulfilled,
        (state: WaterState, action: PayloadAction<ApiResponseWater>) => {
          state.loading = false;
          state.error = null;
          state.records = action.payload.records;
          state.totalPercentage = action.payload.totalPercentage;
        },
      )
      .addCase(fetchDayData.rejected, handleRejected)
      .addCase(addWaterData.pending, handlePending)
      .addCase(
        addWaterData.fulfilled,
        (state: WaterState, action: PayloadAction<WaterData>) => {
          state.loading = false;
          state.error = null;
          state.records.push(action.payload);
        },
      )
      .addCase(addWaterData.rejected, handleRejected)
      .addCase(deleteWaterData.pending, handlePending)
      .addCase(
        deleteWaterData.fulfilled,
        (state: WaterState, action: PayloadAction<WaterData>) => {
          state.loading = false;
          state.error = null;
          state.records = state.records.filter(
            item => item._id !== action.payload._id,
          );
        },
      )
      .addCase(deleteWaterData.rejected, handleRejected);
    // .addCase(updateWaterData.pending, handlePending)
    // .addCase(
    //   updateWaterData.fulfilled,
    //   (state: WaterState, action: PayloadAction<WaterData>) => {
    //     state.loading = false;
    //     state.error = null;
    //     const updatedWater = action.payload;
    //     const waterIndex = state.records.findIndex(
    //       item => item._id === updatedWater._id,
    //     );
    //     state.records[waterIndex] = updatedWater;
    //   },
    // )
    // .addCase(updateWaterData.rejected, handleRejected);
  },
});

export const waterDaySlice = slice.reducer;
