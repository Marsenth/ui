import { v4 as uuidv4 } from 'uuid';
import { MainHeaderNavVarProps } from './interfaces';

export const NavBar = (props: MainHeaderNavVarProps) => {
  return (
    <div className="hidden md:block">
      <div className="flex items-baseline space-x-5">
        {props?.data?.map((item) => <div className='text-white' key={uuidv4()}>
          {props?.renderItem?.(item)}
        </div>)}
      </div>
    </div>
  );
}

export default NavBar;
