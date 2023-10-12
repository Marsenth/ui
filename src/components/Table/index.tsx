import { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TableProps } from './interfaces';
import getClassName from '../../shared/helpers/className/getClassName';

export const Table = ({ className, columns, data }: TableProps) => {
  const dataIndexPositions: { [key: string]: any } = columns.reduce((accum, { dataIndex }, i) => (
    Object.assign(accum, { [dataIndex]: i})
  ), {});

  return (
    <table className={getClassName('min-w-full bg-white border border-gray-300', className)}>
      <thead>
        <tr>
          {columns.map(({ dataIndex, title }) => (
            <th className="px-6 py-3 border-b text-left" key={dataIndex}>
              {title}
            </th>
          ))}
          {/* Add more columns as needed */}
        </tr>
      </thead>

      <tbody>
          {data.map((item) => {
            const { key, ...rest } = item;

            return <tr key={key || uuidv4()}>{
              Object.keys(rest).reduce(
                (accum, dataIndex) => {
                  const i = dataIndexPositions[dataIndex];
                  accum[i] = <td className="px-6 py-4 border-b" key={`${key}-${dataIndex}`}>
                    {item[dataIndex]}
                  </td>;
                  return accum;
                },
              [] as ReactElement[])
            }</tr>;
          })}
          {/* Add more data rows as needed */}
      </tbody>
    </table>
  );
}
export default Table;
