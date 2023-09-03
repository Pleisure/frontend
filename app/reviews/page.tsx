import SortButton from '../components-yul/sort-button';
import Summary from '../components-yul/Summary';
import { Fetcher } from './fetcher';
import Star from '../components-yul/star';
import Review from '../components-yul/review';

export default function Home() {
  const ratingCounts = Fetcher.getRatingCounts();
  const reviews = Fetcher.getReviews();

  return (
    <div>
      <div className="flex flex-row">
        <span className="text-2xl self-center font-bold">
          <span>
            <Star isFilled={true} />
          </span>
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
        {reviews.map((review, index) => {
          return <Review {...review} key={index} />;
        })}
      </div>
    </div>
  );
}
