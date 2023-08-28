'use client';

import { IReviewList } from '@/app/types-hj/IStores';
import Icon from '../atoms/Icon';
import Slide from '../atoms/Slide';

interface ArticleProps extends IReviewList {
  dataIdx: number;
  dataLength: number;
}

export default function ReviewArticle({
  dataIdx,
  dataLength,
  reviewWriterProfilePictureUrl,
  reviewWriterNickname,
  createdAt,
  reviewWriterAge,
  reviewWriterGender,
  storeReviewContent,
  storeReviewRating,
  storeReviewPhotoUrls,
}: ArticleProps) {
  const starsCnt = new Array(storeReviewRating).fill(storeReviewRating);

  function ageGroup(age: number) {
    const stringAge = age.toString();
    if (stringAge.length > 1) return `${stringAge[0]}0대`;
    else if (stringAge.length === 1) return `10대`;
  }

  return (
    <article className={`pb-6 pt-6 review-article`}>
      {/* review profile */}
      <div className="flex justify-between review-profile">
        <div className="flex">
          {/* 프로필 이미지 */}
          <div className="profile-img w-10 h-10 border-[1px] rounded-full">
            <img
              src={reviewWriterProfilePictureUrl}
              className="w-full rounded-full"
            />
          </div>
          {/* 리뷰어 정보 / 별점 / 시간 */}
          <div className="ml-3">
            <p className="font-bold">{reviewWriterNickname}</p>
            <div className="flex items-center text-sm rating-stars text-lightGrayTxt">
              {starsCnt.map((v, i) => {
                return (
                  <span key={i}>
                    <Icon
                      className="w-5 h-5 -m-[1px] text-cyanTxt"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      pathD="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </span>
                );
              })}
              <span className="mx-3">{createdAt}</span>
              <span>
                {ageGroup(reviewWriterAge)}/
                {reviewWriterGender === 'FEMALE' ? '여' : '남'}
              </span>
            </div>
          </div>
        </div>
        <p className="text-sm cursor-pointer text-lightGrayTxt">신고</p>
      </div>

      {/* review photo slide  */}
      <Slide width="reviewWidth" gap="reviewGap" data={storeReviewPhotoUrls} />

      {/* review content */}
      <div className="mb-8 review-content">
        <p className="overflow-hidden break-all review-content__text content text-ellipsis">
          <span className="float-right text-sm more mt-[1.6rem] text-lightGrayTxt cursor-pointer">
            더보기
          </span>
          {storeReviewContent}
        </p>
      </div>
      {dataIdx === dataLength - 1 || <hr className="mt-12" />}
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
