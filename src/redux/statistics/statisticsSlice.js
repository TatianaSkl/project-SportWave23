import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  statistics: {},
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
};

const statistics = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: builder => {
    builder.addCase(getStatistics.pending, handlePending);
    builder.addCase(getStatistics.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.statistics = payload;
    });
    builder.addCase(getStatistics.rejected, handleRejected);
  },
});

export const statisticsReducer = statistics.reducer;
