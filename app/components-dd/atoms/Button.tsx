import joinStrings from '@/app/libs-dd/utils/joinStrings';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'small' | 'medium' | 'large';
  isWidthFull?: boolean;
}

export function Button({ variant = 'primary', size = 'medium', isWidthFull = false, ...props }: Props) {
  return <button className={joinStrings(TYPE_VARIANTS[variant], SIZE_VARIANTS[size])} {...props} />;
}

const TYPE_VARIANTS = {
  primary:
    'border-2 rounded-md bg-[#00C2FF] hover:bg-[#00B4ED] text-white disabled:text-gray-300 disabled:bg-gray-200 disabled:border-gray-200',
  secondary:
    'border-2 rounded-md bg-white border-[#00C2FF] hover:bg-gray-100 text-[#00C2FF] disabled:text-gray-300 disabled:bg-gray-200 disabled:border-gray-400',
  tertiary:
    'border-2 rounded-md bg-white border-gray-400 hover:bg-gray-100 text-gray-400 disabled:text-gray-300 disabled:bg-gray-200 disabled:border-gray-400',
  quaternary: 'border-2 rounded-md bg-transparent border-transparent text-gray-900 disabled:text-gray-300',
};

const SIZE_VARIANTS = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-md',
  large: 'px-6 py-3 text-lg',
};
