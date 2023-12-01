'use client';

import { useState } from 'react';
import Link from 'next/link';

import Pagination from '../atoms/Pagination';

import { IBanner } from '@/app/libs-dd/hooks/useBanners';

interface Props {
  banners: IBanner[];
}

export default function Banner({ banners }: Props) {
  const [currentBanner, setCurrentBanner] = useState(1);
  return (
    <div className='relative w-full h-[12.5rem] bg-yellow-200'>
      <div className='absolute left-0 flex justify-center w-full top-40 h-fit'>
        <Pagination currentPage={currentBanner} totalPage={banners.length} />
      </div>
      <div className='w-full carousel'>
        {banners.map((banner, i) => (
          <div key={'banner' + banner.bannerId} id={'banner' + banner.bannerId} className='w-full h-full carousel-item'>
            <Link className='w-full h-full' href={banner.bannerImageUrl}>
              <img src={banner.bannerImageUrl} className='w-full' alt='' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
