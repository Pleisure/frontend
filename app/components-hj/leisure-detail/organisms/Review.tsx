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
    storeReviewContent: '더운 여름... 정말 행복했습니다',
    storeReviewRating: 5,
    storeReviewPhotoUrls: [
      { id: 1, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 2, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 3, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 4, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
    ],
    createdAt: '2023-08-15T12:00:00.000Z',
  },
  {
    storeReviewId: '2',
    reviewWriterNickname: '앙두',
    reviewWriterProfilePictureUrl:
      '/images/leisure-detail/test-profile-img.png',
    reviewWriterAge: 18,
    reviewWriterGender: 'FEMALE',
    storeReviewContent:
      '사장님이 너무 친절했어요. 그리고 시설도 너무 깨끗해요. 저희 집보다 깨끗한 것 같아요. 또 가고싶어요. 풍경도, 청결도도 너무 만족스러웠어요!!!',
    storeReviewRating: 4,
    storeReviewPhotoUrls: [
      { id: 1, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 2, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 3, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 4, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
    ],
    createdAt: '2023-07-05T12:00:00.000Z',
  },
  {
    storeReviewId: '3',
    reviewWriterNickname: '샤샤엘리',
    reviewWriterProfilePictureUrl:
      '/images/leisure-detail/test-profile-img.png',
    reviewWriterAge: 9,
    reviewWriterGender: 'FEMALE',
    storeReviewContent:
      '구명조끼나 튜브들 청소 좀 잘해주셨으면 좋겠어요. 거기서 일하시는 직원분들 중 누구는 친절하고 누구는 불친절하네요. 그래도 레저는 굉장히 익스트림하고 재밌었던 것 같습니다! 위험에 많이 신경써주시는 느낌이였어요. 주변 정돈만 잘해주시면 가격도 괜찮고 접근성도 좋아서 자주 갈 것 같습니다!! 주차장이 넓지 않으니 오시는 분들은 주변 주차장도 꼭 알아보시고 오는게 좋을 것 같아요.',
    storeReviewRating: 3,
    storeReviewPhotoUrls: [
      { id: 1, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 2, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 3, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
      { id: 4, imgUrl: '/images/leisure-detail/test-visitor-img.jpeg' },
    ],
    createdAt: '2022-09-29T12:00:00.000Z',
  },
];
