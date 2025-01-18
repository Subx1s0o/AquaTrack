import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ApiResponseWater, WaterData } from 'types/WaterTypes';

import { privateInstance } from '../api';

export const fetchDayData = createAsyncThunk<
  ApiResponseWater,
  string,
  { rejectValue: string }
>('water/day/:YYYY-MM-DD"', async (dateRequested, thunkAPI) => {
  try {
    const response = await privateInstance.get<ApiResponseWater>(
      `/water/day/${dateRequested}`,
    );
    return response.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('Fetch Month Data Failed');
  }
});

export const addWaterData = createAsyncThunk<
  WaterData,
  ApiResponseWater,
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
  WaterData,
  ApiResponseWater,
  { rejectValue: string }
>('water/deleteWater', async (waterId, thunkAPI) => {
  try {
    const response = await privateInstance.delete(`/water/${waterId}`);
    return response.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response?.data?.message) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
    return thunkAPI.rejectWithValue('Delete water failed');
  }
});

// export const updateWaterData = createAsyncThunk<
//   WaterData,
//   ApiResponseWater,
//   { rejectValue: string }
// >('contacts/updateWater', async ({records }, thunkAPI) => {
//   try {
//     const response = await privateInstance.patch(`/water/${water._id}`, water);
//     return response.data;
//   } catch (e) {
//     if (e instanceof AxiosError && e.response?.data?.message) {
//       return thunkAPI.rejectWithValue(e.response.data.message);
//     }
//     return thunkAPI.rejectWithValue('Edit water value or time failed');
//   }
// });
