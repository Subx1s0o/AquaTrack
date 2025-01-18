import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/auth/selectors";
import UserBarPopover from "./userBarPopover";
import Icon from "../ui/Icon";

function UserBar() {
  const user = useAppSelector(selectUser); 

  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  if (!user) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">User data not available</h1>
      </div>
    );
  }

  let displayName = user.name || "Guest";

  if (user.name === "User") {
    displayName = user.email.split("@")[0]; 
  }

  const togglePopover = () => setPopoverOpen(!isPopoverOpen);
  const toggleRotation = () => setIsRotated(!isRotated);

  return (
    <div className="relative">
      <button
        onClick={() => {
          togglePopover();
          toggleRotation();
        }}
        className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-full font-poppins text-[14px] font-bold leading-[18px] tracking-[-0.14px] text-center"
      >
        <span>{displayName}</span>
        <img
          src={user.avatarURL || "/default-avatar.png"}
          alt="avatar"
          className="w-8 h-8 sm:w-11 sm:h-11 lg:w-11 lg:h-11 rounded-full"
        />

        <Icon
          id="icon-chevron-down" 
          w={12} 
          h={12} 
          className={`transition-transform duration-300 ${isRotated ? "rotate-180" : ""}`} 
        />
      </button>

      {isPopoverOpen && (
        <UserBarPopover
          onClose={() => {
            setPopoverOpen(false);
            setIsRotated(false);
          }}
        />
      )}
    </div>
  );
}

export default UserBar;
