import getClassName from '../../shared/helpers/className/getClassName';
import { TextareaProps } from './interfaces';

export function Textarea(props: TextareaProps) {
  const { className, ...restOfProps } = props;
  return <textarea {...restOfProps} className={getClassName('w-full h-32 resize-none', className)}></textarea>
}