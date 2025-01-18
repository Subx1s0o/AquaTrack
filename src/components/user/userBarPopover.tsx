import React, { useRef, useEffect } from "react";
import Icon from "../ui/Icon";

interface UserBarPopoverProps {
  onClose: () => void;
}

function UserBarPopover({ onClose }: UserBarPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popoverRef}
      className="flex flex-col justify-center items-start gap-2 w-[137px] px-5 py-3.5 rounded-2xl bg-white shadow-[0px_4px_50px_0px_rgba(0,0,0,0.10)]"
    >
      <button
        className="flex items-center gap-2 
        text-darkGrey font-poppins text-base font-bold 
        hover:text-darkGrey/40 
        md:text-ms"
        onClick={() => {
          alert("Settings clicked!");
          onClose();
        }}
      >
        <Icon id="icon-settings" w={16} h={16} className="text-inherit" /> Settings
      </button>

      <button
        className="flex items-center gap-2 
        text-darkGrey font-poppins text-base font-bold 
        hover:text-darkGrey/40 
        md:text-ms"
        onClick={() => {
          alert("Log out clicked!");
          onClose();
        }}
      >
        <Icon id="icon-log-out" w={16} h={16} className="text-inherit" /> Log out
      </button>
    </div>
  );
}

export default UserBarPopover;
