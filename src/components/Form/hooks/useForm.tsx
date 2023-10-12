import { useState } from 'react';
import { FormItemRulesProps } from '../interfaces';
import { UseFormParams, UseFormProps } from './interfaces';
import { getDefaultsRules } from '../helpers/getDefaultsRules';
import { getDefaultsValues } from '../helpers';
import { checkValidate } from '../helpers/checkValidate';

export function useForm(params: UseFormParams = { initialValues: {} }): UseFormProps {
  const { children, initialValues } = params as UseFormParams;
  const [invalids, updateInvalids] = useState({} as any);
  const [isValid, setIsValid] = useState(true);
  const [rules, updateRules] = useState(getDefaultsRules({ child: children }));

  const [values, updateValues] = useState(
    children ? getDefaultsValues(
      { child: children, initialValues }
    ) : {}
  );

  const [isReady, updateIsReady] = useState(!!Object.keys(values).length);
  const getValue = (key: string): string => values[key];
  const getValues = () => values;
  const getValueError = (name: string) => invalids[name];
  const getRules = () => rules;
  const setIsReady = (value: boolean) => updateIsReady(value);
  const setRules = (value: FormItemRulesProps) => updateRules(value);
  
  const setValue = (key: string, value: any) => {
    updateValues({
      ...values, [key]: value
    });
  }

  const setValues = (newValues: Object) => updateValues({
    ...values, ...newValues
  });

  const validate = (clean = true) => checkValidate({
    clean, values, rules, updateValues, setIsValid, updateInvalids
  });

  return {
    getValue,
    getValues,
    getValueError,
    getRules,
    isReady,
    isValid,
    setIsReady,
    setRules,
    setValue,
    setValues,
    validate
  }; 
}