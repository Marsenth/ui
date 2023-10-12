import { ReactElement } from 'react';
import { MAIN_HEADER_CONTENT_CLASS, MAIN_HEADER_CLASS } from './classNames';
import getClassName from '../../shared/helpers/className/getClassName';

export const Header = ({ children, className }: { children: ReactElement; className: string }) => (
  <header className={getClassName(MAIN_HEADER_CLASS, className)}>
    <div className={`${MAIN_HEADER_CONTENT_CLASS}`}> 
      {children}
    </div>
  </header>
);

export default Header;
