import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FileSchema } from '../../FileInput/interfaces';
import { DragAndDropProps } from './interfaces';

export const useDraggedFilesData = ({ api, onChange, value }: DragAndDropProps) => {
  const setIdsToNewData = (newData: FileSchema[]) => newData.map((item: FileSchema) =>  ({ url: item.url, id: uuidv4() }));
  const [data, setData] = useState(value ? setIdsToNewData(value) : undefined as FileSchema[] | undefined);

  useEffect(() => {
    if (api?.data) {
      const newData = setIdsToNewData(api.data as any);
      const newDraggedList = [ ...data as FileSchema[], ...newData as any ];
      if (value) {
        onChange?.(newDraggedList);
      } else {
        setData(newDraggedList);
      }
    }
  }, [api?.data]);
  

  useEffect(() => {
    if (value) {
      if (!data) {
        const newData = setIdsToNewData(value);
        setData(newData);
      } else {
        const shouldChange = JSON.stringify(value) !== JSON.stringify(data)
        if (shouldChange) setData(value);
      }
    }
  }, [value]);

  return { data, setData };
}