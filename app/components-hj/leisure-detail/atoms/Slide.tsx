'use client';

import Photo from './Photo';

export interface SlideProps {
  imgUrl: string;
  width: string;
  gap?: string;
  data?: number[]; // 임시 배열
}

export interface photoSlideStyleType {
  [key: string]: string;
}

export const photoSlideStyle: photoSlideStyleType = {
  reviewWidth: 'w-32',
  visitorWidth: 'w-44',
  reviewGap: 'gap-2',
  visitorGap: 'gap-3',
};

export default function Slide({ imgUrl, width, data, gap }: SlideProps) {
  return (
    <div
      className={`photoslide flex ${
        photoSlideStyle[gap!]
      } my-4 overflow-hidden`}
    >
      {data?.map((i) => {
        return <Photo key={i} imgUrl={imgUrl} width={width} />;
      })}
    </div>
  );
}
