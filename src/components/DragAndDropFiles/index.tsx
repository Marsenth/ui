import { Spinning } from '../animations';
import { FileInputContainer } from '../../containers';
import { useDraggedFilesData } from './hooks/useDraggedFilesData';
import { useFilesDrag } from './hooks/useFilesDrag';
import { GhostButton } from '../buttons';
import { TrashIcon } from '../../icons';
import { DragAndDropProps } from './hooks/interfaces';
import { deleteFile } from './helpers/deleteFile';

export function DragAndDropFiles({ api, onChange, value }: DragAndDropProps) {
  const { data, setData } = useDraggedFilesData({ api, onChange, value });
  const { isDragging, ...fileDragHandlers } = useFilesDrag({ api, data, onChange, setData, value });

  return <div
    className='bg-gray-300 flex flex-wrap items-center justify-center relative overflow-hidden rounded-md'
    onDragEnd={fileDragHandlers.handleListItemDragEnd}
    onDragOver={fileDragHandlers.handleFileDragOver}
  >
    <FileInputContainer className='border-none bg-transparent shadow-none pt-2'>
      {api?.isLoading ? <Spinning/>: <></>}
    </FileInputContainer>

    <ul className={`relative grid md:grid-cols-8 sm:grid-cols-4 grid-cols-3 gap-3 p-3 left-0 top-0 overflow-y-scroll w-full ${isDragging ? 'z-0' : 'z-10'}`}>
      {data?.map((item, i) => (
        <li
          key={i}
          className='w-full cursor-move rounded-md overflow-hidden relative'
          draggable={true}
          onDragOver={(e) => fileDragHandlers.handleListItemDragOver(e, item)}
          onDragStart={() => fileDragHandlers.handleListItemDragStart(item)}
        >
          <GhostButton
            className='absolute top-0 right-0 px-1 bg-white rounded-full'
            onClick={() => deleteFile({ data, id: item.id, setData })}
            text={<TrashIcon className='text-sm'/>}
          />
          <img className='w-full' src={item.url}/>
        </li>
      ))}

    </ul>

    <input
      className={`absolute left-0 top-0 w-full h-14 opacity-0 cursor-pointer ${isDragging ? 'z-10 h-full' : 'z-0'}`}
      onChange={fileDragHandlers.handleFileDrop}
      type='file'
    />
  </div>
}
