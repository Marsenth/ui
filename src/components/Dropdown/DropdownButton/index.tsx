import { MouseEventHandler } from 'react';

export const DropdownButton = (props: { onClick: MouseEventHandler, text: string }) => {
  const { onClick, text } = props;

  return (
    <button
      type="button"
      className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      onClick={onClick}
    >
      {text || 'Dropdown'}
    </button>
  );
};

export default DropdownButton;
