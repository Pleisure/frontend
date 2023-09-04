import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {}

export default function SearchBar({ ...props }: Props) {
  return (
    <div className='flex w-full px-2 py-1.5 space-x-4 text-sm bg-white border rounded-md'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-5 h-5'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
      </svg>
      <input
        placeholder='검색어를 입력하세요.'
        maxLength={18}
        className='w-full border-0 shadow-sm placeholder:text-gray-400 focus:outline-none'
        {...props}
      />
    </div>
  );
}
