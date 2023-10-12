import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export const TriangleExclamation = ({ className }: { className?: string }) => (
  <FontAwesomeIcon icon={faTriangleExclamation} className={className}/>)
;

export default TriangleExclamation;
