import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WaterState } from 'types/WaterTypes';

import { addWaterData, deleteWaterData, updateWaterData } from './operations';

const handlePending = (state: WaterState) => {
  state.water.loading = true;
};

const handleRejected = (state: WaterState, action: PayloadAction<any>) => {
  state.water.loading = false;
  state.water.error = action.payload;
  //   state.water.items = [];
};

const initialState: WaterState = {
  water: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'waterMonth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addWaterData.pending, handlePending)
      .addCase(addWaterData.fulfilled, (state, action) => {
        state.water.loading = false;
        state.water.error = null;
        state.water.items.push(action.payload);
      })
      .addCase(addWaterData.rejected, handleRejected)
      .addCase(deleteWaterData.pending, handlePending)
      .addCase(deleteWaterData.fulfilled, (state, action) => {
        state.water.loading = false;
        state.water.error = null;
        state.water.items = state.water.items.filter(
          item => item._id !== action.payload.id,
        );
      })
      .addCase(deleteWaterData.rejected, handleRejected)
      .addCase(updateWaterData.pending, handlePending)
      .addCase(updateWaterData.fulfilled, (state, action) => {
        state.water.loading = false;
        state.water.error = null;
        const updatedWater = action.payload;
        const waterIndex = state.water.items.findIndex(
          item => item._id === updatedWater.id,
        );
        state.water.items[waterIndex] = updatedWater;
      })
      .addCase(updateWaterData.rejected, handleRejected);
  },
});

export const waterSlice = slice.reducer;
