import { FileInputContainer } from '../../containers/FileInput';
import { Spinning } from '../animations';
import { FileInputProps } from './interfaces';
import { useFileInput } from './hooks/useFileInput';

export const FileInput = ({ api, className, value, onChange }: FileInputProps) => {
  const { handleOnChange } = useFileInput({ api, value, onChange });

  return (
    <FileInputContainer className={className}>
      <input type='file' className='absolute h-full opacity-0 w-full cursor-pointer' onChange={handleOnChange}/>
      {api?.isLoading ? <Spinning
        containerClassName='absolute top-0 flex flex-wrap items-center justify-center h-full w-full bg-slate-50 bg-opacity-40'
        size='loading'
      /> : <></>}
    </FileInputContainer>
  );
}