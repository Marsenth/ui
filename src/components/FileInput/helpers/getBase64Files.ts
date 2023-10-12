
import { v4 as uuidv4 } from 'uuid';
import { FileSchema } from '../interfaces';

export const getBase64Files = async (files: FileList): Promise<FileSchema[]> => {
  const base64List: FileSchema[] = await Promise.all(Object.keys(files).map((key: any) => {
      const fileSchemaPromise:  Promise<FileSchema> = new Promise(
        (resolve) => {
          const file = files[key];
          const reader = new FileReader();
      
          reader.onload = (renderEvent: any) => {
            const base64URL = renderEvent.target.result;
            const fileSchemaItem: FileSchema = { id: uuidv4(), url: base64URL };
            resolve(fileSchemaItem);
          }
      
          reader.readAsDataURL(file);
        }
      );

      return fileSchemaPromise;
    }));

    return base64List;
}