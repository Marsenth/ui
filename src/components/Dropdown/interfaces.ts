import { MouseEventHandler, ReactElement } from 'react';

interface DropdownOptionProps {
  key: string;
  label: ReactElement;
}

export interface DropdownProps {
  // custom params
  onClick: Function;
  options: DropdownOptionProps[];
  placement: string;
  // defaults params tha shold be declared inside component.
  close: Function;
  isOpen: boolean;
  selectedOption: string;
  handleToggle: MouseEventHandler;
}