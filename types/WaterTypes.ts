export interface WaterMonthState {
  water: {
    items: WaterMonthData[];
    loading: boolean;
    error: string | null | undefined;
  };
}

export interface WaterMonthData {
  // _id: string;
  totalPercentage: number;
  date: string;
  amount: number;
}

export interface WaterDayState {
  water: {
    items: WaterDayData[];
    loading: boolean;
    error: string | null | undefined;
    totalPercentage: number;
    date: Date | null;
  };
}

export interface WaterDayData {
  _id: string;
  amount: number;
  date: Date;
  time: string;
  dailyNorm: number;
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
