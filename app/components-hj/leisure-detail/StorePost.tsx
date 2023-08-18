'use client';

import PostSlide from './PostSlide';
import Icon from './atoms/Icon';

interface Props {
  category: string;
  content: string;
  rating: number;
  reviewCnt: number;
}

export default function StorePost({
  category,
  content,
  rating,
  reviewCnt,
}: Props) {
  return (
    <section className="mb-10 store-post">
      <PostSlide />
      <div className="px-4 store-title">
        <p className="mt-4 text-sm text-lightGrayTxt">{category}</p>
        <div className="my-2 overflow-hidden text-lg break-all title-txt text-ellipsis">
          {content}
        </div>
        <div className="flex text-sm rating-review-box">
          <div className="flex rating">
            <div className="mt-[0.11rem] star">
              <Icon
                className="w-[1.15rem] h-[1.15rem] text-cyanTxt"
                viewBox="0 0 20 20"
                fill="currentColor"
                pathD="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </div>
            <span className="ml-1 mr-3 font-bold">{rating}</span>
          </div>
          <div className="reviewCnt">
            <p>리뷰 {reviewCnt > 999 ? '999+' : reviewCnt}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title-txt {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </section>
  );
}
