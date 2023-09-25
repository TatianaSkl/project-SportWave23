import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

export const getstatistics = createAsyncThunk(
  'statistics',
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/statistics`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
