'use client';

import { useState } from 'react';
import Button from '../components-dd/atoms/Button';
import Container from '../components-dd/atoms/Container';
import Txt from '../components-dd/atoms/Txt';
import Dropdown from '../components-dd/atoms/Dropdown';
import Star from './star';

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
    <Container className="mt-4 ml-3">
      <Button
        variant="tertiary"
        size="medium"
        onClick={() => setFilterOpen((cur) => !cur)}
      >
        <Container className="flex items-center justify-between w-24 text-grayTxt">
          <Txt className="text-[1rem] flex items-center">
            {sort === '전체' || (
              <Star
                isFilled={true}
                fillStarClassName="w-5 h-5 mr-[0.65rem] text-cyan-400"
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
                    <Star
                      isFilled={true}
                      fillStarClassName="w-5 h-5 text-cyan-400"
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
