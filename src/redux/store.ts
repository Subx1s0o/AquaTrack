import { configureStore } from '@reduxjs/toolkit';

import { dateSlice } from './date/slice';
import { waterDaySlice } from './waterDay/slice';
import { waterMonthSlice } from './waterMonthInfo/slice';

export const store = configureStore({
  reducer: {
    waterMonth: waterMonthSlice,
    date: dateSlice,
    // auth: authSlice,
    waterDay: waterDaySlice,
    // user: userSlice,
  },
});
