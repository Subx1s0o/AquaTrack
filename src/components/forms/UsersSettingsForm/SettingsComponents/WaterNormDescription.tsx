import React from 'react';

const WaterNormDescription: React.FC = () => (
  <div className="gap-7 md:flex">
    <div className="mb-2 flex flex-col gap-2">
      <p>For woman:</p>
      <p className="text-base font-bold text-green md:text-md">
        V = (M * 0.03) + (T * 0.4)
      </p>
    </div>
    <div className="flex flex-col gap-2">
      <p>For man:</p>
      <p className="text-base font-bold text-green md:text-md">
        V = (M * 0.04) + (T * 0.6)
      </p>
    </div>
  </div>
);

export default WaterNormDescription;
