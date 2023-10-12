import { ChangeEventHandler } from 'react';

export interface InputProps {
  className?: string | undefined;
  onChange?: ChangeEventHandler;
  required?: boolean | undefined;
  value?: string | number | readonly string[] | undefined;
}