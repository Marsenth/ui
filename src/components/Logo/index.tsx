// @ts-ignore  
import logo from '../../assets/images/logo.png';
import getClassName from '../../shared/helpers/className/getClassName';

export const Logo = ({ className }: { className?: string }) => (
  <img className={getClassName('w-36 md:block', className)} src={logo} alt='Logo' />
);

export default Logo;
