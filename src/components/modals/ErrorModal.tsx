import { MessageModal } from './MessageModal';
import { MessageModalProps } from './interfaces';

export const ErrorModal = (props: MessageModalProps) => <MessageModal {...{ ...props, type: 'error' }}/>