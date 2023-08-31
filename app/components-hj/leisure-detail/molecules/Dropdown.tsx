'use client';

import { GET } from '@/app/api/reviews/route';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

export default function Dropdown() {
  const [ratingDropdown, setRatingDropdown] = useState('별점순으로 보기');
  const [show, setShow] = useState(false);

  // postman mock data 를 만들어서 post를 시험 삼아 해보려했으나 실패..
  // postman 어떻게 하는지 더 공부 필요..
  // function axiosRatingQuery(rate: string) {
  //   axios
  //     .get(
  //       `https://c6b7e9bc-4b87-4f71-a2bd-db8aade9d5f0.mock.pstmn.io/reviews?rating=${rate}`
  //     )
  //     .then((res) => console.log(res));
  // }

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
              <Link
                className="block py-1 text-center text-grayTxt"
                href={{ query: { rate: rate === '전체' ? 'all' : rate[0] } }}
                scroll={false}
              >
                {rate === 'all' ? '전체' : rate}
              </Link>
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
