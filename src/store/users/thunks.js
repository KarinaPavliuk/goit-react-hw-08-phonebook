import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn, logOut } from 'API/authorizations';

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
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOut();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// const postLogOut = async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// };
