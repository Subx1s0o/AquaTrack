import { WaterData } from 'types/WaterTypes';

import React from 'react';

interface StatisticsProps {
  date: Date;
  waterDataApi: WaterData[];
}

const Statistics: React.FC<StatisticsProps> = ({ date, WaterData }) => {
  return <div>Statistics</div>;
};

export default Statistics;
