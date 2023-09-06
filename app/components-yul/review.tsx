import Txt from '../components-dd/atoms/Txt';
import RelativeTime from './RelativeTime';
import ReviewContent from './ReviewContent';
import Gender from './gender';
import RatingStars from './rating-stars';

export default function Review({
  reviewWriterNickname,
  reviewWriterProfilePictureUrl,
  reviewWriterAge,
  reviewWriterGender,
  storeReviewRating,
  storeReviewContent,
  storeReviewPhotoUrls,
  createdAt,
}: {
  reviewWriterNickname: string;
  reviewWriterProfilePictureUrl: string;
  reviewWriterAge: number;
  reviewWriterGender: string;
  storeReviewRating: number;
  storeReviewContent: string;
  storeReviewPhotoUrls: string[];
  createdAt: string;
}) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <span className="flex flex-row">
          <span>
            <ProfilePicture url={reviewWriterProfilePictureUrl} />
          </span>
          <span>
            <Nickname value={reviewWriterNickname} />
            <div className="flex flex-row">
              <span>
                <RatingStars rating={storeReviewRating} />
              </span>
              <span className="text-gray-500">
                <span>
                  <RelativeTime dateString={createdAt} />
                </span>
                <span className="mx-1">·</span>
                <span>
                  {reviewWriterAge}세/
                  <Gender value={reviewWriterGender} />
                </span>
              </span>
            </div>
          </span>
        </span>
        <span className=" text-gray-500">
          <button>신고</button>
        </span>
      </div>
      <div>
        <span>
          <img
            src={storeReviewPhotoUrls[0]}
            style={{ width: 100, height: 100 }}
          />
        </span>
        <span>
          <ReviewContent content={storeReviewContent} />
        </span>
      </div>
    </div>
  );
}

function ProfilePicture({ url }: { url: string }) {
  return <img src={url} style={{ width: 45, height: 45 }} />;
}

function Nickname({ value }: { value: string }) {
  return <Txt isBold={true}>{value}님</Txt>;
}
