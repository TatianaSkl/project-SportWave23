import { createSlice } from '@reduxjs/toolkit';
import {
  getDataProducts,
  getDataExercises,
  deleteProduct,
  deleteExercise,
  addProduct,
  addExercis,
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
  products: [],
  exercises: [],
  allCaloriesDay: 0,
  allExercisesDay: 0,
  allTimeDay: 0,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfield = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
};

const diary = createSlice({
  name: 'diary',
  initialState,
  extraReducers: builder => {
    builder.addCase(getDataProducts.pending, handlePending);
    builder.addCase(getDataProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.products = payload.result;
      state.allCaloriesDay = payload.allCaloriesDay;
    });
    builder.addCase(getDataProducts.rejected, handleRejected);
    builder.addCase(getDataExercises.pending, handlePending);
    builder.addCase(getDataExercises.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.exercises = payload.result;
      state.allExercisesDay = payload.allCaloriesDay;
      state.allTimeDay = payload.allTimeDay;
    });
    builder.addCase(getDataExercises.rejected, handleRejected);
    builder.addCase(addProduct.pending, handlePending);
    builder.addCase(addProduct.fulfilled, (state, action) => {
      handleFullfield(state);
      state.products = action.payload;
    });
    builder.addCase(addProduct.rejected, handleRejected);
    builder.addCase(addExercis.pending, handlePending);
    builder.addCase(addExercis.fulfilled, (state, action) => {
      handleFullfield(state);
      state.products = action.payload;
    });
    builder.addCase(addExercis.rejected, handleRejected);

    builder.addCase(deleteProduct.pending, handlePending);
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      handleFullfield(state);
      const newProductsList = state.products.filter(product => product._id !== payload.id);
      state.products = newProductsList;
      state.allCaloriesDay -= payload.calories;
    });
    builder.addCase(deleteProduct.rejected, handleRejected);

    builder.addCase(deleteExercise.pending, handlePending);
    builder.addCase(deleteExercise.fulfilled, (state, { payload }) => {
      handleFullfield(state);
      const newExercisesList = state.exercises.filter(exercise => exercise._id !== payload.id);
      state.exercises = newExercisesList;
      state.allExercisesDay -= payload.calories;
      state.allTimeDay -= payload.time;
    });

    builder.addCase(deleteExercise.rejected, handleRejected);
  },
});

export const diaryReducer = diary.reducer;
