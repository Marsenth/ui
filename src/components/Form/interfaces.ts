import { ChangeEventHandler, FormEventHandler, ReactElement } from 'react';
import { SelectOptionProps } from '../Select/interfaces';
import { UseFormProps } from './hooks/interfaces';

export interface FormProps {
  children?: ReactElement | ReactElement[];
  form?: UseFormProps;
  initialValues?: FormValuesProps;
  onError?: Function;
  onSuccess?: Function;
}

export interface FormItemProps {
  className?: string | undefined;
  Component?: any;
  componentOptions?: any;
  handleImageUpload?: ChangeEventHandler;
  componentClassName?: string;
  label?: string;
  name: string;
  options?: SelectOptionProps[];
  required?: boolean | undefined;
  imageUrl?: any;
  validator?: Function | undefined;
  rules?: FormRuleProps[]
}

export interface FormRuleProps {
  message?: string;
  required?: boolean;
  validator?: Function;
}

export interface FormItemRulesProps { [key: string]: FormRuleProps[]; }

export interface FormValuesProps {
  [key: string]: any
}