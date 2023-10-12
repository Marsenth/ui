import { ReactElement } from 'react';
import { UseFormProps } from '../hooks/interfaces';

export interface UseFormContextParams {
  children?: ReactElement | ReactElement[];
  form?: UseFormProps;
  initialValues: Object | undefined;
}