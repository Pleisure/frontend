'use client';

import { MouseEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { IBanner } from '@/app/libs-dd/hooks/useBanners';
import Pagination from '../atoms/Pagination';
import joinClassNames from '@/app/libs-dd/utils/joinClassNames';

interface Props {
  banners: IBanner[];
}

export default function Banner({ banners }: Props) {
  const [currIndex, setCurrIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current!.style.transform = `translateX(-${currIndex - 1}00%)`;
    }
  }, [currIndex]);
  const handlePrevClick = () => {
    if (currIndex > 1) {
      setCurrIndex(currIndex - 1);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transform = `translateX(+${currIndex - 1}00%)`;
      }
    }
  };
  const handleNextClick = () => {
    if (currIndex < banners.length) {
      setCurrIndex(currIndex + 1);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transform = `translateX(-${currIndex - 1}00%)`;
      }
    }
  };

  return (
    <div className='relative w-full bg-transparent aspect-video group'>
      <div className='w-full h-full overflow-hidden'>
        <div className={'flex w-fit h-full transition-all ease-in-out duration-500'} ref={carouselRef}>
          {banners.map((banner) => (
            <BannerItem key={'banner' + banner.bannerId} banner={banner} />
          ))}
        </div>
      </div>
      <PrevButton handelPrevClick={handlePrevClick} isDisable={currIndex === 1} />
      <NextButton handelNextClick={handleNextClick} isDisable={currIndex === banners.length} />

      <div className='absolute left-0 flex justify-center w-full bottom-4 h-fit'>
        <Pagination currentPage={currIndex} totalPage={banners.length} />
      </div>
    </div>
  );
}

const BannerItem = ({ banner }: { banner: IBanner }) => {
  return (
    <div id={'banner' + banner.bannerId} className='flex-shrink-0 w-full h-full snap-center'>
      <Link className='w-full h-full' href={banner.bannerLink}>
        <img src={banner.bannerImageUrl} className='object-cover w-full h-full' alt={''} />
      </Link>
    </div>
  );
};

const PrevButton = ({
  handelPrevClick,
  isDisable = false,
}: {
  handelPrevClick: MouseEventHandler;
  isDisable?: boolean;
}) => {
  return (
    <button
      disabled={isDisable}
      onClick={handelPrevClick}
      className='absolute top-0 left-0 invisible h-full p-1 transition duration-500 ease-in-out rounded-md w-fit group-hover:visible'
    >
      <IconButton isDisable={isDisable}>
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
      </IconButton>
    </button>
  );
};

const NextButton = ({
  handelNextClick,
  isDisable = false,
}: {
  handelNextClick: MouseEventHandler;
  isDisable?: boolean;
}) => {
  return (
    <button
      disabled={isDisable}
      onClick={handelNextClick}
      className='absolute top-0 right-0 invisible h-full p-1 transition duration-500 ease-in-out rounded-md w-fit group-hover:visible'
    >
      <IconButton isDisable={isDisable}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </IconButton>
    </button>
  );
};

const IconButton = ({ children, isDisable }: { children: React.ReactNode; isDisable: boolean }) => {
  return (
    <div
      className={joinClassNames(
        'p-1 rounded-md w-fit h-fit aspect-square',
        isDisable ? 'opacity-50 bg-gray-400' : 'opacity-70 bg-white'
      )}
    >
      {children}
    </div>
  );
};
