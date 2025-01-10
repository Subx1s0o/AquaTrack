import { configureStore } from '@reduxjs/toolkit';

import { waterSlice } from './waterMonthInfo/slice';

export const store = configureStore({
  reducer: {
    water: waterSlice,
    // auth: authSlice,
    // waterDayInfo: waterDayInfoSlice,
    // user: userSlice,
  },
});
