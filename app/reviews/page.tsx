import Txt from '../components-dd/atoms/Txt';
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
                    src={
                      'https://yt3.ggpht.com/bUQjbuX5alVXIz0jEb2ZtUEUmM16WvpYurWevC6TeK2y5BBWlFTkaZ90aHtF0pySU7PLEZ7h=s88-c-k-c0x00ffffff-no-rj'
                    }
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
                      <span>{review.createdAt.substring(0, 10)}</span>
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
                  src={
                    'https://phinf.pstatic.net/checkout/20220407_263/1649300509323GnJ6Q_JPEG/2002035604366722.jpg'
                  }
                />
              </span>
              {review.storeReviewContent.length > 100 ? (
                <span>
                  <p>{review.storeReviewContent.substring(0, 100) + ' ...'}</p>
                  <button>더보기</button>
                </span>
              ) : (
                <span>
                  <p>{review.storeReviewContent}</p>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
