import { createPortal } from 'react-dom';
import getClassName from '../../shared/helpers/className/getClassName';
import { ModalProps } from './interfaces';

export const Modal = ({ children, visible }: ModalProps) => {
  const mainClass = 'flex flex-wrap items-center justify-center fixed top-0 left-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100dvh] max-h-full bg-gray-900 bg-opacity-60';
  let classFromProps = '';

  if (!visible) classFromProps += 'hidden invisible';

  return createPortal(
    <div className={`${getClassName(mainClass, classFromProps)}`}>
      <div className="w-[500px] bg-white rounded-lg flex flex-wrap flex-col justify-between">
        {children}
      </div>
    </div>,
    document.getElementsByTagName('html')[0]
  )
}