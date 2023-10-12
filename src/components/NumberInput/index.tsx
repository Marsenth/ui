import { ChangeEvent } from 'react';
import getClassName from '../../shared/helpers/className/getClassName';
import { GhostButton } from '../buttons';
import NumberInputProps from './interfaces';

export const NumberInput = ({
  className,
  handlerDisabled,
  decrement,
  handleInputChange,
  increment,
  value
}: NumberInputProps) => {
  const alignText = handlerDisabled ? 'text-start' : 'text-center';

  const getValue = (prevValue: number | string) => {
    const parsedNumber = Number(prevValue);
    const getNullValue = () => handlerDisabled ? '' : 0;

    const getFinalValue = () => (
      (parsedNumber < 0) ? -1 * parsedNumber : (parsedNumber || getNullValue())
    );

    return Number.isNaN(parsedNumber) ? getNullValue() : getFinalValue();
  }

  return (
    <div className="custom-number-input w-full">
      <div className={getClassName("flex flex-row w-full rounded-lg relative bg-transparent h-10", className)}>
        {!handlerDisabled && <GhostButton className="h-full w-20 cursor-pointer rounded-l" onClick={decrement}>
          <div className='bg-gray-500 flex flex-wrap items-center justify-center h-full'>
            <span className="m-auto text-2xl font-thin text-white">-</span>
          </div>
        </GhostButton>}

        <input
          className={`[&::-webkit-inner-spin-button]:appearance-none focus:outline-none text-center w-full bg-white flex items-center outline-none h-full ${alignText}`}
          onChange={(e: any) => handleInputChange(getValue(e.target.value))}
          value={getValue(value)}
        />

        {!handlerDisabled && <GhostButton className="h-full w-20 cursor-pointer rounded-r" onClick={increment}>
          <div className='bg-gray-500 flex flex-wrap items-center justify-center h-full'>
            <span className="m-auto text-2xl font-thin text-white">+</span>
          </div>
        </GhostButton>}
      </div>
    </div>
  );
}

export default NumberInput;
