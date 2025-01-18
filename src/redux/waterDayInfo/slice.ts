/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiResponseWaterDay } from 'types/WaterResponse';
import { WaterDayData, WaterDayState } from 'types/WaterTypes';

import {
  addWaterData,
  deleteWaterData,
  fetchDayData,
  updateWaterData,
} from './operations';

const initialState: WaterDayState = {
  water: {
    items: [],
    loading: false,
    error: null,
    totalPercentage: 0,
  },
};

const handlePending = (state: WaterDayState) => {
  state.water.loading = true;
};

const handleRejected = (
  state: WaterDayState,
  action: PayloadAction<string | undefined>,
) => {
  state.water.loading = false;
  state.water.error = action.payload;
  state.water.items = [];
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
        (state: WaterDayState, action: PayloadAction<ApiResponseWaterDay>) => {
          state.water.loading = false;
          state.water.error = null;
          state.water.items = action.payload.records;
          state.water.totalPercentage = action.payload.totalPercentage;
        },
      )
      .addCase(fetchDayData.rejected, handleRejected)
      .addCase(addWaterData.pending, handlePending)
      .addCase(
        addWaterData.fulfilled,
        (state: WaterDayState, action: PayloadAction<WaterDayData>) => {
          state.water.loading = false;
          state.water.error = null;
          state.water.items.push(action.payload);
        },
      )
      .addCase(addWaterData.rejected, handleRejected)
      .addCase(deleteWaterData.pending, handlePending)
      .addCase(
        deleteWaterData.fulfilled,
        (state: WaterDayState, action: PayloadAction<any>) => {
          state.water.loading = false;
          state.water.error = null;
          state.water.items = state.water.items.filter(
            item => item._id !== action.payload.id,
          );
        },
      )
      .addCase(deleteWaterData.rejected, handleRejected)
      .addCase(updateWaterData.pending, handlePending)
      .addCase(
        updateWaterData.fulfilled,
        (state: WaterDayState, action: PayloadAction<any>) => {
          state.water.loading = false;
          state.water.error = null;
          const updatedWater = action.payload;
          const waterIndex = state.water.items.findIndex(
            item => item._id === updatedWater._id,
          );
          state.water.items[waterIndex] = updatedWater;
        },
      )
      .addCase(updateWaterData.rejected, handleRejected);
  },
});

export const waterDaySlice = slice.reducer;
