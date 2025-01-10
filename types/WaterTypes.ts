export interface WaterMonthInfo {
  data: WaterData[];
}

export interface WaterData {
  _id: string;
  percentage: number;
  date: string;
}

export interface DayData {
  day: number;
  date: string;
  percentage: number;
}

export interface StatisticData {
  day: number;
  litr: number;
}
