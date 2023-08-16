'use client';

import React from 'react';
import Icon from '../atoms/Icon';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 mt-6 mb-3 previous">
      <div className="flex items-center cursor-pointer w-9 h-9">
        <Icon
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathD="M15 19l-7-7 7-7"
        />
      </div>
      <p className="w-[65%] overflow-hidden text-xl font-bold text-center break-all title-txt text-ellipsis">
        {title}
      </p>
      <div className="flex items-center cursor-pointer share w-9 h-9">
        <Icon
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathD="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </div>
      <style jsx>{`
        .title-txt {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </header>
  );
}
