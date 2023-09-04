'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, SVGProps, useState } from 'react';

import Txt from '../atoms/Txt';
import SearchBar from '../atoms/SearchBar';
import Container from '../atoms/Container';
import Modal from '../molecules/Modal';

import formatDate from '@/app/libs-dd/utils/formatDate';
import Spacing from '../atoms/Spacing';
import joinClassNames from '@/app/libs-dd/utils/joinClassNames';
import IconButton, { IconButtonProps } from '../atoms/IconButton';

export interface HeaderProps {
  hasBorder?: boolean;
  type: 'main' | 'search' | 'detail';
  title?: string;
  left?: IconButtonProps[];
  right?: IconButtonProps[];
}

export default function Header({ hasBorder = false, type, title = '', left = [], right = [] }: HeaderProps) {
  return (
    <div className={joinClassNames('w-full h-full bg-white pt-[44px]', hasBorder ? 'border-b' : '')}>
      {type === 'main' ? <MainHeader /> : null}
      {type === 'search' ? <SearchHeader /> : null}
      {type === 'detail' ? <DetailHeader title={title} left={left} right={right} hasborder={hasBorder} /> : null}
    </div>
  );
}

function MainHeader() {
  return (
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
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' />
          </svg>
        </Link>
      </Container>
    </Container>
  );
}

function SearchHeader() {
  const [search, setSearch] = useState('');
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setSearch(search);
      setIsSearchOpen(false);
      blur();
    }
  };
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  return (
    <>
      <Container className='flex justify-between w-full px-4 space-x-16'>
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
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
            </svg>
          </Link>
          <Link href='/' className='items-center w-8 p-1 rounded-md hover:bg-gray-100 aspect-square'>
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
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
          </Link>
        </Container>
        <SearchBar
          onFocus={() => setIsSearchOpen(true)}
          autoFocus={true}
          onChange={searchHandler}
          onKeyDown={handleSubmit}
        />
      </Container>

      <Modal location={'full'} boundary={'body'} isOpen={isSearchOpen} closeModal={() => setIsSearchOpen(false)}>
        <SearchModalContent />
      </Modal>
    </>
  );
}

const SearchModalContent = () => {
  const recentSearches: { date: Date; word: string }[] = [
    { date: new Date(), word: '심심해' },
    { date: new Date(), word: '뭐하고놀지' },
    { date: new Date(), word: '가평 빠지' },
    { date: new Date(), word: '여름에 물놀이' },
    { date: new Date(), word: '워터파크' },
    { date: new Date(), word: '번지점프' },
    { date: new Date(), word: '바나나보트' },
    { date: new Date(), word: '카약' },
    { date: new Date(), word: '심심해' },
    { date: new Date(), word: '더운데 심심해' },
    { date: new Date(), word: '우헹' },
    { date: new Date(), word: '놀아줘' },
  ];
  return (
    <Container className='p-8'>
      <Container className='flex justify-between w-full'>
        <Txt typography='caption' color='disable'>
          최근 검색어
        </Txt>
        <Txt typography='caption' color='disable'>
          전체삭제
        </Txt>
      </Container>
      <Spacing size={'medium'} />
      <Container className='w-full space-y-2 h-fit'>
        {recentSearches.map((search, index) => (
          <RecentSearch key={`recentResearch${index}`} word={search.word} date={search.date} />
        ))}
      </Container>
    </Container>
  );
};

const RecentSearch = ({ date, word }: { date: Date; word: string }) => {
  return (
    <div className='flex justify-between w-full py-2'>
      <div className='flex space-x-2 align-text-bottom'>
        <Txt>{word}</Txt>
        <Txt typography='caption'>{formatDate(date)}</Txt>
      </div>
      <div className='text-gray-500'>
        <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
};

interface DetailHeaderProps {
  hasborder: boolean;
  title: string;
  left: IconButtonProps[];
  right: IconButtonProps[];
}

function DetailHeader({ hasborder, title, left, right }: DetailHeaderProps) {
  return (
    <Container className={joinClassNames('flex w-full px-2 py-[5px]')}>
      <Container className='flex justify-start w-20 space-x-2'>
        {left.map((item, i) => (
          <IconButton key={`LeftIconButtons${i}`} svg={item.svg} />
        ))}
      </Container>
      <Container className='flex justify-center w-full'>
        <Txt typography='title3' isBold={true}>
          {title}
        </Txt>
      </Container>
      <Container className='flex justify-end w-20 space-x-2'>
        {right.map((item, i) => (
          <IconButton key={`rightIconButtons${i}`} svg={item.svg} />
        ))}
      </Container>
    </Container>
  );
}
