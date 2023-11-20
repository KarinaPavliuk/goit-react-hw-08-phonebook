import { createSlice } from '@reduxjs/toolkit';

import {
  registrationThunk,
  loginThunk,
  logOutThunk,
  getUserThunk,
} from './thunks';

const initialState = {
  token: '',
  profile: null,
  isLogIn: false,
  isRefreshing: true,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user.email;
  state.isLogIn = true;
};

const handleLogOut = state => {
  state.token = '';
  state.profile = null;
  state.isLogIn = false;
};

const handleGetUserFulfilled = (state, { payload }) => {
  console.log('payload', payload);
  state.token = payload.token;
  // state.profile = payload.user.email;
  state.isLogIn = true;
  state.isRefreshing = false;
};

const handleGetUserRejected = (state, { payload }) => {
  state.token = '';
  state.isRefreshing = false;
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
      .addCase(getUserThunk.fulfilled, handleGetUserFulfilled)
      .addCase(getUserThunk.rejected, handleGetUserRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
