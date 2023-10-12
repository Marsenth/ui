import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const CircleCheck = ({ className }: { className?: string }) => (
  <FontAwesomeIcon icon={faCircleCheck} className={className}/>)
;

export default CircleCheck;
