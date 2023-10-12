import { ReactElement, SetStateAction } from 'react';
import ReactQuill from 'react-quill';

export interface RichTextareaProps {
  className?: string;
  onChange?: Function | SetStateAction<any>;
  value?: string | ReactQuill.Value
}