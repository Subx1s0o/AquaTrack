import { createAsyncThunk } from '@reduxjs/toolkit';

import { waterApi } from '../waterMonthInfo/operations';

export const fetchDayData: any = createAsyncThunk(
  'water/day/fetchAll"',
  async (dateRequested, thunkAPI) => {
    try {
      const response = await waterApi.get(`/water/day/${dateRequested}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
