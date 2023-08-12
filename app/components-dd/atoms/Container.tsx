import joinStrings from '@/app/libs-dd/utils/joinStrings';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: Props) {
  return <div className={joinStrings('bg-transparent', className)}>{children}</div>;
}
