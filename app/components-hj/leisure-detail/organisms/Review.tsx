import Button from '../atoms/Button';
import Rating from '../molecules/Rating';
import ReviewArticle from './ReviewArticle';
import Dropdown from '@/app/components-hj/leisure-detail/molecules/Dropdown';
import { REVIEW_ARTICLE_DATA } from '@/app/libs-hj/data/REVIEW_ARTICLE_DATA';
import RatingButton from './RatingButton';
import SortButton from './SortButton';

export default function Review() {
  return (
    <section className="review">
      <Rating />
      <hr />
      {/* <Dropdown /> */}
      <div className="flex px-5 my-3 dropdown">
        <SortButton />
        <RatingButton />
      </div>
      {REVIEW_ARTICLE_DATA.map((data, i, currentArr) => {
        return (
          <ReviewArticle
            key={data.storeReviewId}
            dataIdx={i}
            dataLength={currentArr.length}
            reviewWriterProfilePictureUrl={data.reviewWriterProfilePictureUrl}
            reviewWriterNickname={data.reviewWriterNickname}
            createdAt={data.createdAt}
            reviewWriterAge={data.reviewWriterAge}
            reviewWriterGender={data.reviewWriterGender}
            storeReviewId={data.storeReviewId}
            storeReviewContent={data.storeReviewContent}
            storeReviewRating={data.storeReviewRating}
            storeReviewPhotoUrls={data.storeReviewPhotoUrls}
          />
        );
      })}
      <Button
        divStyle="all-review-btn"
        buttonStyle="w-full bg-white btn btn-active border-1 border-cyanTxt text-cyanTxt hover:bg-white hover:border-cyanTxt"
        content="모든 리뷰 보기"
      />
    </section>
  );
}
