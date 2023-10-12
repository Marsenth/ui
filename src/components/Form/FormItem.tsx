import { useContext } from 'react';
import { FormItemProps } from './interfaces';
import { FormContext } from './context/FormContext';
import getClassName from '../../shared/helpers/className/getClassName';

export const FormItem = ({
  Component,
  className,
  componentOptions,
  componentClassName,
  label,
  name,
  options,
  rules: _
}: FormItemProps) => {
  const form = useContext(FormContext) as any;
  const { value: __, ...restOfComponent } = componentOptions;

  const getNumberInputProps = () => ({
    decrement: () => form.getValue(name) > 0 ? form.setValue(name, form.getValue(name) - 1) : null,
    handleInputChange: (inputValue: number | string) => form.setValue(name, inputValue),
    increment: () => form.setValue(name, form.getValue(name) + 1)
  })

  const isRequired = () => !!form?.getRules()?.[name]?.find(({ required }: any) => required);

  return (
    <div className={className}>
      <label className='flex flex-wrap flex-col items-start justify-center'>
        <div className='w-full'>
          {label}
          {isRequired() && <span className='text-red-500'>*</span>}
        </div>

        <div className='w-full'>
          <Component className={getClassName('w-full', componentClassName)} {...{
            options,
            value: form.getValue(name),
            onChange: (e: any) => {
              form.setValue(name, e.target ? e.target.value : e);
            },
            ...(Component.name === 'NumberInput' && getNumberInputProps()),
            ...restOfComponent
          }}/>
        </div>
        
      </label>
      
      <div className='h-5'>
        <h6 className='text-red-500'>{form.getValueError(name)}</h6>
      </div>
    </div>
  );
}