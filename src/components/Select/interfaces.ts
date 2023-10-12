import { ChangeEventHandler } from "react";

export interface SelectProps {
  disabled: boolean;
  onChange: ChangeEventHandler;
  options: SelectOptionProps[];
  value: string;
}

export interface SelectOptionProps {
  label: string;
  value: string | number;
}