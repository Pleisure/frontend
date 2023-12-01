import SortButton from '../components-yul/sort-button';
import Summary from '../components-yul/Summary';
import { Fetcher } from './fetcher';
import Star from '../components-yul/star';
import Review from '../components-yul/review';
import Header from '../components-yul/Header';
import RatingButton from '../components-yul/rating-button';

export default function Home() {
  const ratingCounts = Fetcher.getRatingCounts();
  const reviews = Fetcher.getReviews();

  return (
    <div className="container max-w-md m-auto bg-white">
      <Header />

      <div className="flex px-10 my-10 space-between rating">
        <div className="flex items-center w-[40%] self-center text-2xl font-bold">
          <span>
            <Star isFilled={true} fillStarClassName="w-12 h-12 text-cyan-400" />
          </span>
          <span className="ml-[0.3rem] text-[2.5rem]">
            {ratingCounts.totalRatingAverage}
          </span>
        </div>
        <div className="w-[60%]">
          <Summary countsByRating={ratingCounts.countsByRating} />
        </div>
      </div>
      <hr />

      <div className="flex mb-12 sort-dropdown">
        <SortButton />
        <RatingButton />
      </div>

      <div className="pb-5 review-wrapper">
        {reviews.map((review, index, array) => {
          return (
            <Review
              {...review}
              arrayLength={array.length}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
