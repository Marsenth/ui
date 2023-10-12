import { ReactElement } from 'react';
import { MAIN_HEADER_H } from '../Header/classNames';
import getClassName from '../../shared/helpers/className/getClassName';

export const Page = ({ children, className }: { children: ReactElement; className?: string; }) => (
  <div className={getClassName(`h-[100dvh] fixed w-full overflow-y-scroll`, className)}>
    <div className={MAIN_HEADER_H}/>
    {children}
  </div>
);

