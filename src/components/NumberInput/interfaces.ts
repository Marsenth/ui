import { ChangeEventHandler, FormEventHandler } from 'react';

export interface NumberInputProps {
  className?: string;
  decrement: FormEventHandler;
  handlerDisabled?: boolean;
  handleInputChange: Function;
  onChange: Function;
  increment: FormEventHandler;
  value: number | string;
}

export default NumberInputProps;
