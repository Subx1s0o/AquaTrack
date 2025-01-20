import { RootState } from '../store';

// Селектор для отримання даних по місячній воді
export const selectWaterMonthlyData = (state: RootState) =>
  state.water.waterMonthly.data;

// Селектор для отримання стану завантаження місячних даних
export const selectWaterMonthlyLoading = (state: RootState) =>
  state.water.waterMonthly.isLoading;

// Селектор для отримання помилки по місячним даним
export const selectWaterMonthlyError = (state: RootState) =>
  state.water.waterMonthly.isError;

// Селектор для отримання даних по щоденній воді
export const selectWaterDailyData = (state: RootState) =>
  state.water.waterDaily.data;

// Селектор для отримання стану завантаження щоденних даних
export const selectWaterDailyLoading = (state: RootState) =>
  state.water.waterDaily.isLoading;

// Селектор для отримання помилки по щоденним даним
export const selectWaterDailyError = (state: RootState) =>
  state.water.waterDaily.isError;

// Селектор для отримання обсягу води сьогодні
export const selectTodayWaterPercentage = (state: RootState) =>
  state.water.todayPercentage.value;

// Селектор для отримання стану завантаження обсягу води сьогодні
export const selectTodayWaterPercentageLoading = (state: RootState) =>
  state.water.todayPercentage.isLoading;

// Селектор для отримання помилки по сьогоднішньому обсягу води
export const selectTodayWaterPercentageError = (state: RootState) =>
  state.water.todayPercentage.isError;

// Селектор для отримання загального відсотка по щоденним даним
export const selectWaterDailyPercentage = (state: RootState) =>
  state.water.waterDaily.percentage;

export const selectWaterDailyCurrentDate = (state: RootState) =>
  state.water.waterDaily.date;

export const selectCurrentMonthDate = (state: RootState) =>
  state.water.waterMonthly.currentDate;
