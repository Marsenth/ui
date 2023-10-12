import { MouseEventHandler, ReactElement } from 'react';

export interface ModalProps {
  children: ReactElement;
  visible?: boolean;
}

export interface MessageModalProps {
  buttons?: ReactElement;
  closeModal?: MouseEventHandler;
  text?: string | ReactElement;
  type?: 'success' | 'error'; 
  visible?: boolean;
}
