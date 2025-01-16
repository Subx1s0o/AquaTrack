import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ApiResponseWaterDay } from 'types/WaterResponse';
import { WaterDayData } from 'types/WaterTypes';

import { privateInstance } from '../api';

export const fetchDayData = createAsyncThunk<
  WaterDayData[],
  string,
  { rejectValue: string }
>('water/day/:YYYY-MM-DD"', async (dateRequested, thunkAPI) => {
  try {
    const response = await privateInstance.get<ApiResponseWaterDay>(
      `/water/day/${dateRequested}`,
    );
    return response.data.records;
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
  { waterId: string; amount?: number; date?: string; time?: string },
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
