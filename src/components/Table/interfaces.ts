import { ReactElement } from 'react';

interface TableColumnProps {
  title: string;
  dataIndex: string;
}

interface TableDataItemProps {
  key: string;
  [key: string]: string | ReactElement
}

export interface TableProps {
  className: string;
  columns: TableColumnProps[];
  data: TableDataItemProps[];
}