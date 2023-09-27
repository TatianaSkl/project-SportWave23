import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://power-pulse-project-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/auth/register', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    toast.error('Email in use');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/auth/login', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    toast.error('Email or password is wrong');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('users/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getBmr = createAsyncThunk('users/bmr', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/users/current');
    return res.data.bmr;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateAvatar = createAsyncThunk('users/avatar', async ({ file, userId }, thunkAPI) => {
  try {
    const formData = new FormData();
    formData.append('avatar', file);

    const res = await axios.patch(`/users/${userId}/avatars`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateParams = createAsyncThunk('users/params', async (userData, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const res = await axios.put('/users/params', userData);
    return res.data;
  } catch (error) {
    toast.error('Oops... Something went wrong! Try again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateName = createAsyncThunk('users/username', async (userName, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const res = await axios.patch('/users/username', userName);
    return res.data;
  } catch (error) {
    toast.error('Oops... Something went wrong! Try again!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const updateAvatarUrl = createAsyncThunk('auth/updateAvatarUrl', async avatarUrl => {
//   localStorage.setItem('userAvatarUrl', avatarUrl);

//   return { avatarURL: avatarUrl };
// });
