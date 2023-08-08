'use client';

import PhotoSlide from './PhotoSlide';

type PropsType = {
  i: number;
  length: number;
};

export default function ReviewArticle({ i, length }: PropsType) {
  return (
    <article
      className={`pb-8 pt-8 review-article ${
        i === length - 1 ? 'border-b-none' : 'border-b-[1px]'
      }`}
    >
      {/* review profile */}
      <div className="flex justify-between review-profile">
        <div className="flex">
          {/* 프로필 이미지 */}
          <div className="profile-img w-10 h-10 border-[1px] rounded-full">
            <img
              src="/images/leisure-detail/test-profile-img.png"
              className="w-full rounded-full"
            />
          </div>
          {/* 리뷰어 정보 / 별점 / 시간 */}
          <div className="ml-3">
            <p className="font-bold">앙두</p>
            <div className="flex items-center text-sm rating-stars text-lightGrayTxt">
              {[1, 2, 3, 4, 5].map((i) => {
                return (
                  <span key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 -m-[1px] text-cyanTxt"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                );
              })}
              <span className="mx-3">1시간 전</span>
              <span>29/여</span>
            </div>
          </div>
        </div>
        <p className="text-sm cursor-pointer text-lightGrayTxt">신고</p>
      </div>

      {/* review photo slide  */}
      <PhotoSlide
        imgUrl="/images/leisure-detail/test-visitor-img.jpeg"
        width={32}
        gap={2}
        data={[1, 2, 3, 4]}
      />

      {/* review content */}
      <div className="review-content">
        <p className="overflow-hidden break-all review-content__text content text-ellipsis">
          <span className="float-right text-sm more mt-[1.6rem] text-lightGrayTxt cursor-pointer">
            더보기
          </span>
          사장님이 너무 친절했어요. 그리고 시설도 너무 깨끗해요. 저희 집보다
          깨끗한 것 같아요. 또 가고싶어요. 풍경도, 조식도 너무 만족스러웠어요!!!
        </p>
      </div>
      <style jsx>{`
        .content {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .more {
          shape-outside: border-box;
        }
      `}</style>
    </article>
  );
}
