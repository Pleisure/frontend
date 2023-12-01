'use client';

import { useState } from 'react';

import Txt from '../components-dd/atoms/Txt';
import Button from '../components-dd/atoms/Button';
import Spacing from '../components-dd/atoms/Spacing';
import Dropdown from '../components-dd/atoms/Dropdown';
import Container from '../components-dd/atoms/Container';
import Banner from '../components-dd/molecules/Banner';
import Section from '../components-dd/molecules/Section';
import StoreCard from '../components-dd/molecules/StoreCard';
import LeisureCategory from '../components-dd/molecules/LeisureCategory';
import PageLayout from '../components-dd/organisms/PageLayout';

import { IBanner } from '../libs-dd/hooks/useBanners';
import { ICategory } from '../libs-dd/hooks/useLeisureCategories';
import { ILeisureStore } from '../libs-dd/hooks/useLeisureStores';

export default function Home() {
  const banners: IBanner[] = [
    {
      bannerLocation: 'main0',
      bannerId: 0,
      bannerImageUrl:
        'http://webplanning.kr/wp-content/uploads/2022/07/%ED%9A%8C%EC%9B%90%ED%98%9C%ED%83%9D-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B0%B0%EB%84%88_%EC%88%98%EC%A0%95-300x175.jpg',
      bannerLink: '',
      bannerOrder: 0,
    },
    {
      bannerLocation: 'main0',
      bannerId: 1,
      bannerImageUrl: 'https://file.mk.co.kr/meet/neds/2019/03/image_readtop_2019_187662_15537375253687382.jpg',
      bannerLink: '',
      bannerOrder: 1,
    },
    {
      bannerLocation: 'main0',
      bannerId: 2,
      bannerImageUrl:
        'http://webplanning.kr/wp-content/uploads/2022/07/%ED%9A%8C%EC%9B%90%ED%98%9C%ED%83%9D-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B0%B0%EB%84%88_%EC%88%98%EC%A0%95-300x175.jpg',
      bannerLink: '',
      bannerOrder: 0,
    },
    {
      bannerLocation: 'main0',
      bannerId: 3,
      bannerImageUrl: 'https://file.mk.co.kr/meet/neds/2019/03/image_readtop_2019_187662_15537375253687382.jpg',
      bannerLink: '',
      bannerOrder: 1,
    },
    {
      bannerLocation: 'main0',
      bannerId: 4,
      bannerImageUrl:
        'http://webplanning.kr/wp-content/uploads/2022/07/%ED%9A%8C%EC%9B%90%ED%98%9C%ED%83%9D-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B0%B0%EB%84%88_%EC%88%98%EC%A0%95-300x175.jpg',
      bannerLink: '',
      bannerOrder: 0,
    },
    {
      bannerLocation: 'main0',
      bannerId: 5,
      bannerImageUrl: 'https://file.mk.co.kr/meet/neds/2019/03/image_readtop_2019_187662_15537375253687382.jpg',
      bannerLink: '',
      bannerOrder: 1,
    },
  ];
  const categories: ICategory[] = [
    { categoryId: 1, categoryName: '수영', categoryIconUrl: '', categoryOrder: 0 },
    { categoryId: 0, categoryName: '수영', categoryIconUrl: '', categoryOrder: 1 },
    { categoryId: 2, categoryName: '수영', categoryIconUrl: '', categoryOrder: 2 },
    { categoryId: 3, categoryName: '수영', categoryIconUrl: '', categoryOrder: 3 },
    { categoryId: 4, categoryName: '수영', categoryIconUrl: '', categoryOrder: 4 },
    { categoryId: 5, categoryName: '수영', categoryIconUrl: '', categoryOrder: 5 },
    { categoryId: 6, categoryName: '수영', categoryIconUrl: '', categoryOrder: 6 },
    { categoryId: 7, categoryName: '수영', categoryIconUrl: '', categoryOrder: 7 },
    { categoryId: 8, categoryName: '수영', categoryIconUrl: '', categoryOrder: 8 },
    { categoryId: 9, categoryName: '수영', categoryIconUrl: '', categoryOrder: 9 },
    { categoryId: 10, categoryName: '수영', categoryIconUrl: '', categoryOrder: 10 },
    { categoryId: 11, categoryName: '수영', categoryIconUrl: '', categoryOrder: 11 },
    { categoryId: 12, categoryName: '수영', categoryIconUrl: '', categoryOrder: 12 },
    { categoryId: 13, categoryName: '수영', categoryIconUrl: '', categoryOrder: 13 },
  ];
  const leisureStores: ILeisureStore[] = [
    {
      storeId: 0,
      storeName: '가평빠지월드',
      storeThumbnailUrl: '/leisure.webp',
      storeAverageRating: 4.8,
      storeReviewCount: 12,
    },
    {
      storeId: 1,
      storeName: '날아라슈퍼돼지',
      storeThumbnailUrl: '/leisure.webp',
      storeAverageRating: 4.8,
      storeReviewCount: 999,
    },
    {
      storeId: 2,
      storeName: '번지쩜프',
      storeThumbnailUrl: '/leisure.webp',
      storeAverageRating: 4.8,
      storeReviewCount: 55,
    },
    {
      storeId: 3,
      storeName: '캐르비안베이 랑 비슷한 우리동네 빠지',
      storeThumbnailUrl: '/leisure.webp',
      storeAverageRating: 4.8,
      storeReviewCount: 1234,
    },
    { storeId: 4, storeName: '우리집 강아지', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 5, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 6, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 7, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 8, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 9, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 10, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 11, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 12, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 13, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 14, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 15, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 16, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 17, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 18, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
    { storeId: 19, storeName: '수영', storeThumbnailUrl: '', storeAverageRating: 4.8, storeReviewCount: 1234 },
  ];

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <PageLayout header={{ type: 'main' }} footer={{ type: 'nav', root: 'leisures' }}>
      <Section>
        <Banner banners={banners} />
        <Spacing size={40} />
        <Container className='grid w-full grid-cols-5 gap-1 px-5'>
          {categories.map((category) => (
            <LeisureCategory key={`leisureCategory'${category.categoryId}`} href={'/leisures'} category={category} />
          ))}
        </Container>
        <Spacing size={40} />
      </Section>

      <Spacing size={'small'} />

      <Section>
        <Spacing size={'large'} />
        <Container className='w-full px-5 bg-transparent'>
          <Button variant='tertiary' onClick={() => setFilterOpen(!filterOpen)}>
            <Container className='flex justify-between w-36'>
              <Txt>인기 많은 순</Txt>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
              </svg>
            </Container>
          </Button>
          <Dropdown isOpen={filterOpen}>
            <Container className='flex flex-col'>
              <Button variant='quaternary'>인기많은순</Button>
              <Button variant='quaternary'>최신순</Button>
            </Container>
          </Dropdown>
        </Container>

        <Spacing size={'small'} />

        <Container className='grid w-full h-full grid-cols-2 gap-4 px-5'>
          {leisureStores.map((store) => (
            <StoreCard key={`leisureStore${store.storeId}`} store={store} href={`/leisures/${store.storeId}`} />
          ))}
        </Container>

        <Spacing size={'large'} />
      </Section>
    </PageLayout>
  );
}
