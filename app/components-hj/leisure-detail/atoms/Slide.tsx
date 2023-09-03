'use client';

import Photo from './Photo';

export interface SlideProps {
  width?: 'reviewWidth' | 'visitorWidth';
  gap?: 'reviewGap' | 'visitorGap';
  data: { id: number; imgUrl: string }[]; // 임시 배열
}

export const photoSlideStyle = {
  reviewWidth: 'w-32',
  visitorWidth: 'w-44',
  reviewGap: 'gap-2',
  visitorGap: 'gap-3',
};

export default function Slide({ width, data, gap }: SlideProps) {
  return (
    <div
      className={`photoslide flex ${
        photoSlideStyle[gap!]
      } my-4 overflow-hidden`}
    >
      {data?.map((v, i) => {
        return (
          <Photo
            key={i}
            imgUrl={v.imgUrl}
            divStyle={`${photoSlideStyle[width!]} shrink-0`}
            imgStyle="rounded-lg"
          />
        );
      })}
    </div>
  );
}
