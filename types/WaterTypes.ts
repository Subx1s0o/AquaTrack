import { DateState } from './DateTypes';

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

export interface WaterDayState {
  water: {
    items: {
      _id: string;
      volume: number;
      date: string;
    }[];
    loading: boolean;
    error: null | any;
  };
}

export interface Store {
  waterMonth: WaterState;
  date: DateState;
  waterDay: WaterDayState;
}
