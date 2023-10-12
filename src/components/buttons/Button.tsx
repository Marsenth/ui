import { ButtonProps } from './interfaces';
import { Spinning } from '../animations';
import { COMMON_BUTTON_CLASS } from './helpers/classNames';
import getClassName from '../../shared/helpers/className/getClassName';

export const Button = ({ className, disabled, loading, onClick, text, type = 'button' }: ButtonProps) => {
  const optionalClassName = className as string;

  const handleClick = (e: any) => {
    if (!disabled && !loading) {
      onClick?.(e);
    } else {
      e?.preventDefault();      
    }
  }

  return (
    <button
      className={getClassName(
        `${COMMON_BUTTON_CLASS} border border-blue-800 text-blue-800 font-medium`,
        optionalClassName
      )}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {loading ? <Spinning containerSize='button'/> : <span>{text}</span>}
    </button>
  );
}

export default Button;
