import { WaterDayData, WaterMonthData } from './WaterTypes';

export interface ApiResponseWaterMonth {
  records: WaterMonthData[];
  totalPercentage: number;
}

export interface ApiResponseWaterDay {
  records: WaterDayData[];
  totalPercentage: number;
  date: string;
}

export interface ApiError {
  message: string;
}
