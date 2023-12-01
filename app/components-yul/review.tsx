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
  arrayLength,
  index,
}: {
  reviewWriterNickname: string;
  reviewWriterProfilePictureUrl: string;
  reviewWriterAge: number;
  reviewWriterGender: string;
  storeReviewRating: number;
  storeReviewContent: string;
  storeReviewPhotoUrls: string[];
  createdAt: string;
  arrayLength: number;
  index: number;
}) {
  function ageGroup(age: number) {
    const stringAge = age.toString();
    if (stringAge.length > 1) return `${stringAge[0]}0대`;
    else if (stringAge.length === 1) return `10대`;
  }

  return (
    <>
      <div className="px-5 my-[1.85rem] review">
        <div className="flex flex-row justify-between">
          <div className="flex items-center profile-wrapper">
            <div className="w-10 h-10 mr-3 profile-img">
              <ProfilePicture url={reviewWriterProfilePictureUrl} />
            </div>
            <div className="profile-info">
              <Nickname value={reviewWriterNickname} />
              <div className="flex items-center gap-2 text-sm">
                <span>
                  <RatingStars rating={storeReviewRating} />
                </span>
                <span>
                  <RelativeTime dateString={createdAt} />
                </span>
                <span>
                  {ageGroup(reviewWriterAge)}/
                  <Gender value={reviewWriterGender} />
                </span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <button>신고</button>
          </div>
        </div>
        <div className="flex gap-2 overflow-hidden review-content">
          {storeReviewPhotoUrls.map((_, i) => {
            return (
              <div key={i} className="my-5 w-28 h-28 shrink-0">
                <img
                  src={storeReviewPhotoUrls[i]}
                  className="w-full h-full rounded-lg"
                />
              </div>
            );
          })}
        </div>
        <div>
          <ReviewContent content={storeReviewContent} />
        </div>
      </div>
      {index === arrayLength - 1 || <hr />}
    </>
  );
}

function ProfilePicture({ url }: { url: string }) {
  return <img src={url} style={{ width: '100%', borderRadius: '50%' }} />;
}

function Nickname({ value }: { value: string }) {
  return <Txt isBold={true}>{value}님</Txt>;
}
