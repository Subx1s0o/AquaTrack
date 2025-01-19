import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/auth/operations";

interface LogoutModalProps {
	onClose: () => void;
}

export const LogOutModal = ({ onClose }: LogoutModalProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		await dispatch(logout());
		onClose();
		navigate("/");
	};

	return (
		<div className={"text-center font-poppins text-darkGrey"}>
			<h2 className={"font-bold text-xl mb-4 md:text-3xl md:mb-6"}>Log out</h2>

			<p className={"font-normal text-base mb-7 md:text-lg md:mb-6"}>
				Do you really want to leave?
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
					onClick={handleLogout}
				>
					Logout
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
