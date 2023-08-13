'use client';

import React, { useState } from 'react';
import IconSvg from './atoms/IconSvg';

export default function PopUp() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full mt-6">
      {show && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-[50%] z-10"
          onClick={() => {
            setShow(false);
          }}
        ></div>
      )}
      <div className="px-4 category">
        <div
          className="z-20 flex justify-around py-3 text-sm font-bold duration-200 ease-in-out rounded-lg cursor-pointer w-[8.8rem] px-7 bg-grayBg hover:bg-darkGrayBg"
          onClick={() => setShow(!show)}
        >
          <span>카테고리</span>
          <div className="flex items-center">
            <IconSvg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              pathD="M19 9l-7 7-7-7"
            />
          </div>
        </div>
      </div>

      {/* pop-up */}
      {/* 🚨 아직 미해결 : show 가 false 일 경우, transition을 주었기 때문에 첫 렌더링 시, 해당 애니메이션이 보여벌임 */}
      <ul
        className={`${
          show ? 'popup-list active' : 'popup-list'
        } fixed bottom-0 z-[99] w-[28rem] px-3 py-3 category-pop-up bg-white rounded-t-xl`}
      >
        {CATEGORY_LIST.map(({ id, name, scrapCount }) => {
          return (
            <li
              className="flex justify-between px-4 py-3 mt-2 duration-200 ease-in-out rounded-lg cursor-pointer hover:bg-grayBg"
              key={id}
            >
              <a className="font-bold">카테고리 {name}</a>
              <span className="font-bold text-cyanTxt">{scrapCount}</span>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .popup-list {
          transform: translateY(500px);
          transition: 500ms all ease-in-out;
          box-shadow: 0px -5px 5px -2px rgba(87, 83, 78, 0.2);
        }

        .popup-list.active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

const CATEGORY_LIST = [
  { id: 1, name: '1', scrapCount: '20' },
  { id: 2, name: '2', scrapCount: '2' },
  { id: 3, name: '3', scrapCount: '6' },
  { id: 4, name: '4', scrapCount: '12' },
  { id: 5, name: '5', scrapCount: '37' },
  { id: 6, name: '6', scrapCount: '0' },
  { id: 7, name: '7', scrapCount: '6' },
];
