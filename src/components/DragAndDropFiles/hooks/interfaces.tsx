import { FileInputApi, FileSchema } from "../../FileInput/interfaces";

export interface UseFilesDragParams {
  api?: FileInputApi;
  data: FileSchema[] | undefined;
  onChange?: Function;
  setData: Function;
  value?: FileSchema[];
}

export interface DragAndDropProps {
  api?: FileInputApi;
  onChange?: Function;
  value?: FileSchema[]
}
