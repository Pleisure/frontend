const QUERY_PARAMS = {
  STORE_ID: 'storeId',
  PAGE: 'page',
  SORT: 'sort',
  RATING: 'rating',
};

export interface Review {
  reviewWriterNickname: string;
  reviewWriterProfilePictureUrl: string;
  reviewWriterAge: number;
  reviewWriterGender: string;
  storeReviewId: number;
  storeReviewRating: number;
  storeReviewContent: string;
  storeReviewPhotoUrls: string[] | null;
  helpCount: number;
  createdAt: string;
}

const REVIEWS: (Review & { storeId: number })[] = [
  {
    reviewWriterNickname: '김사장',
    reviewWriterProfilePictureUrl:
      'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5ab958418835f42a6509fe53/8627d542-8e36-4e7b-94c4-c25a1b55f531/128',
    reviewWriterAge: 28,
    reviewWriterGender: 'FEMALE',
    storeReviewId: 12,
    storeReviewRating: 4,
    storeReviewContent:
      '구명조끼가 다른 곳에 비해 비싸고 음식 종류가 적은 편이에요. 그것들 뺴고 다 너무 좋았습니다.',
    storeReviewPhotoUrls: [
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA4MTBfMTYg%2FMDAxNjkxNjQ4ODgwODQ2.1HjC9N0x-i3ao_EX5EKW-kQP6ZdcIPmnm8A0O0YWIpsg.dKkMVDBZrE79GPYx9YWbIIACmAKPp_htdmqNLjwCxtkg.JPEG%2FIMG_6873.jpeg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA2MjNfNjIg%2FMDAxNjg3NDkwNzAwMzc5.lCqC7ZyEwoWRgHZJN8XtLuLHG7oJY4LXY6td01gjMZ8g.-BgU0TZz_EDSKCM9vRIG3TmKJl-m1gpapm-Qg.JPEG%2FIMG_7767.jpeg',
    ],
    helpCount: 5,
    createdAt: '2023-07-22T12:48:11.001Z',
    storeId: 1,
  },
  {
    reviewWriterNickname: '율무차',
    reviewWriterProfilePictureUrl:
      'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5ab958418835f42a6509fe53/8627d542-8e36-4e7b-94c4-c25a1b55f531/128',
    reviewWriterAge: 30,
    reviewWriterGender: 'MALE',
    storeReviewId: 1921,
    storeReviewRating: 5,
    storeReviewContent:
      '너무 좋았어요! 시설도 깔끔하고 사장님들도 너무 친절했습니다!',
    storeReviewPhotoUrls: null,
    helpCount: 6,
    createdAt: '2023-08-11T07:31:28.000Z',
    storeId: 1,
  },
  {
    reviewWriterNickname: '김철수',
    reviewWriterProfilePictureUrl:
      'https://example.com/profile_pictures/johndoe.jpg',
    reviewWriterAge: 30,
    reviewWriterGender: 'MALE',
    storeReviewId: 1,
    storeReviewRating: 5,
    storeReviewContent:
      '이 가게는 정말 대단합니다! 직원들이 친절하고 음식이 맛있습니다. 모든 사람에게 꼭 추천합니다.',
    storeReviewPhotoUrls: [
      'https://example.com/store_reviews/1/photo_1.jpg',
      'https://example.com/store_reviews/1/photo_2.jpg',
    ],
    helpCount: 10,
    createdAt: '2023-09-06T00:00:00.000Z',
    storeId: 1,
  },
  {
    reviewWriterNickname: '이영희',
    reviewWriterProfilePictureUrl:
      'https://example.com/profile_pictures/janedoe.jpg',
    reviewWriterAge: 25,
    reviewWriterGender: 'FEMALE',
    storeReviewId: 2,
    storeReviewRating: 4,
    storeReviewContent:
      '여기 음식은 꽤 맛있지만, 서비스는 조금 느립니다. 그래도 추천합니다.',
    storeReviewPhotoUrls: [],
    helpCount: 5,
    createdAt: '2023-09-06T01:00:00.000Z',
    storeId: 2,
  },
  {
    reviewWriterNickname: '박상민',
    reviewWriterProfilePictureUrl:
      'https://example.com/profile_pictures/parker.jpg',
    reviewWriterAge: 18,
    reviewWriterGender: 'MALE',
    storeReviewId: 3,
    storeReviewRating: 3,
    storeReviewContent:
      '여기 음식은 맛있었지만, 서비스는 그다지 좋지 않았습니다. 아마 다시 올 것 같지만, 다음에는 다른 레스토랑을 시도해 보겠습니다.',
    storeReviewPhotoUrls: ['https://example.com/store_reviews/3/photo_1.jpg'],
    helpCount: 0,
    createdAt: '2023-09-06T02:00:00.000Z',
    storeId: 3,
  },
  {
    reviewWriterNickname: '김지연',
    reviewWriterProfilePictureUrl:
      'https://example.com/profile_pictures/sarah.jpg',
    reviewWriterAge: 20,
    reviewWriterGender: 'FEMALE',
    storeReviewId: 4,
    storeReviewRating: 2,
    storeReviewContent:
      '여기는 정말 실망스러웠습니다. 음식은 싱거웠고, 서비스는 끔찍했습니다. 누구에게도 추천하지 않습니다.',
    storeReviewPhotoUrls: [],
    helpCount: 1,
    createdAt: '2023-09-06T03:00:00.000Z',
    storeId: 1,
  },
  {
    reviewWriterNickname: '박지영',
    reviewWriterProfilePictureUrl:
      'https://example.com/profile_pictures/parkjiyoung.jpg',
    reviewWriterAge: 28,
    reviewWriterGender: 'FEMALE',
    storeReviewId: 5,
    storeReviewRating: 5,
    storeReviewContent:
      '맛있는 음식과 친절한 서비스, 두 마리 토끼를 모두 잡은 곳입니다. 특히, 직원분들이 매번 밝게 인사해주셔서 기분이 좋았습니다.',
    storeReviewPhotoUrls: ['https://example.com/store_reviews/5/photo_1.jpg'],
    helpCount: 0,
    createdAt: '2023-09-06T04:00:00.000Z',
    storeId: 1,
  },
  {
    reviewWriterNickname: '이수진',
    reviewWriterProfilePictureUrl:
      'https://example.com/profile_pictures/isujin.jpg',
    reviewWriterAge: 45,
    reviewWriterGender: 'FEMALE',
    storeReviewId: 6,
    storeReviewRating: 4,
    storeReviewContent:
      '음식이 맛있고, 가격도 합리적이어서 만족했습니다. 다만, 식사 시간이 조금 붐비는 편이라, 조용히 식사하고 싶은 분들은 피하는 것이 좋을 것 같습니다.',
    storeReviewPhotoUrls: [
      'https://example.com/store_reviews/6/photo_1.jpg',
      'https://example.com/store_reviews/6/photo_2.jpg',
    ],
    helpCount: 0,
    createdAt: '2023-09-06T05:00:00.000Z',
    storeId: 2,
  },
  {
    reviewWriterNickname: '강민수',
    reviewWriterProfilePictureUrl:
      'https://example.com/profile_pictures/gangminsoo.jpg',
    reviewWriterAge: 32,
    reviewWriterGender: 'MALE',
    storeReviewId: 7,
    storeReviewRating: 3,
    storeReviewContent:
      '음식은 맛있었지만, 서비스는 조금 아쉬웠습니다. 음식을 주문하고 나서 음식이 나오기까지 시간이 조금 오래 걸렸습니다.',
    storeReviewPhotoUrls: [],
    helpCount: 3,
    createdAt: '2023-09-06T06:00:00.000Z',
    storeId: 3,
  },
  {
    reviewWriterNickname: '김민석',
    reviewWriterProfilePictureUrl:
      'https://example.com/profile_pictures/kimminseok.jpg',
    reviewWriterAge: 22,
    reviewWriterGender: 'MALE',
    storeReviewId: 8,
    storeReviewRating: 2,
    storeReviewContent: '음식은 맛있었지만, 가격이 조금 비싼 것 같았습니다.',
    storeReviewPhotoUrls: [],
    helpCount: 0,
    createdAt: '2023-09-06T07:00:00.000Z',
    storeId: 1,
  },
];

export { QUERY_PARAMS, REVIEWS };
