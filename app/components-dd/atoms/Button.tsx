import joinClassNames from '@/app/libs-dd/utils/joinClassNames';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  isWidthFull?: boolean;
}

export default function Button({ variant = 'primary', size = 'small', isWidthFull = false, ...props }: Props) {
  return <button className={joinClassNames('flex', TYPE_VARIANTS[variant], SIZE_VARIANTS[size])} {...props} />;
}

const TYPE_VARIANTS = {
  primary:
    'border rounded-md bg-[#00C2FF] hover:bg-[#00B4ED] text-white disabled:text-gray-300 disabled:bg-gray-200 disabled:border-gray-200 border-[#00C2FF]',
  secondary:
    'border rounded-md bg-white border-[#00C2FF] hover:bg-gray-100 text-[#00C2FF] disabled:text-gray-300 disabled:bg-gray-200 disabled:border-gray-400',
  tertiary:
    'border rounded-md bg-white border-gray-400 hover:bg-gray-100 text-gray-400 disabled:text-gray-300 disabled:bg-gray-200 disabled:border-gray-400',
  quaternary:
    'border rounded-md bg-transparent border-transparent text-gray-900 disabled:text-gray-300 hover:bg-gray-100',
};

const SIZE_VARIANTS = {
  xsmall: 'px-1 py-[2px] text-xm',
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-md',
  large: 'px-6 py-3 text-lg',
};
