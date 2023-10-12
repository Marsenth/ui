import { FileSchema } from '../../FileInput/interfaces';

export interface DeleteItemParams {
  data: FileSchema[];
  id: number | string;
  setData: Function; 
}