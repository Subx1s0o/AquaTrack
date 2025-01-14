import WaterForm from '@/components/forms/WaterForm/WaterForm';

const WaterModal = () => {
  return (
    <div className="font-poppins">
      <h2 className="mb-6 max-w-[248px] text-xl text-darkGrey md:max-w-[347px] md:text-3xl">
        Add water
      </h2>
      <p className="mb-5 font-bold leading-5 text-darkGrey md:text-lg">
        Choose a value:
      </p>
      <WaterForm />
    </div>
  );
};
export default WaterModal;
