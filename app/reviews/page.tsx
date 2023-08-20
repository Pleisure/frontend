import Txt from '../components-dd/atoms/Txt';
import RelativeTime from '../components-yul/RelativeTime';
import ReviewContent from '../components-yul/ReviewContent';
import SortButton from '../components-yul/SortButton';
import Stars from '../components-yul/Stars';
import Summary from '../components-yul/Summary';
import { Fetcher } from './fetcher';

export default function Home() {
  const ratingCounts = Fetcher.getRatingCounts();
  const reviews = Fetcher.getReviews();

  return (
    <div>
      <div className="flex flex-row">
        <span className="text-2xl self-center font-bold">
          <span>⭐️</span>
          <span>{ratingCounts.totalRatingAverage}</span>
        </span>
        <span className="w-full">
          <Summary countsByRating={ratingCounts.countsByRating} />
        </span>
      </div>

      <div>
        <SortButton />
      </div>

      <div>
        {reviews.map((review) => (
          <div>
            <div className="flex flex-row justify-between">
              <span className="flex flex-row">
                <span>
                  <img
                    src={review.reviewWriterProfileImgUrl}
                    style={{ width: 45, height: 45 }}
                  />
                </span>
                <span>
                  <Txt isBold={true}>{review.reviewWriterNickname}님</Txt>
                  <div className="flex flex-row">
                    <span>
                      <Stars rating={review.storeReviewRating} />
                    </span>
                    <span className="text-gray-500">
                      <span>
                        <RelativeTime dateString={review.createdAt} />
                      </span>
                      <span className="mx-1">·</span>
                      <span>28/여</span>
                    </span>
                  </div>
                </span>
              </span>
              <span className=" text-gray-500">
                <a href="#">신고</a>
              </span>
            </div>
            <div>
              <span>
                <img
                  src={review.storeReviewPhotoUrls[0]}
                  style={{ width: 100, height: 100 }}
                />
              </span>
              <span>
                <ReviewContent content={review.storeReviewContent} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
