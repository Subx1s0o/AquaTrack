import { toast } from "react-toastify";

interface DeleteWaterModalProps {
	onClose: () => void;
}

export const DeleteWaterModal = ({ onClose }: DeleteWaterModalProps) => {
	const handleDelete = async () => {
		try {
			// Тут виклик функції видалення, наприклад:
			// await dispatch(deleteWater());

			toast.success("Entry deleted successfully!");

			onClose();
		} catch (error) {
			toast.error("Failed to delete the entry. Please try again.");
			console.error(error);
		}
	};

	return (
		<div className={"text-center font-poppins text-darkGrey"}>
			<h2 className={"font-bold text-xl mb-4 md:text-3xl md:mb-6"}>
				Delete entry
			</h2>

			<p className={"font-normal text-base mb-7 md:text-lg md:mb-6"}>
				Are you sure you want to delete the entry?
			</p>

			<div
				className={
					"flex flex-col gap-[9px] md:flex-row md:gap-2.5 md:justify-center"
				}
			>
				<button
					type="button"
					className={
						"rounded-[30px] border-none bg-green py-3.5 font-bold text-base transition-colors duration-300 ease-in-out hover:bg-[#87d28d] focus:bg-[#87d28d] focus:outline-none md:py-[18px] md:px-[59px] md:text-md"
					}
					onClick={handleDelete}
				>
					Delete
				</button>
				<button
					type="button"
					className={
						"text-darkGrey/30 rounded-[30px] border-none bg-grey py-3.5 font-bold text-base transition-colors duration-300 ease-in-out hover:text-darkGrey focus:text-darkGrey focus:outline-none md:py-[18px] md:px-[59px] md:text-md"
					}
					onClick={onClose}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};
