'use client';

import { Button } from '@/app/components-dd/atoms/Button';
import Container from '@/app/components-dd/atoms/Container';
import Dropdown from '@/app/components-dd/atoms/Dropdown';
import Txt from '@/app/components-dd/atoms/Txt';
import { useState } from 'react';

const SORT_TYPES = {
  최신순: { name: '최신순', query: 'recent' },
  추천순: { name: '추천순', query: 'helpful' },
};

export default function SortButton() {
  const [sort, setSort] = useState(SORT_TYPES.최신순.name);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <Container>
      <Button
        variant="tertiary"
        size="medium"
        onClick={() => setFilterOpen((cur) => !cur)}
      >
        <Container className="flex items-center justify-between w-32 text-grayTxt">
          <Txt className="text-[1rem]">{sort}</Txt>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Container>
      </Button>
      <Dropdown isOpen={filterOpen}>
        <Container className="flex flex-col w-32 gap-2 mx-4 my-2">
          <Button
            variant="quaternary"
            onClick={() => {
              if (sort === SORT_TYPES.최신순.name) {
                return;
              }
              setSort(SORT_TYPES.최신순.name);
              setFilterOpen((cur) => !cur);
            }}
          >
            <div className="flex justify-between items-center w-full text-[1rem]">
              <span>{SORT_TYPES.최신순.name}</span>
              <span>
                {sort === SORT_TYPES.최신순.name ? (
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
          <Button
            variant="quaternary"
            onClick={() => {
              if (sort === SORT_TYPES.추천순.name) {
                return;
              }
              setSort(SORT_TYPES.추천순.name);
              setFilterOpen((cur) => !cur);
            }}
          >
            <div className="flex justify-between items-center w-full text-[1rem]">
              <span>{SORT_TYPES.추천순.name}</span>
              <span>
                {sort === SORT_TYPES.추천순.name ? (
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
        </Container>
      </Dropdown>
    </Container>
  );
}
