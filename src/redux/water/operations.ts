import { createAsyncThunk } from '@reduxjs/toolkit';

import { waterApi } from '../waterMonthInfo/operations';

export const addWaterData: any = createAsyncThunk(
  'water/addWater',
  async (water, thunkAPI) => {
    try {
      const response = await waterApi.post('/water', water);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteWaterData: any = createAsyncThunk(
  'water/deleteWater',
  async (waterId, thunkAPI) => {
    try {
      const response = await waterApi.delete(`/water/${waterId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateWaterData: any = createAsyncThunk(
  'contacts/updateWater',
  async (
    {
      waterId,
      ...water
    }: { waterId: string; water: { volume: number; date: string } },
    thunkAPI,
  ) => {
    try {
      const response = await waterApi.patch(`/contacts/${waterId}`, water);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
