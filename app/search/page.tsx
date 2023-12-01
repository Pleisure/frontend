'use client';

import { useState } from 'react';

import Container from '../components-dd/atoms/Container';
import Dropdown from '../components-dd/atoms/Dropdown';
import Spacing from '../components-dd/atoms/Spacing';
import Button from '../components-dd/atoms/Button';
import Modal from '../components-dd/molecules/Modal';
import Txt from '../components-dd/atoms/Txt';
import Section from '../components-dd/molecules/Section';
import StoreCard from '../components-dd/molecules/StoreCard';
import PageLayout from '../components-dd/organisms/PageLayout';

import { ICategory } from '../libs-dd/hooks/useLeisureCategories';
import { ILeisureStore } from '../libs-dd/hooks/useLeisureStores';

export default function Home() {
  const categories: ICategory[] = [
    { categoryId: 1, categoryName: '수상레저', categoryIconUrl: '', categoryOrder: 0 },
    { categoryId: 0, categoryName: '캠핑/글램핑', categoryIconUrl: '', categoryOrder: 1 },
    { categoryId: 2, categoryName: '겨울레저', categoryIconUrl: '', categoryOrder: 2 },
    { categoryId: 3, categoryName: '테마파크', categoryIconUrl: '', categoryOrder: 3 },
    { categoryId: 4, categoryName: '익스트림', categoryIconUrl: '', categoryOrder: 4 },
    { categoryId: 5, categoryName: '골프', categoryIconUrl: '', categoryOrder: 5 },
    { categoryId: 6, categoryName: '스키/눈썰매', categoryIconUrl: '', categoryOrder: 6 },
    { categoryId: 7, categoryName: 'VR/방탈출', categoryIconUrl: '', categoryOrder: 7 },
    { categoryId: 8, categoryName: '실내스포츠', categoryIconUrl: '', categoryOrder: 8 },
    { categoryId: 9, categoryName: '실외스포츠', categoryIconUrl: '', categoryOrder: 9 },
    { categoryId: 10, categoryName: '테마카페', categoryIconUrl: '', categoryOrder: 10 },
    { categoryId: 11, categoryName: '낚시', categoryIconUrl: '', categoryOrder: 11 },
    { categoryId: 12, categoryName: '투어/관광', categoryIconUrl: '', categoryOrder: 12 },
    { categoryId: 13, categoryName: '전시예매', categoryIconUrl: '', categoryOrder: 13 },
    { categoryId: 14, categoryName: '대여', categoryIconUrl: '', categoryOrder: 14 },
    { categoryId: 15, categoryName: '원데이클래스', categoryIconUrl: '', categoryOrder: 15 },
    { categoryId: 16, categoryName: '키즈카페', categoryIconUrl: '', categoryOrder: 16 },
  ];
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const closeModalHandler = () => {
    setIsFilterOpen(false);
  };
  return (
    <PageLayout header={{ type: 'search' }} footer={{ type: 'none', root: 'home' }}>
      <Section>
        <Container className='sticky top-0 bg-white '>
          <Spacing size={10} />
          <Container className='flex w-full'>
            <Spacing size='small' dir='vertical' />
            <Container className='flex justify-end w-full align-middle bg-transparent'>
              <SortingDropdown />
              <Spacing size='xsmall' dir='vertical' />
              <Button size='medium' onClick={() => setIsFilterOpen(true)}>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                    clipRule='evenodd'
                  />
                </svg>
                <Txt typography='caption'>필터</Txt>
              </Button>
            </Container>
            <Spacing size='small' dir='vertical' />
          </Container>
          <Spacing size={10} />
        </Container>
        <Spacing size={'small'} />
        <LeisureStoreList />
        <Spacing size={'large'} />
      </Section>
      <Modal isOpen={isFilterOpen} closeModal={closeModalHandler} boundary={'screen'} location={'right'}>
        <div className='h-full py-4 overflow-y-auto w-fit'>
          {categories.map((category) => (
            <div className='px-8 py-3 border-t h-fit w-60 hover:bg-gray-300' key={'category' + category.categoryId}>
              {category.categoryName}
            </div>
          ))}
        </div>
      </Modal>
    </PageLayout>
  );
}

const SortingDropdown = () => {
  const [sortOpen, setSortOpen] = useState(false);
  return (
    <div>
      <Button size='medium' variant='tertiary' onClick={() => setSortOpen(!sortOpen)}>
        <Txt typography='caption'>인기 많은 순</Txt>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-4 h-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
        </svg>
      </Button>
      <Dropdown isOpen={sortOpen}>
        <Container className='flex flex-col'>
          <Button variant='quaternary'>인기많은순</Button>
          <Button variant='quaternary'>최신순</Button>
        </Container>
      </Dropdown>
    </div>
  );
};

const LeisureStoreList = () => {
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
  return (
    <Container className='grid w-full h-full grid-cols-2 gap-4 px-5'>
      {leisureStores.map((store) => (
        <StoreCard key={`leisureStore${store.storeId}`} store={store} href={`/leisures/${store.storeId}`} />
      ))}
    </Container>
  );
};
