import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import getClassName from '../shared/helpers/className/getClassName';

export const ShoppingCartIcon = ({ className }: { className?: string }) => (
  <FontAwesomeIcon icon={faShoppingCart} className={getClassName('text-gray-300 text-xl', className as string)}/>)
;

export default ShoppingCartIcon;
