import { ChangeEventHandler } from 'react';

export interface FileSchema {
  id: number | string;
  url: string;
}

export interface FileInputProps {
  api?: FileInputApi;
  className?: string;
  multiple?: boolean;
  value?: string;
  onChange?: Function;
  upload?: boolean;
}

export interface FileInputApi {
  data: FileInputApiResult | undefined;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  mutate: Function;
}

export interface FileInputApiResult {
  path: string;
  size: number;
}

export interface UseFileInputResult {
  data: UploadResponse[] | string;
  handleOnChange: ChangeEventHandler;
}

export interface UploadResponse { path: string; size: number; }