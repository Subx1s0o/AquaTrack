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
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <div>
      <div>
        <Icon id="icon-water-glass" w={38} h={38} className="text-green" />
      </div>
      <div>
        <p>{entry.volume} ml</p>
        <p>{entry.time}</p>
      </div>
      <div>
        <button onClick={() => setEditModalOpen(true)}>
          <Icon id="icon-edit" w={14} h={14} className="text-darkGrey" />
        </button>
        <button onClick={() => setDeleteModalOpen(true)}>
          <Icon id="icon-trash" w={14} h={14} className="text-darkGrey" />
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
