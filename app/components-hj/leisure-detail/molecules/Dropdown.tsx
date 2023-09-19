'use client';

import { GET } from '@/app/api/reviews/route';
import { useState } from 'react';

export default function Dropdown() {
  const [ratingDropdown, setRatingDropdown] = useState('별점순으로 보기');
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex justify-end mt-3 mb-6">
      <div className="mb-1 btn w-[150px] h-11" onClick={() => setShow(true)}>
        {ratingDropdown}
      </div>
      <ul
        className={`absolute top-[52px] right-0 shadow menu z-[1] bg-white rounded-box w-[150px] p-2 ${
          show ? 'block' : 'hidden'
        }`}
      >
        {RATING_FILTERING.map(({ id, rating }) => {
          const rate = rating === 'all' ? '전체' : rating;
          return (
            <li
              key={id}
              className="h-8"
              onClick={() => {
                GET(rate);
                setRatingDropdown(rate);
                setShow(false);
              }}
            >
              <a className="block py-1 text-center text-grayTxt active:!text-grayTxt active:!bg-darkGrayBg">
                {rate === 'all' ? '전체' : rate}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const RATING_FILTERING = [
  { id: 1, rating: 'all' },
  { id: 2, rating: '5점' },
  { id: 3, rating: '4점' },
  { id: 4, rating: '3점' },
  { id: 5, rating: '2점' },
  { id: 6, rating: '1점' },
];
