'use client';

import { Button } from '@/app/components-dd/atoms/Button';
import Container from '@/app/components-dd/atoms/Container';
import Dropdown from '@/app/components-dd/atoms/Dropdown';
import Txt from '@/app/components-dd/atoms/Txt';
import { useState } from 'react';
import Icon from '../atoms/Icon';

const SORT_TYPES = {
  rating: [
    { rating: '전체', query: 'all' },
    { rating: '1', query: '1' },
    { rating: '2', query: '2' },
    { rating: '3', query: '3' },
    { rating: '4', query: '4' },
    { rating: '5', query: '5' },
  ],
};

export default function RatingButton() {
  const [sort, setSort] = useState(SORT_TYPES.rating[0].rating);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <Container className="ml-3">
      <Button
        variant="tertiary"
        size="medium"
        onClick={() => setFilterOpen((cur) => !cur)}
      >
        <Container className="flex items-center justify-between w-24 text-grayTxt">
          <Txt className="text-[1rem] flex items-center">
            {sort === '전체' || (
              <Icon
                className="w-5 h-5 mr-[0.65rem] text-cyanTxt"
                viewBox="0 0 20 20"
                fill="currentColor"
                pathD="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            )}
            {sort}
          </Txt>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-grayTxt"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Container>
      </Button>
      <Dropdown isOpen={filterOpen}>
        <Container className="flex flex-col w-24 gap-2 mx-4 my-2 dropdown-container">
          {SORT_TYPES.rating.map(({ rating }) => {
            return (
              <Button
                className="px-[0.5rem] py-1 rounded-md hover:bg-gray-100"
                key={rating}
                variant="quaternary"
                onClick={() => {
                  if (sort === rating) {
                    return;
                  }
                  setSort(rating);
                  setFilterOpen((cur) => !cur);
                }}
              >
                <div className="relative flex flex-start gap-3 items-center w-full text-[1rem]">
                  {rating === '전체' || (
                    <Icon
                      className="w-5 h-5 text-cyanTxt"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      pathD="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  )}
                  <span>{rating}</span>
                  <span>
                    {sort === rating ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : undefined}
                  </span>
                </div>
              </Button>
            );
          })}
        </Container>
      </Dropdown>
    </Container>
  );
}
