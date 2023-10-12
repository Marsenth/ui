import { ReactElement } from 'react';

export const Card = ({ children }: { children: ReactElement | ReactElement[] }) => (
  <div className='w-full h-auto shadow-md bg-white rounded-lg overflow-hidden'>
    {children}
  </div>
);