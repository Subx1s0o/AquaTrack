import Icon from '@/components/ui/Icon';

interface UserBarPopoverProps {
  onClose: () => void;
}

function UserBarPopover({ onClose }: UserBarPopoverProps) {
  return (
    <div className="absolute right-0 top-full mt-2 flex flex-col items-start justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 shadow-[0px_4px_50px_0px_rgba(0,0,0,0.10)]">
      <button
        className="flex items-center gap-2 font-poppins text-base font-bold text-darkGrey hover:text-darkGrey/40 md:text-ms"
        onClick={() => {
          alert('Settings clicked!');
          onClose();
        }}
      >
        <Icon id="icon-settings" w={16} h={16} className="text-inherit" />
        Settings
      </button>

      <button
        className="flex items-center gap-2 font-poppins text-base font-bold text-darkGrey hover:text-darkGrey/40 md:text-ms"
        onClick={() => {
          alert('Log out clicked!');
          onClose();
        }}
      >
        <Icon id="icon-log-out" w={16} h={16} className="text-inherit" />
        Log out
      </button>
    </div>
  );
}

export default UserBarPopover;
