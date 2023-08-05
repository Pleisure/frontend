'use client';

import { useState } from 'react';
import '@/app/globals.css';
import CategoryPopUp from '@/app/components-hj/scrap/CategoryPopUp';
import LeisureStorePost from '@/app/components-hj/scrap/LeisureStorePost';

export default function Scrap() {
  const [show, setShow] = useState(false);

  return (
    <div className="container relative max-w-md min-w-[360px] m-auto border-2 notosanskr text-grayTxt">
      {show && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-[50%] z-[9]"
          onClick={() => {
            setShow(!show);
          }}
        ></div>
      )}

      <header className="flex px-4 mt-6 mb-3">
        <div className="flex items-center justify-center cursor-pointer">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <p className="w-full mr-4 text-xl font-bold text-center">스크랩</p>
      </header>

      {/* category */}
      <CategoryPopUp show={show} setShow={setShow} />

      {/* Leisure store post */}
      <section className="grid grid-cols-2 px-4 my-7 place-items-center">
        <LeisureStorePost />
        <LeisureStorePost />
        <LeisureStorePost />
        <LeisureStorePost />
        <LeisureStorePost />
        <LeisureStorePost />
      </section>
    </div>
  );
}
