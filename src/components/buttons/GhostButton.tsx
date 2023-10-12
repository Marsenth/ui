import { ButtonProps } from './interfaces';
import getClassName from '../../shared/helpers/className/getClassName';

export const GhostButton = ({ children, className, onClick, text, type = 'button' }: ButtonProps) => {
  const optionalClassName = className as string;

  return (
    <button
      className={getClassName(
        'border-none px-0 py-0',
        optionalClassName
      )}
      onClick={onClick}
      type={type}
    >
      {text}
      {children}
    </button>
  );
}

export default GhostButton;
