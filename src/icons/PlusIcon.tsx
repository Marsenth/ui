import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const PlusIcon = ({ className }: { className?: string }) => (
  <FontAwesomeIcon icon={faPlus} className={className || 'text-gray-300 text-xl'}/>)
;

export default PlusIcon;
