import getClassName from '../../shared/helpers/className/getClassName';
import { InputProps } from './interfaces';

export const Input = ({ className, ...rest }: InputProps) => (
  <input {...rest} className={`${getClassName('h-10', className)}`}/>
);

export default Input;
