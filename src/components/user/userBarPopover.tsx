import React, { useRef, useEffect } from "react";

interface UserBarPopoverProps {
  onClose: () => void;
}

const UserBarPopover: React.FC<UserBarPopoverProps> = ({ onClose }) => {
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
      className="flex flex-col justify-center items-start gap-2 w-[137px] px-[20px] py-[14px] rounded-[15px] bg-white shadow-[0px_4px_50px_0px_rgba(0,0,0,0.10)]"
    >
      <button
        className="flex items-center gap-2 
       text-[#323F47] font-poppins text-[14px] font-bold leading-[18px] 
       hover:text-[rgba(50,63,71,0.40)] 
       md:text-[15px] md:leading-[22.4px] 
       lg:text-[15px] lg:leading-[22.4px] 
       md:hover:text-[rgba(50,63,71,0.40)] 
       lg:hover:text-[rgba(50,63,71,0.40)]"
        onClick={() => {
          alert("Settings clicked!");
          onClose();
        }}
      >
        <svg
          width="16px"
          height="16px"
        >
          <use href="/sprite.svg#icon-settings"></use>
        </svg> Setting
      </button>
      <button
        className="flex items-center gap-2 
       text-[#323F47] font-poppins text-[14px] font-bold leading-[18px] 
       hover:text-[rgba(50,63,71,0.40)] 
       md:text-[15px] md:leading-[22.4px] 
       lg:text-[15px] lg:leading-[22.4px] 
       md:hover:text-[rgba(50,63,71,0.40)] 
       lg:hover:text-[rgba(50,63,71,0.40)]"
        onClick={() => {
          alert("Log out clicked!");
          onClose(); 
        }}
      >
        <svg
          width="16px"
          height="16px"
        >
          <use href="/sprite.svg#icon-log-out"></use>
        </svg> Log out
      </button>
    </div>
  );
};

export default UserBarPopover;
