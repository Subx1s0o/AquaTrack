import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WaterDayData, WaterDayState } from 'types/WaterTypes';

import { fetchDayData } from './operations';

const initialState: WaterDayState = {
  water: {
    items: [],
    loading: false,
    error: null,
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
        (state, action: PayloadAction<WaterDayData[]>) => {
          state.water.loading = false;
          state.water.error = null;
          state.water.items = action.payload;
        },
      )
      .addCase(fetchDayData.rejected, handleRejected);
  },
});

export const waterDaySlice = slice.reducer;
