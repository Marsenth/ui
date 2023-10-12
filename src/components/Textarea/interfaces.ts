import { ChangeEventHandler } from 'react';

export interface TextareaProps {
  className?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}