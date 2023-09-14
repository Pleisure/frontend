import { ReactNode } from 'react';
import TableRow from '../atoms/TableRow';

export const Table = Object.assign(CEOTable, {
  Row: TableRow,
});

interface TableProps {
  children?: ReactNode;
  tableClassName: string;
  tbodyClassName: string;
}

export function CEOTable({
  children,
  tableClassName,
  tbodyClassName,
}: TableProps) {
  return (
    <table className={tableClassName}>
      <tbody className={tbodyClassName}>{children}</tbody>
    </table>
  );
}
