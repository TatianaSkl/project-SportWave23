import { createSlice } from '@reduxjs/toolkit';
import {
  fetchExercises,
  fetchBodyParts,
  fetchMuscles,
  fetchEquipment,
  addExercise,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    exercises: [],
    bodyParts: [],
    muscles: [],
    equipment: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchExercises.pending, handlePending)
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exercises = action.payload;
      })
      .addCase(fetchExercises.rejected, handleRejected)
      .addCase(fetchBodyParts.pending, handlePending)
      .addCase(fetchBodyParts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bodyParts = action.payload;
      })
      .addCase(fetchBodyParts.rejected, handleRejected)
      .addCase(fetchMuscles.pending, handlePending)
      .addCase(fetchMuscles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.muscles = action.payload;
      })
      .addCase(fetchMuscles.rejected, handleRejected)
      .addCase(fetchEquipment.pending, handlePending)
      .addCase(fetchEquipment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.equipment = action.payload;
      })
      .addCase(fetchEquipment.rejected, handleRejected)
      .addCase(addExercise.pending, handlePending)
      .addCase(addExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.items = [...items, action.payload];
      })
      .addCase(addExercise.rejected, handleRejected),
});

export const exercisesReducer = exercisesSlice.reducer;
