import { createSlice } from '@reduxjs/toolkit';

import { fetchMonthData } from './operations';

const handlePending = state => {
  state.water.loading = true;
};

const handleRejected = (state, action) => {
  state.water.loading = false;
  state.water.error = action.payload;
};

const slice = createSlice({
  name: 'water',
  initialState: {
    water: {
      items: [],
      loading: false,
      error: null,
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMonthData.pending, handlePending)
      .addCase(fetchMonthData.fulfilled, (state, action) => {
        state.water.loading = false;
        state.water.error = null;
        state.water.items = action.payload;
      })
      .addCase(fetchMonthData.rejected, handleRejected);
    //   .addCase(logout.fulfilled, state => {
    //     state.contacts.loading = false;
    //     state.contacts.error = null;
    //     state.contacts.items = [];
    //   });
  },
});

export const waterSlice = slice.reducer;
