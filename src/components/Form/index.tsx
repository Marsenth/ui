import { useForm } from './hooks/useForm';
import { FormProps } from './interfaces';
import { FormItem } from './FormItem';
import { FormContext } from './context/FormContext';
import useFormContext from './context/useFormContext';
import getClassName from '../../shared/helpers/className/getClassName';

function FormWrapper({ children, form, initialValues, onError, onSuccess }: FormProps) {
  const context = useFormContext({ children, form, initialValues });
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = context.validate();
    
    if (errors) {
      onError?.(errors);
    } else {
      onSuccess?.(context.getValues());
    }
  };

  const optionalClassName = context.isReady ? '' : 'hidden';

  return <FormContext.Provider value={context}>
    <form className={getClassName('w-full', optionalClassName)} onSubmit={handleSubmit}>
      {children}
    </form>
  </FormContext.Provider>
};

FormWrapper.Item = FormItem;
FormWrapper.useForm = () => useForm();

export const Form = FormWrapper;