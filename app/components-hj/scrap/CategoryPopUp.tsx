import React, { Dispatch, SetStateAction } from 'react';

interface ShowProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function PopUp({ show, setShow }: ShowProps) {
  return (
    <div className="max-w-md">
      <div className="px-4 mt-10 category">
        <div
          className="z-20 flex justify-around py-3 text-sm font-bold duration-200 ease-in-out rounded-lg cursor-pointer w-[8.8rem] px-7 bg-grayBg hover:bg-darkGrayBg"
          onClick={() => setShow(!show)}
        >
          <span>카테고리</span>
          <div className="flex items-center">
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
          </div>
        </div>
      </div>

      {/* pop-up */}
      <ul
        className={`${
          show ? 'popup-list active' : 'popup-list'
        } fixed bottom-0 z-[99] w-[27.75rem] min-w-[360px] px-3 py-3 category-pop-up bg-white rounded-t-xl`}
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
          transform: translateY(420px);
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
