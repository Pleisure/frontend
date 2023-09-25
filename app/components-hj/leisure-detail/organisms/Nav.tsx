'use client';

import { STORE_POST_DATA } from '@/app/libs-hj/data/STORE_POST_DATA';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 탭 클릭 시, 레저정보 or 리뷰섹션으로 스크롤 이동하는 함수
  const tabClickHandler = (id: string) => {
    window.scrollTo({
      top: document.getElementById(id)?.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const options = { passive: true };
    // 스크롤 이동 시, 스크롤 위치에 따라 알맞은 탭에 불이 켜지는 함수
    const scroll = () => {
      const { scrollY } = window;
      setScrollPosition(scrollY);
      // console.log('scrollY ==> ', scrollY);
    };

    document.addEventListener('scroll', scroll, options);
    // window.addEventListener('scroll', updateScroll);
    // window가 아닌 document에 했었어야 했나?!!!? 해내버렸다 ㅇ0ㅇ
    // return () => window.removeEventListener('scroll', updateScroll);
    return () => document.removeEventListener('scroll', scroll);
  }, []);

  return (
    <nav className="z-30 flex font-bold text-center bg-white leisure-tab">
      <div
        className={`${
          scrollPosition && scrollPosition > 923 && scrollPosition < 1732
            ? 'leisureTab '
            : ''
        } w-1/2 pb-3 pt-6 border-b-[1px] cursor-pointer`}
        onClick={() => tabClickHandler('store-info')}
      >
        레저 정보
      </div>
      <div
        className={`${
          scrollPosition && scrollPosition > 1732 ? 'reviewTab ' : ''
        } w-1/2 pb-3 pt-6 border-b-[1px] cursor-pointer`}
        onClick={() => tabClickHandler('review')}
      >
        리뷰 (
        {STORE_POST_DATA.storeReviewCount! > 999
          ? '999+'
          : STORE_POST_DATA.storeReviewCount}
        )
      </div>
      <style jsx>
        {`
          .leisure-tab {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
          }
          .leisureTab {
            border-bottom: solid 2px #22d3ee;
            color: #22d3ee;
          }
          .reviewTab {
            border-bottom: solid 2px #22d3ee;
            color: #22d3ee;
          }
        `}
      </style>
    </nav>
  );
}
