'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  divStyle: string;
  buttonStyle: string;
  content: string;
  linkHref?: string | undefined;
}
// ButtonHTMLAttributes<HTMLButtonElement>를 extends하면
// 기본적인 button의 attribute와 event등을 사용할 수 있음

export default function Button({
  divStyle,
  buttonStyle,
  content,
  linkHref = '/',
  ...props
}: Props) {
  return (
    <div className={divStyle}>
      <Link href={linkHref}>
        <button className={buttonStyle} {...props}>
          {content}
        </button>
      </Link>
    </div>
  );
}
