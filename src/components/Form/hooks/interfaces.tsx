import { ReactElement } from 'react';

export interface UseFormParams {
  children?: ReactElement | ReactElement[];
  initialValues?: { [key: string]: any } | undefined;
}

export interface UseFormProps {
  getValue: Function;
  getValues: Function;
  getValueError: Function;
  getRules: Function;
  isReady: Boolean;
  isValid: boolean;
  setIsReady: Function;
  setRules: Function;
  setValue: Function;
  setValues: Function;
  validate: Function;
}