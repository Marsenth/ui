import { ReactFragment } from 'react';

export const DropdownMenu = ({ children }: { children: ReactFragment }) => {
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;
