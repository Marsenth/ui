import { useMemo } from 'react';
import getClassName from '../../shared/helpers/className/getClassName';
import { FileInputContainerProps } from './interfaces';
import UploadIcon from '../../icons/UploadIcon';

export const FileInputContainer = ({ children, className }: FileInputContainerProps) => {
  const mainClassName = useMemo(() => {
    let newClassName = 'flex flex-col text-blue rounded-lg shadow-lg tracking-wide border border-blue text-gray-500 hover:text-blue-800 relative overflow-hidden';
    if (!className) newClassName += ' bg-white px-4 py-2';
    return newClassName;
  }, [className]);

  return (
    <div className={getClassName(mainClassName, className)}>
      <div className='flex flex-wrap justify-center items-center'>
        <UploadIcon className='text-2xl'/>
        <span className="my-2 px-2 text-base leading-normal">Selecciona un archivo</span>
        {children}
      </div>
    </div>
  );
}