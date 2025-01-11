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

export interface WaterState {
  water: {
    items: WaterData[];
    loading: boolean;
    error: null | any;
  };
}
