import { ChangeEventHandler } from 'react';

export interface InputProps {
  className?: string | undefined;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
  placeholder?: string;
  required?: boolean | undefined;
  value?: string | number | readonly string[] | undefined;
}