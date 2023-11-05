import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, deleteContact, getContacts } from 'API/contacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await createContact(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const data = await deleteContact(contactId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
