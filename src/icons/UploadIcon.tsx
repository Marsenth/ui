import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

export const UploadIcon = ({ className }: { className?: string }) => (
  <FontAwesomeIcon icon={faCloudUpload} className={className || 'text-gray-300 text-xl'}/>)
;

export default UploadIcon;
