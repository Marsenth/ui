import { ReactElement } from 'react';
import { MAIN_HEADER_W } from '../Header/classNames';

export const Content = ({ children }: { children: ReactElement }) => (
  <div className={`${MAIN_HEADER_W} px-0 sm:px-6 lg:px-8 m-auto`}>
    {children}
  </div>
);
