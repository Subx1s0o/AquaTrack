import WaterForm from './WaterForm/WaterForm';

const WaterModal = () => {
  return (
    <div className="font-poppins">
      <h2 className="mb-6 text-xl text-darkGrey">Add water</h2>
      <p className="mb-5 font-bold leading-5 text-darkGrey">Choose a value:</p>
      <WaterForm />
    </div>
  );
};
export default WaterModal;
