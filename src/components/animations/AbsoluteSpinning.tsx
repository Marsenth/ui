import { createPortal } from "react-dom";
import { Spinning } from "./Spinning";

export function AbsoluteSpinning() {
  createPortal
  return createPortal(
    <Spinning containerClassName='absolute bg-opacity-30 bg-slate-50 left-0 top-0 w-screen h-[100dvh] z-50' size='loading'/>,
    document.getElementsByTagName('html')[0]
  );
}