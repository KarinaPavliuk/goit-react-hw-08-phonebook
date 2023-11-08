import { createSlice } from '@reduxjs/toolkit';

import {
  registrationThunk,
  loginThunk,
  logOutThunk,
  getUserThunk,
} from './thunks';

const initialState = {
  token: '',
  isLogIn: false,
  profile: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.isLogIn = true;
  state.profile = payload.user.email;
};

const handleLogOut = (state, { payload }) => {
  state.token = '';
  state.isLogIn = false;
  state.profile = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.profile = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOut)
      .addCase(getUserThunk.fulfilled, handleAuthFulfilled);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
