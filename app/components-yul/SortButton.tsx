'use client';

import { useState } from 'react';
import { Button } from '../components-dd/atoms/Button';
import Container from '../components-dd/atoms/Container';
import Dropdown from '../components-dd/atoms/Dropdown';
import Txt from '../components-dd/atoms/Txt';

const 최신순 = '최신순';
const 추천순 = '추천순';

export default function SortButton() {
  const [sort, setSort] = useState(최신순);
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <Container className="w-full px-5 bg-transparent">
      <Button variant="tertiary" onClick={() => setFilterOpen((cur) => !cur)}>
        <Container className="flex justify-between w-36">
          <Txt>{sort}</Txt>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
        <Container className="flex flex-col">
          <Button
            variant="quaternary"
            onClick={() => {
              if (sort === 최신순) {
                return;
              }
              setSort(최신순);
              setFilterOpen((cur) => !cur);
            }}
          >
            <div className="flex justify-between w-36">
              <span>{최신순}</span>
              <span>
                {sort === 최신순 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
              if (sort === 추천순) {
                return;
              }
              setSort(추천순);
              setFilterOpen((cur) => !cur);
            }}
          >
            <div className="flex justify-between">
              <Txt>{추천순}</Txt>
              <span>
                {sort === 추천순 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
