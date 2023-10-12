import { useEffect, useState } from 'react';
import { RichTextareaProps } from './interfaces';
import ReactQuill from 'react-quill';
import RichTextareaContainer from './RichTextareaContainer';
import getClassName from '../../shared/helpers/className/getClassName';
import 'react-quill/dist/quill.snow.css';

export function RichTextarea({ className, onChange, value: srcValue }: RichTextareaProps) {
  const [value, setValue] = useState(srcValue);
  
  const handleOnChange = (newValue: string) => setValue(newValue);

  useEffect(() => {
    if (value !== srcValue) {
      setValue(srcValue);
    }
  }, [srcValue]);

  useEffect(() => {
    if (value !== srcValue) onChange?.(value)
  }, [value]);

  return <RichTextareaContainer>
    <ReactQuill
      className={getClassName('h-40', className)}
      theme="snow"
      value={value || ''}
      onChange={handleOnChange}
    />
  </RichTextareaContainer>
}