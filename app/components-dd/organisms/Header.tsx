import Link from 'next/link';
import Container from '../atoms/Container';

export interface HeaderProps {
  type: 'main' | 'search' | 'detail';
}

export default function Header({ type }: HeaderProps) {
  return (
    <div className='w-full h-full bg-white border-b pt-[44px]'>
      {/* 이후에 타입 별 헤더 추가 할 예정 */}
      <Container className='flex justify-between w-full px-2 py-[5px]'>
        <Link href='/'>
          <img src='/logo.png' className='h-8' />
        </Link>
        <Container className='flex space-x-2 w-fit'>
          <Link href='/search' className='items-center w-8 p-1 rounded-md hover:bg-gray-100 aspect-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </Link>
          <Link href='/bookmarks' className='items-center w-8 p-1 rounded-md hover:bg-gray-100 aspect-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
              />
            </svg>
          </Link>
        </Container>
      </Container>
    </div>
  );
}
