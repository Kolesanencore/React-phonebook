import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contactsSlice';
import { filterReducer } from 'Redux/contacts/filterSlice';
import { authReducer } from './auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = {
  auth: persistReducer(persistConfig, authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
