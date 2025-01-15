import { WaterDayData, WaterMonthData } from './WaterTypes';

export interface ApiResponseWaterMonth {
  records: WaterMonthData[];
}

export interface ApiResponseWaterDay {
  records: WaterDayData[];
}

export interface ApiError {
  message: string;
}
