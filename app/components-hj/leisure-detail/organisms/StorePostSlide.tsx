'use client';

import React, { useEffect, useRef, useState } from 'react';
import Photo from '../atoms/Photo';
import SlideBtn from '../molecules/SlideBtn';

interface Data {
  id: number;
  imgUrl: string;
}

type DataArr = Data[];

export default function StorePostSlide() {
  const slideRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideTransition, setSlideTransition] = useState('transition-all');
  const [touchedX, setTouchedX] = useState(0);
  const [touchedY, setTouchedY] = useState(0);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.width = TEST_SLIDE
        ? `${TEST_SLIDE.length * 28}rem`
        : '0';
    }
  }, [TEST_SLIDE]);

  // 슬라이드 양쪽에 첫번째, 끝번째 데이터 복사하는 함수
  // const copiedData = (data: DataArr) => {
  //   const dataStart = data[0];
  //   const dataEnd = data[data.length - 1];
  //   const dataCopyArr = [dataEnd, ...data, dataStart];
  //   return dataCopyArr;
  // };

  const handleSlide = (direction: string) => {
    const sliderLength = TEST_SLIDE.length;
    const newCurr = direction === 'next' ? slideIndex + 1 : slideIndex - 1;
    setSlideIndex(newCurr);

    if (newCurr === sliderLength) {
      resetSlide(0);
    } else if (newCurr < 0) {
      resetSlide(sliderLength - 1);
    }

    setSlideTransition('transition-all');
  };

  // transition 일시적으로 없애는 함수
  const resetSlide = (n: number) => {
    setTimeout(() => {
      setSlideTransition('');
      setSlideIndex(n);
    }, 10);
  };

  // 📱 mobile version 터치 드래그
  // 터치를 한 x좌표
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchedX(e.changedTouches[0].pageX);
    setTouchedY(e.changedTouches[0].pageY);
  };

  // 터치를 뗀 x좌표
  const onTouchEnd = (e: React.TouchEvent) => {
    const distanceX = touchedX - e.changedTouches[0].pageX; // 터치를 한 x좌표 - 터치를 뗀 x좌표
    const distanceY = touchedY - e.changedTouches[0].pageY; // 터치를 한 y좌표 - 터치를 뗀 y좌표
    const vector = Math.abs(distanceX / distanceY);

    if (distanceX > 30 && vector > 2) {
      handleSlide('next');
    } else if (distanceX < -30 && vector > 2) {
      handleSlide('prev');
    }
  };

  return (
    <div className="relative">
      <div
        ref={slideRef}
        className={`${slideTransition} slide-container bg-grayBg`}
        onTouchEnd={onTouchEnd}
        onTouchStart={onTouchStart}
      >
        <div className="flex slide-inner">
          {/* 사진은 도대체 왜 잘리는걸까... 어디를 수정해야하는 걸까... 짜증나... */}
          {/* 마지막 -> 처음 / 처음 -> 마지막 이동하는 거 부드럽게 리팩토링하기 */}
          {TEST_SLIDE.map(({ id, imgUrl }) => {
            return (
              <Photo
                key={id}
                divStyle="max-w-md slide-item"
                imgStyle="h-full"
                imgUrl={imgUrl}
              />
            );
          })}
        </div>
      </div>
      <SlideBtn
        direction="prev"
        onMouseUp={() => handleSlide('prev')}
        IconPathD="M15 19l-7-7 7-7"
      />
      <SlideBtn
        direction="next"
        onMouseUp={() => handleSlide('next')}
        IconPathD="M9 5l7 7-7 7"
      />
      <div className="absolute bottom-4 left-[50%] -translate-x-[50%] rounded-full slide-cnt bg-[rgba(209,213,219,0.5)]">
        <p className="px-3 py-1 text-xs text-center ">
          <span className="font-bold">{slideIndex + 1}</span> /{' '}
          {TEST_SLIDE.length}
        </p>
      </div>
      <style jsx>{`
        .slide-container {
          transform: translateX(-${slideIndex * 28}rem);
        }
      `}</style>
    </div>
  );
}

const TEST_SLIDE = [
  { id: 1, imgUrl: '/images/leisure-detail/test-slide-img1.jpeg' },
  { id: 2, imgUrl: '/images/leisure-detail/test-slide-img2.jpeg' },
  { id: 3, imgUrl: '/images/leisure-detail/test-slide-img3.jpeg' },
  { id: 4, imgUrl: '/images/leisure-detail/test-slide-img1.jpeg' },
  { id: 5, imgUrl: '/images/leisure-detail/test-slide-img2.jpeg' },
];
