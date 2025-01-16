import WaterForm from '@/components/forms/WaterForm/WaterForm';

type WaterModalProps = {
  type: 'add' | 'edit';
  amount?: number;
  time?: string;
  onClose: () => void;
};

const WaterModal = ({ type, amount = 50, time, onClose }: WaterModalProps) => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="font-poppins">
      <h2 className="mb-6 max-w-[248px] text-xl text-darkGrey md:max-w-[347px] md:text-3xl">
        {type === 'add' ? 'Add water' : 'Edit the entered amount of water'}
      </h2>
      <p className="mb-5 font-bold leading-5 text-darkGrey md:text-lg">
        {type === 'add' ? 'Choose a value:' : 'Correct entered data:'}
      </p>
      <WaterForm
        amount={amount}
        time={time || getCurrentTime()}
        type={type}
        onClose={onClose}
      />
    </div>
  );
};
export default WaterModal;
