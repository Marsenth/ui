import { ChangeEvent, DragEvent, useState } from 'react';
import { FileSchema } from '../../FileInput/interfaces';
import { getBase64Files } from '../../FileInput/helpers/getBase64Files';
import { UseFilesDragParams } from './interfaces';

export const useFilesDrag = ({ api, data, onChange, setData, value }: UseFilesDragParams) => {
  const [isDragging, setIsDragging] = useState(false);
  const [draggeringFromList, setDraggeringFromList] = useState({} as FileSchema);

  const handleListItemDragEnd = (e: DragEvent) => {
    e.preventDefault();
    setDraggeringFromList({} as FileSchema);
  }

  const handleFileDragOver = (e: DragEvent) => {
    e.preventDefault();

    if (!Object.keys(draggeringFromList).length && !isDragging) {
      setIsDragging(true);
    }
  }

  const handleListItemDragOver = (e: DragEvent<HTMLLIElement>, overItem: FileSchema) => {
    e.preventDefault();

    const newDraggedList = data?.reduce((accum, item) => {
      switch(item.id) {
        case draggeringFromList.id:
          return accum.concat(overItem);
        case overItem.id:
          return Object.keys(draggeringFromList).length ? accum.concat(draggeringFromList) : accum.concat(item);
        default: {
          return accum.concat(item);
        }
      }
    }, [] as FileSchema[]);

    if (value) {
      onChange?.(newDraggedList);
    } else {
      setData(newDraggedList);
    }
  }

  const handleListItemDragStart = (item: FileSchema) => {
    setDraggeringFromList(item);
  }

  const handleFileDrop = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (isDragging) setIsDragging(false);

    const files = e.target.files;

    if (files) {
      if (api) {
        api.mutate({ files });      
      } else {
        const newFiles = await getBase64Files(files);
        const newValue = [ ...data ? data : [], ...newFiles ];
        setData(newValue);
      }
    }
  }

  return {
    handleListItemDragEnd,
    handleFileDragOver,
    handleListItemDragOver,
    handleListItemDragStart,
    handleFileDrop,
    isDragging
  };
}