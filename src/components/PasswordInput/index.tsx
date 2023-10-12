import getClassName from '../../shared/helpers/className/getClassName';
import { InputProps } from './interfaces';

export const PasswordInput = ({ className, ...rest }: InputProps) => (
  <input {...{ type: 'password', ...rest }} className={`${getClassName('h-10', className)}`}/>
);

export default PasswordInput;
