'use client';

type PropsType = {
  imgUrl: string;
  width: number;
  gap: number;
  data: number[]; // 임시 배열
};

export default function PhotoSlide({ imgUrl, width, data, gap }: PropsType) {
  return (
    <div className={`flex gap-${gap} my-4 overflow-hidden`}>
      {data.map((i) => {
        return (
          <div key={i} className={`w-${width} shrink-0`}>
            <img src={imgUrl} className="rounded-lg" />
          </div>
        );
      })}
    </div>
  );
}

// "/images/leisure-detail/test-visitor-img.jpeg"
// width: visitor - 44 / review - 32
// [1, 2, 3, 4]
// gap: visitor - 3 / review - 2
