import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const LocationDot = ({ className }: { className?: string }) => (
  <FontAwesomeIcon icon={faLocationDot} className={className}/>)
;

export default LocationDot;
