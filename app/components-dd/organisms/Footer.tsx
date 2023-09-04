import Link from 'next/link';
import Txt from '../atoms/Txt';
import joinClassNames from '@/app/libs-dd/utils/joinClassNames';
import Button, { ButtonProps } from '../atoms/Button';

export type ROOT = 'home' | 'leisures' | 'community' | 'myPage';

export interface FooterProps {
  type: 'none' | 'nav' | 'buttons';
  root: ROOT;
  children: React.ReactNode;
}

export default function Footer({ type, root, children }: FooterProps) {
  return (
    <div className={joinClassNames('w-full h-full shadow-md rounded-t-md', type === 'none' ? 'hidden' : '')}>
      {type === 'nav' && <Nav root={root} />}
      {type === 'buttons' && <ButtonFooter>{children}</ButtonFooter>}
    </div>
  );
}

function Nav(root: { root: ROOT }) {
  return (
    <div className='w-full h-full bg-white border border-t rounded-t-md'>
      <div className='grid w-full grid-cols-4 gap-1 px-5'>
        <Link
          href={'/'}
          className={joinClassNames(
            'flex flex-col items-center w-full h-full pt-2 pb-4',
            root.root === 'home' ? 'text-cyan-400 font-bold' : ''
          )}
        >
          <div className='h-12 p-2 aspect-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
          </div>
          <div>
            <Txt typography='caption'>Home</Txt>
          </div>
        </Link>

        <Link
          href={'/leisures'}
          className={joinClassNames(
            'flex flex-col items-center w-full h-full pt-2 pb-4',
            root.root === 'leisures' ? 'text-cyan-400 font-bold' : ''
          )}
        >
          <div className='h-12 p-2 aspect-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          </div>
          <div>
            <Txt typography='caption'>Leisure</Txt>
          </div>
        </Link>

        <Link
          href={'/community'}
          className={joinClassNames(
            'flex flex-col items-center w-full h-full pt-2 pb-4',
            root.root === 'community' ? 'text-cyan-400 font-bold' : ''
          )}
        >
          <div className='h-12 p-2 aspect-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
              />
            </svg>
          </div>
          <div>
            <Txt typography='caption'>Community</Txt>
          </div>
        </Link>

        <Link
          href={'/my-page'}
          className={joinClassNames(
            'flex flex-col items-center w-full h-full pt-2 pb-4',
            root.root === 'myPage' ? 'text-cyan-400 font-bold' : ''
          )}
        >
          <div className='h-12 p-2 aspect-square'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </div>
          <div>
            <Txt typography='caption'>My Page</Txt>
          </div>
        </Link>
      </div>
    </div>
  );
}

interface ButtonFooterProps {
  children: React.ReactNode;
}
function ButtonFooter({ children }: ButtonFooterProps) {
  return <div className='w-full h-full px-5 py-2 bg-gradient-to-t from-white from-80%'>{children}</div>;
}
