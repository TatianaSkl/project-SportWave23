import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
};

const statistics = createSlice({
  name: 'statistics',
  initialState,
});

export const statisticsReducer = statistics.reducer;
