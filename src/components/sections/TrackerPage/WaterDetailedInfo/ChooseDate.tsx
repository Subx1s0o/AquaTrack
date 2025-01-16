import React from 'react';

export const ChooseDate: React.FC = () => {
  return (
    <h2 className="flex flex-row items-center justify-start font-poppins text-xl font-bold text-darkGrey md:text-3xl">
      Today
    </h2>
  );
};

// import React from 'react';

// interface ChooseDateProps {
//   selectedDate: string;
//   onDateChange: (date: string) => void;
// }

// export const ChooseDate: React.FC<ChooseDateProps> = ({
//   selectedDate,
//   onDateChange,
// }) => {
//   return (
//     <input
//       type="date"
//       value={selectedDate}
//       onChange={e => onDateChange(e.target.value)}
//       className="flex flex-row items-center justify-start font-poppins text-xl font-bold text-darkGrey md:text-3xl lg:text-3xl"
//     />
//   );
// };
