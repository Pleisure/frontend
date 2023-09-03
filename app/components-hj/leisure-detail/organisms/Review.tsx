import { IReviewList } from '@/app/types-hj/IStores';
import Button from '../atoms/Button';
import Rating from '../molecules/Rating';
import ReviewArticle from './ReviewArticle';

export default function Review() {
  return (
    <section className="px-4 review">
      <Rating />
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

const REVIEW_ARTICLE_DATA: IReviewList[] = [
  {
    storeReviewId: '1',
    reviewWriterNickname: '오련두',
    reviewWriterProfilePictureUrl:
      '/images/leisure-detail/test-profile-img.png',
    reviewWriterAge: 29,
    reviewWriterGender: 'MALE',
    storeReviewContent:
      '사장님이 너무 친절했어요. 그리고 시설도 너무 깨끗해요. 저희 집보다 깨끗한 것 같아요. 또 가고싶어요. 풍경도, 조식도 너무 만족스러웠어요!!!',
    storeReviewRating: 5,
    storeReviewPhotoUrls: [
      { id: 1, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 2, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 3, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 4, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
    ],
    createdAt: new Date().toLocaleDateString('ko-KR'),
  },
  {
    storeReviewId: '2',
    reviewWriterNickname: '앙두',
    reviewWriterProfilePictureUrl:
      '/images/leisure-detail/test-profile-img.png',
    reviewWriterAge: 18,
    reviewWriterGender: 'FEMALE',
    storeReviewContent:
      '사장님이 너무 친절했어요. 그리고 시설도 너무 깨끗해요. 저희 집보다 깨끗한 것 같아요. 또 가고싶어요. 풍경도, 조식도 너무 만족스러웠어요!!!',
    storeReviewRating: 4,
    storeReviewPhotoUrls: [
      { id: 1, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 2, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 3, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 4, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
    ],
    createdAt: new Date().toLocaleDateString('ko-KR'),
  },
  {
    storeReviewId: '3',
    reviewWriterNickname: '샤샤엘리',
    reviewWriterProfilePictureUrl:
      '/images/leisure-detail/test-profile-img.png',
    reviewWriterAge: 9,
    reviewWriterGender: 'FEMALE',
    storeReviewContent:
      '사장님이 너무 친절했어요. 그리고 시설도 너무 깨끗해요. 저희 집보다 깨끗한 것 같아요. 또 가고싶어요. 풍경도, 조식도 너무 만족스러웠어요!!!',
    storeReviewRating: 5,
    storeReviewPhotoUrls: [
      { id: 1, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 2, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 3, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 4, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
    ],
    createdAt: new Date().toLocaleDateString('ko-KR'),
  },
];
