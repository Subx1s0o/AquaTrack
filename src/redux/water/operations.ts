import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  ApiResponseWaterDay,
  ApiResponseWaterMonth,
} from 'types/WaterResponse';
import { WaterDayData, WaterMonthData } from 'types/WaterTypes';

import { privateInstance } from '../api';

export const fetchTodayWater = createAsyncThunk<number, void>(
  'water/fetchTodayWater',
  async (_, { rejectWithValue }) => {
    try {
      const today = new Date().toISOString().split('T')[0];

      const response = await privateInstance.get(`/water/day/${today}`);

      const data = await response.data;
      return data.totalPercentage;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Failed to fetch today data.');
    }
  },
);

export const fetchDayData = createAsyncThunk<
  ApiResponseWaterDay,
  string,
  { rejectValue: string }
>('water/day/:YYYY-MM-DD"', async (dateRequested, thunkAPI) => {
  try {
    const { data } = await privateInstance.get<ApiResponseWaterDay>(
      `/water/day/${dateRequested}`,
    );

    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('Fetch Month Data Failed');
  }
});

export const addWaterData = createAsyncThunk<
  WaterDayData,
  WaterDayData,
  { rejectValue: string }
>('water/addWater', async (water, thunkAPI) => {
  try {
    const response = await privateInstance.post('/water', water);
    return response.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('Add water failed');
  }
});

export const deleteWaterData = createAsyncThunk<
  { id: string },
  string,
  { rejectValue: string }
>('water/deleteWater', async (waterId, thunkAPI) => {
  try {
    await privateInstance.delete(`/water/${waterId}`);
    return { id: waterId };
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('Delete water failed');
  }
});

export const updateWaterData = createAsyncThunk<
  WaterDayData,
  Partial<WaterDayData> & { waterId: string },
  { rejectValue: string }
>('contacts/updateWater', async ({ waterId, ...water }, thunkAPI) => {
  try {
    const response = await privateInstance.patch(`/water/${waterId}`, water);
    return response.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('Edit water value or time failed');
  }
});

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
