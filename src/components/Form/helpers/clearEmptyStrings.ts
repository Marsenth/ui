import { FormValuesProps } from '../interfaces';

const cleanEmptyString = (newValue: any) => (
  typeof newValue === 'string' ? newValue.trim() : newValue
);

export const cleanEmptyStrings = (newValues: any): FormValuesProps => (
  Object.keys(newValues).reduce(
    (accum, key) => Object.assign(accum, { [key]: cleanEmptyString(newValues[key]) }), {}
  )
);