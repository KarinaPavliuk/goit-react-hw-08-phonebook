import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authReducer } from './users/slice';
import { contactsReducer } from './contactsPage/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = {
  auth: authPersistedReducer,
  contacts: contactsReducer,
};
