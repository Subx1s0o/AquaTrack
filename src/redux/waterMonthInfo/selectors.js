import { createSelector } from '@reduxjs/toolkit';

export const selectMonthWater = state => state.water.water.items;
export const selectLoading = state => state.water.water.loading;
export const selectError = state => state.water.water.error;
