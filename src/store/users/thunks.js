import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn, logOut } from 'API/authorizations';
// import { refresh, signIn, signUp, updateProfile } from '../../api/auth';

export const registrationThunk = createAsyncThunk(
  'users/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'users/logout',
  async (body, { rejectWithValue }) => {
    try {
      const data = await logOut(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const refreshThunk = createAsyncThunk(
//   'auth/refresh',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await refresh();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const updateProfileThunk = createAsyncThunk(
//   'users/updateProfile',
//   async (body, { rejectWithValue }) => {
//     try {
//       const data = await updateProfile(body);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
