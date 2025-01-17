import React from 'react';

import Icon from '@/components/ui/Icon';

export const WaterItem: React.FC<{
  entry: { id: number; volume: number; time: string };
}> = ({ entry }) => {
  return (
    <div className="flex h-[74px] w-[149px] flex-row items-center justify-start gap-[10px] rounded-2xl bg-white px-[14px] py-[18px] md:h-[86px] md:w-48 md:items-start md:gap-5 md:p-5">
      <div className="flex items-center justify-center">
        <Icon
          id="icon-water-glass"
          w={38}
          h={38}
          className="text-green md:h-[45px] md:w-11"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1 md:h-[46px] md:w-[52px] md:gap-0">
        <p className="font-poppins text-base font-bold text-darkGrey md:text-ms">
          {entry.volume} ml
        </p>
        <p className="font-poppins text-sm font-normal text-darkGrey">
          {entry.time}
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 md:gap-3.5">
        <button>
          <Icon
            id="icon-edit"
            w={14}
            h={14}
            className="text-darkGrey md:size-4"
          />
        </button>
        <button>
          <Icon
            id="icon-trash"
            w={14}
            h={14}
            className="text-darkGrey md:size-4"
          />
        </button>
      </div>
    </div>
  );
};

// import React from 'react';

// import Icon from '@/components/ui/Icon';

// // import DeleteWaterModal from './DeleteWaterModal';
// // import WaterModal from './WaterModal';

// interface WaterEntry {
//   id: number;
//   volume: number;
//   time: string;
// }

// interface WaterItemProps {
//   entry: WaterEntry;
// }

// export const WaterItem: React.FC<WaterItemProps> = ({ entry }) => {
//   // const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
//   // const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

//   return (
//     <div className="flex flex-row items-center justify-start gap-2 rounded-2xl bg-white md:items-start md:gap-5">
//       <div className="flex items-center justify-center">
//         <Icon
//           id="icon-water-glass"
//           w={38}
//           h={38}
//           className="text-green md:size-11"
//         />
//       </div>
//       <div className="flex flex-col items-start justify-center gap-1 md:gap-0">
//         <p className="font-poppins text-base font-bold text-darkGrey md:text-ms">
//           {entry.volume} ml
//         </p>
//         <p className="font-poppins text-sm font-normal text-darkGrey">
//           {entry.time}
//         </p>
//       </div>
//       <div className="flex flex-col items-start justify-center gap-2 md:gap-3.5">
//         <button>
//           <Icon
//             id="icon-edit"
//             w={14}
//             h={14}
//             className="text-darkGrey md:size-4"
//           />
//         </button>
//         <button>
//           <Icon
//             id="icon-trash"
//             w={14}
//             h={14}
//             className="text-darkGrey md:size-4"
//           />
//         </button>
//       </div>

//       {/* {isEditModalOpen && (
//         <WaterModal onClose={() => setEditModalOpen(false)} entry={entry} />
//       )}
//       {isDeleteModalOpen && (
//         <DeleteWaterModal onClose={() => setDeleteModalOpen(false)} />
//       )} */}
//     </div>
//   );
// };
