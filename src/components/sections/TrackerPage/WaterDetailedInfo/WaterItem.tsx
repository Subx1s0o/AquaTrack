import { WaterDayData } from 'types/WaterTypes';

import { useState } from 'react';

import { DeleteWaterModal } from '@/components/modals/DeleteWaterModal';
import Modal from '@/components/modals/Modal/Modal';
import WaterModal from '@/components/modals/WaterModal/WaterModal';
import Icon from '@/components/ui/Icon';

interface WaterItemProps {
  data: WaterDayData;
}

export default function WaterItem({ data }: WaterItemProps) {
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false);

  return (
    <>
      <li className="flex min-w-[149px] shrink-0 items-center justify-start gap-[10px] rounded-2xl bg-white px-[14px] py-[18px] md:min-w-[192px] md:items-start md:gap-5 md:p-5">
        <div className="flex h-full items-center justify-center">
          <Icon id="icon-water-glass" w={38} h={38} className="text-green" />
        </div>
        <div className="flex min-w-[49px] flex-col items-start justify-center gap-1 md:h-[46px] md:min-w-[52px] md:gap-0">
          <p className="font-poppins text-base font-bold text-darkGrey md:text-ms">
            {data.amount} ml
          </p>
          <p className="font-poppins text-sm font-normal text-darkGrey">
            {data.time}
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 md:gap-3.5">
          <button
            onClick={() => setIsModalEditOpen(true)}
            className="text-darkGrey md:size-4 lg:hover:text-green lg:focus:text-green"
          >
            <Icon id="icon-edit" w={14} h={14} />
          </button>
          <button
            onClick={() => setIsModalDeleteOpen(true)}
            className="text-darkGrey md:size-4 lg:hover:text-green lg:focus:text-green"
          >
            <Icon id="icon-trash" w={14} h={14} />
          </button>
        </div>
      </li>
      {isModalEditOpen && (
        <Modal
          isOpen={isModalEditOpen}
          onClose={() => setIsModalEditOpen(false)}
        >
          <WaterModal
            type="edit"
            id={data._id}
            amount={data.amount}
            time={data.time}
            onClose={() => setIsModalEditOpen(false)}
          />
        </Modal>
      )}

      {isModalDeleteOpen && (
        <Modal
          isOpen={isModalDeleteOpen}
          onClose={() => setIsModalDeleteOpen(false)}
        >
          <DeleteWaterModal
            waterId={data._id || ''}
            onClose={() => setIsModalDeleteOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}
