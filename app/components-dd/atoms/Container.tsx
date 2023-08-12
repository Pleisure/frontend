import joinClassNames from '@/app/libs-dd/utils/joinClassNames';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: Props) {
  return <div className={joinClassNames('bg-transparent', className)}>{children}</div>;
}
