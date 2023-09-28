import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateParams,
  updateName,
  updateAvatar,
  getBmr,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    userParams: {
      height: null,
      currentWeight: null,
      desiredWeight: null,
      birthday: null,
      blood: null,
      sex: null,
      levelActivity: null,
    },
    avatarURL: null,
  },
  bmr: 0,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [getBmr.fulfilled](state, action) {
      state.bmr = action.payload;
    },
    [updateParams.fulfilled](state, action) {
      state.user = action.payload.user;
    },
    [updateName.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
    },
    [updateAvatar.fulfilled](state, action) {
      state.user.avatarURL = action.payload.user.avatarURL;
    },
  },
});

export const authReducer = authSlice.reducer;
