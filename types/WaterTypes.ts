export interface WaterData {
  _id: string;
  totalPercentage: number;
  date: string;
  amount: number;
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

export interface WaterState {
  records: WaterData[];
  totalPercentage: number;
  loading: boolean;
  error: string | null | undefined;
}

export interface ApiResponseWater {
  records: WaterData[];
  totalPercentage: number;
}
