import { SiderProps } from './interfaces';

export const Sider = ({ children, isOpen }: SiderProps) => isOpen ? (
  <>
    <div className='w-screen h-[100dvh] absolute top-0 left-0 z-20 bg-black opacity-50'/>

    <div className='sm:w-96 w-full h-[100dvh] bg-white absolute top-0 right-0 shadow-lg z-20'>
      {children}
    </div>
  </>
) : <></>;

export default Sider;
