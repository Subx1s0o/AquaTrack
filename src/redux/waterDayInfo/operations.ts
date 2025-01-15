import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ApiResponseWaterDay } from 'types/WaterResponse';
import { WaterDayData } from 'types/WaterTypes';

import { privateInstance } from '../api';

export const fetchDayData = createAsyncThunk<
  WaterDayData[],
  string,
  { rejectValue: string }
>('water/day/:YYYY-MM-DD"', async (dateRequested, { rejectWithValue }) => {
  try {
    const response = await privateInstance.get<ApiResponseWaterDay>(
      `/water/day/${dateRequested}`,
    );
    return response.data.records;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      return rejectWithValue(e.response.data.message);
    }
    return rejectWithValue('Fetch Month Data Failed');
  }
});
