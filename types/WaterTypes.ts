// Тип для даних по місяцях
export interface WaterMonthData {
  totalPercentage: number; // Загальний відсоток
  date: string; // Дата місяця
  amount: number; // Обсяг води для цього місяця
}

export interface WaterDayData {
  _id?: string;
  amount: number;
  date: string;
  time?: string;
  dailyNorm?: number;
}

// Тип для даних по окремому дню для статистики
export interface DayData {
  day: number; // День місяця
  date: string; // Дата у вигляді рядка
  percentage: number; // Відсоток виконання норми
}

// Тип для статистичних даних (наприклад, для графіка чи звітів)
export interface StatisticData {
  day: number; // День місяця
  litr: number; // Спожита кількість води в літрах
}
