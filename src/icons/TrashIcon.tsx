import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import getClassName from '../shared/helpers/className/getClassName';

export const TrashIcon = ({ className = 'text-xl' }: { className?: string }) => (
  <FontAwesomeIcon icon={faTrash} className={getClassName('text-gray-300', className as string)}/>)
;

export default TrashIcon;
