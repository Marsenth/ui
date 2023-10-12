import { ReactElement } from 'react';
import { MAIN_HEADER_PX, MAIN_HEADER_W } from '../Header/classNames';

export const PageContent = ({ children }: { children: ReactElement }) => (
  <div className={`${MAIN_HEADER_W} ${MAIN_HEADER_PX} m-auto my-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10`}>
    {children}
  </div>
);
