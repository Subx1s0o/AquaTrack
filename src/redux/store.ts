import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import storeReducer from './auth/slice';
import { dateSlice } from './date/slice';
import { waterSlice } from './water/slice';
import { waterDaySlice } from './waterDayInfo/slice';
import { waterMonthSlice } from './waterMonthInfo/slice';

const storePersistConfig = {
  key: 'store',
  storage,
};

const persistedReducer = persistReducer(storePersistConfig, storeReducer);

export const store = configureStore({
  reducer: {
    store: persistedReducer,
    waterMonth: waterMonthSlice,
    date: dateSlice,
    water: waterSlice,
    waterDay: waterDaySlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
