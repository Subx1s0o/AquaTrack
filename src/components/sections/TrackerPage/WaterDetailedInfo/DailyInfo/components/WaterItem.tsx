import React, { useState } from 'react';

import Icon from '@/components/ui/Icon';

import DeleteWaterModal from './DeleteWaterModal';
import WaterModal from './WaterModal';

interface WaterEntry {
  id: number;
  volume: number;
  time: string;
}

interface WaterItemProps {
  entry: WaterEntry;
}

const WaterItem: React.FC<WaterItemProps> = ({ entry }) => {
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-row items-center justify-start gap-2 rounded-2xl bg-white md:items-start md:gap-5">
      <div className="flex items-center justify-center">
        <Icon
          id="icon-water-glass"
          w={38}
          h={38}
          className="text-green md:h-11 md:w-11"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1 md:gap-0">
        <p className="font-poppins text-base font-bold text-darkGrey md:text-ms">
          {entry.volume} ml
        </p>
        <p className="font-poppins text-sm font-normal text-darkGrey">
          {entry.time}
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 md:gap-3.5">
        <button onClick={() => setEditModalOpen(true)}>
          <Icon
            id="icon-edit"
            w={14}
            h={14}
            className="text-darkGrey md:h-4 md:w-4"
          />
        </button>
        <button onClick={() => setDeleteModalOpen(true)}>
          <Icon
            id="icon-trash"
            w={14}
            h={14}
            className="text-darkGrey md:h-4 md:w-4"
          />
        </button>
      </div>

      {isEditModalOpen && (
        <WaterModal onClose={() => setEditModalOpen(false)} entry={entry} />
      )}
      {isDeleteModalOpen && (
        <DeleteWaterModal onClose={() => setDeleteModalOpen(false)} />
      )}
    </div>
  );
};

export default WaterItem;
