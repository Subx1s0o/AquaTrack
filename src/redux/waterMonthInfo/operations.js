import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const waterApi = axios.create({
  baseURL: 'https://6781657985151f714b0a9a51.mockapi.io/',
});

export const fetchMonthData = createAsyncThunk(
  'water/fetchAll"',
  async (_, thunkAPI) => {
    try {
      const response = await waterApi.get('/water/month');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
