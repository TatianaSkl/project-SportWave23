import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getDataProducts = createAsyncThunk(
  'diary/getDataProducts',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/products_diary/${date}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDataExercises = createAsyncThunk(
  'diary/getDataExercises',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/exercise_diary/${date}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'diary/deleteProduct',
  async (params, { rejectWithValue }) => {
    try {
      const { id, date } = params;
      await axios.delete(`/products_diary/${date}/${id}`);
      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  }
);

export const deleteExercise = createAsyncThunk(
  'diary/deleteExercise',
  async (params, { rejectWithValue }) => {
    try {
      const { id, date } = params;
      await axios.delete(`/exercises_diary/${date}/${id}`);
      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  }
);
