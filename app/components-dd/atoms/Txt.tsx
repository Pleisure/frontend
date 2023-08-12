import joinStrings from '@/app/libs-dd/utils/joinStrings';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography?: 'title1' | 'title2' | 'title3' | 'title4' | 'body' | 'caption';
  color?: 'default' | 'accent' | 'error' | 'disable' | 'white';
  isBold?: boolean;
  isItalics?: boolean;
  isUnderlined?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Txt({
  typography = 'body',
  isBold = false,
  isItalics = false,
  isUnderlined = false,
  color,
  className = '',
  children,
  ...props
}: Props) {
  return (
    <p
      className={joinStrings(
        TYPOGRAPH_VARIANT[typography],
        isBold ? 'font-bold' : '',
        isItalics ? 'italic' : '',
        isUnderlined ? 'underline' : '',
        className,
        color ? COLOR_PALLET[color] : ''
      )}
      {...props}
    >
      {children}
    </p>
  );
}

const TYPOGRAPH_VARIANT = {
  title1: 'text-[34px]',
  title2: 'text-[28px]',
  title3: 'text-[22px]',
  title4: 'text-[20px]',
  body: 'text-[17px]',
  caption: 'text-[12px]',
};

const COLOR_PALLET = {
  default: 'text-gray-900',
  accent: 'text-green-500',
  error: 'text-red-500',
  disable: 'text-gray-500',
  white: 'text-white',
};
