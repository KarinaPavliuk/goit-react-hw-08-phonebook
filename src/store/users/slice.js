import { createSlice } from '@reduxjs/toolkit';

import {
  registrationThunk,
  loginThunk,
  logOutThunk,
  // updateProfileThunk,
} from './thunks';

const initialState = {
  token: '',
  profile: null,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  console.log(state.token);
  state.profile = payload.user;
};

const handleLogOut = (state, { payload }) => {
  state.token = '';
  state.profile = null;
};

// const handleUpdateProfileFulfilled = (state, { payload }) => {
//   state.profile = payload;
// };

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
      .addCase(logOutThunk.fulfilled, handleLogOut);
    // .addCase(refreshThunk.fulfilled, handleAuthFulfilled)
    // .addCase(updateProfileThunk.fulfilled, handleUpdateProfileFulfilled);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;