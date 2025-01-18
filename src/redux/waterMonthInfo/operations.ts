import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ApiResponseWater } from 'types/WaterTypes';

import { privateInstance } from '../api';

export const fetchMonthData = createAsyncThunk<
  ApiResponseWater,
  string,
  { rejectValue: string }
>('water/:YYYY-MM"', async (dateRequested, thunkAPI) => {
  try {
    const { data } = await privateInstance.get<ApiResponseWater>(
      `/water/month/${dateRequested}`,
    );
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('Fetch Month Data Failed');
  }
});
