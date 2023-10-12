import { useEffect, useState } from 'react';
import { UseFormProps } from '../hooks/interfaces';
import { UseFormContextParams } from './interfaces';
import { useForm } from '../hooks/useForm';
import { getDefaultsRules, getDefaultsValues } from '../helpers';

export default function useFormContext(params: UseFormContextParams): UseFormProps {
  const { children, form: formFromProps, initialValues } = params;
  const form = formFromProps || useForm({ children, initialValues });
  const { isReady } = form;
  const formValues = form.getValues();
  const formRules = form.getRules();

  const [defaultsFormRules] = useState(
    isReady ? formRules : getDefaultsRules({ child: children })
  );

  const defaultRulesSetted = isReady || JSON.stringify(defaultsFormRules) === JSON.stringify(formRules);
  
  useEffect(() => {
    if (!isReady) {
      form.setValues(getDefaultsValues({ child: children, initialValues }));
      form.setRules(defaultsFormRules);
    }
  }, []);

  useEffect(() => {
    if (!isReady && Object.keys(formValues).length && defaultRulesSetted) {
      form.setIsReady(true);
    }
  }, [formValues, defaultRulesSetted]);

  useEffect(() => {
    const newValues = getDefaultsValues({ child: children, initialValues: formValues });
    const newRules = getDefaultsRules({ child: children });
    const valuesChanged = JSON.stringify(newValues) !== JSON.stringify(formValues);
    const rulesChanged = JSON.stringify(newRules) !== JSON.stringify(formRules);

    if (valuesChanged) form.setValues(getDefaultsValues({ child: children, initialValues }));
    if (rulesChanged) form.setRules(getDefaultsRules({ child: children }));
  }, [children]);

  return form;
};

