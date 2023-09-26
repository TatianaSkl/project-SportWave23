import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

export const getStatistics = createAsyncThunk(
  'statistics/getStatistics',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/statistics`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
