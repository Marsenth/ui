import { ReactElement } from 'react';
import { MAIN_HEADER_PX, MAIN_HEADER_W } from '../Header/classNames';
import { MAIN_CONTENT_MIN_H } from './classNames';

export const Content = ({ children }: { children: ReactElement }) => (
  <div className={`${MAIN_HEADER_W} ${MAIN_HEADER_PX} ${MAIN_CONTENT_MIN_H} m-auto`}>
    {children}
  </div>
);
