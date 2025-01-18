import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WaterMonthData, WaterMonthState } from 'types/WaterTypes';

import { fetchMonthData } from './operations';

const handlePending = (state: WaterMonthState) => {
  state.water.loading = true;
};

const handleRejected = (
  state: WaterMonthState,
  action: PayloadAction<string | undefined>,
) => {
  state.water.loading = false;
  state.water.error = action.payload;
  state.water.items = [];
};

const initialState: WaterMonthState = {
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
      .addCase(fetchMonthData.pending, handlePending)
      .addCase(
        fetchMonthData.fulfilled,
        (state: WaterMonthState, action: PayloadAction<WaterMonthData[]>) => {
          state.water.loading = false;
          state.water.error = null;
          state.water.items = action.payload;
        },
      )
      .addCase(fetchMonthData.rejected, handleRejected);
  },
});

export const waterMonthSlice = slice.reducer;
