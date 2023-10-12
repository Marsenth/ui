import DropdownButton from './DropdownButton';
import { DropdownProps } from './interfaces';

export const Dropdown = (props: DropdownProps) => {
  const {
    // custom params
    onClick,
    options,
    placement,
    // defaults params tha shold be declared inside component.
    close,
    isOpen,
    selectedOption,
    handleToggle,
  } = props;

  const menuDirection = placement === 'right' ? 'origin-top-right right-0' : 'origin-top-left left-0';

  return (
    <div className="relative inline-block text-left">
      <div>
        <DropdownButton {...{ onClick: handleToggle, text: selectedOption }}/>
      </div>

      {isOpen && (
        <div className={`${menuDirection} absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
          <div className="py-1">
            {options.map(({ key, label }: any) => (
              <button
                key={key}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                onClick={() => onClick ? onClick(key, close) : close()}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
