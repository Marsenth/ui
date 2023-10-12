import { ButtonProps } from './interfaces';
import { COMMON_BUTTON_CLASS } from './helpers/classNames';
import { MAIN_HEADER_BG } from '../../containers/Header/classNames';
import getClassName from '../../shared/helpers/className/getClassName';
import { Spinning } from '../animations';

export const MainButton = ({ className, disabled, loading, onClick, text }: ButtonProps) => {
  const mainClassName = `${MAIN_HEADER_BG} ${COMMON_BUTTON_CLASS} text-white flex flex-wrap items-center justify-center`;
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
      className={`${getClassName(mainClassName, optionalClassName)}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading ? <Spinning className='border-white border-r-transparent' containerSize='button'/> : <span>{text}</span>}
    </button>
  );
};

export default MainButton;
