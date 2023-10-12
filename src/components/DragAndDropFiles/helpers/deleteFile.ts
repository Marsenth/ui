import { FileSchema } from "../../FileInput/interfaces";
import { DeleteItemParams } from "./interfaces";

export const deleteFile = ({ data, setData, id }: DeleteItemParams) => {
  setData(
    data.reduce((accum, item) => item.id === id ? accum : accum.concat(item), [] as FileSchema[])
  );
}