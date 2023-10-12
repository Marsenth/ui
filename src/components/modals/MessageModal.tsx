import { CircleCheck, TriangleExclamation } from '../../icons';
import { MainButton } from '../buttons';
import { Modal } from './Modal';
import { MessageModalProps } from './interfaces';

export const MessageModal = ({ buttons, text, type, visible, closeModal }: MessageModalProps) => {
  const getDefaultsProps = () => {
    switch (type) {
      case 'error':
        return {
          Icon: TriangleExclamation,
          iconColor: 'text-red-500',
          defaultMessage: 'Ha ocurrido un error inesperado. Por favor vuelva a intentarlo mas tarde.'
        };
      case 'success':
      default:
        return {
          Icon: CircleCheck,
          iconColor: 'text-blue-800',
          defaultMessage: 'Operación realizada exitosamente.'
        };
    }
  }

  const { Icon, iconColor, defaultMessage } = getDefaultsProps();

  return (
    <Modal {...{ visible }}>
      <div className='flex flex-wrap flex-col px-4 py-3 items-center justify-center h-full text-center'>
        <Icon className={`${iconColor} text-5xl py-4`}/>

        {text || defaultMessage}

        <div className='flex flex-wrap items-center justify-center py-4'>
          {buttons || <MainButton {...{ text: 'Entendido', onClick: closeModal }}/>}
        </div>
      </div>
    </Modal>
  )
}