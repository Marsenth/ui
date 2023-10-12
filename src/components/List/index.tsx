import { Fragment } from 'react';

export const List = ({ className, data, renderItem }: any) => (
  <div className={(className)}>
    {data?.map((item: any) => (
      <Fragment key={item._id}>
        {renderItem(item)}
      </Fragment>
    ))}    
  </div>
);