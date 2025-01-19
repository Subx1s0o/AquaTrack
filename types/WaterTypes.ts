// Тип для даних по місяцях
export interface WaterMonthData {
  totalPercentage: number; // Загальний відсоток
  date: string; // Дата місяця
  amount: number; // Обсяг води для цього місяця
}

// Тип для даних по днях
export interface WaterDayData {
  _id: string; // Ідентифікатор
  amount: number; // Обсяг води для цього дня
  date: Date; // Дата запису
  time: string; // Час, коли було зафіксовано споживання
  dailyNorm: number; // Добова норма води
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
