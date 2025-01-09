export interface WaterMonthInfo {
  data: WaterData[];
}

export interface WaterData {
  _id: string;
  persentage: number;
  date: string;
}
