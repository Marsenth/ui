import { MouseEventHandler, ReactElement } from 'react';

export interface ButtonProps {
  children?: string | ReactElement | undefined | boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler;
  text?: string | ReactElement;
  type?: 'button' | 'reset' | 'submit' | undefined;
}