import { ChangeEvent, useEffect, useState } from 'react';
import { FileInputProps, UploadResponse, UseFileInputResult } from '../interfaces';

export function useFileInput({ api, onChange, value }: FileInputProps): UseFileInputResult {
  const [selectedImage, setSelectedImage] = useState(null as any);
  const callMutate = api?.mutate || undefined;
  const data = ((value || (api?.data ? api.data : [])) as UploadResponse[])[0]?.path;

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const files = e.target.files;

      if (files?.length) {
        if (callMutate) {
          callMutate({ files });
        } else {
          const base64List = await Promise.all(Object.keys(files).map((key: any) => new Promise(
            (resolve) => {
            const file = files[key];
            const reader = new FileReader();
    
            reader.onload = (renderEvent: any) => {
              const base64URL = renderEvent.target.result;
              resolve(base64URL);
            }
    
            reader.readAsDataURL(file);
            }
          )));

          setSelectedImage(base64List);
        }
      }
    }
  };

  useEffect(() => {
    const newValue = api?.data || selectedImage;
    if (api?.isError || newValue) onChange?.(newValue);
  }, [api?.isSuccess, api?.isError, selectedImage]);

  return { data, handleOnChange };
}