import { MessageModal } from './MessageModal';
import { MessageModalProps } from './interfaces';

export const SuccessModal = (props: MessageModalProps) => <MessageModal {...{ ...props, type: 'success' }}/>