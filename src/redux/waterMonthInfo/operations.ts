import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ApiResponseWaterMonth } from 'types/WaterResponse';
import { WaterMonthData } from 'types/WaterTypes';

import { privateInstance } from '../api';

export const fetchMonthData = createAsyncThunk<
  WaterMonthData[],
  string,
  { rejectValue: string }
>('water/:YYYY-MM"', async (dateRequested, thunkAPI) => {
  try {
    const { data } = await privateInstance.get<ApiResponseWaterMonth>(
      `/water/month/${dateRequested}`,
    );
    return data.records;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('Fetch Month Data Failed');
  }
});
