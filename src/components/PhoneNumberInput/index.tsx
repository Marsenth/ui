import Input from '../Input';
import { InputProps } from '../Input/interfaces';

export function PhoneNumberInput({ className, ...rest }: InputProps) {
  const { value }: any = rest;
  const plusChar = value?.slice(0, 1).replace(/[^+]/g, '') || '';
  const numbersChars = value?.replace(/\D/g, '') || '';
  const phoneValue = `${plusChar}${numbersChars}`;

  return (
    <Input {...{ className, ...rest, value: phoneValue }}/>
  )
}