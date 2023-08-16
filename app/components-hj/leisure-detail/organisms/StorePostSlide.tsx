'use client';

import { useEffect, useRef, useState } from 'react';
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

  return (
    <div className="relative max-w-md">
      <div
        ref={slideRef}
        className={`${slideTransition} slide-container bg-grayBg`}
      >
        <div className="flex slide-inner">
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
        onClick={() => handleSlide('prev')}
        IconPathD="M15 19l-7-7 7-7"
      />
      <SlideBtn
        direction="next"
        onClick={() => handleSlide('next')}
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
