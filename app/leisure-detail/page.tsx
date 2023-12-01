import Header from '../components-hj/leisure-detail/organisms/Header';
import StorePost from '../components-hj/leisure-detail/organisms/StorePost';
import Nav from '../components-hj/leisure-detail/organisms/Nav';
import Button from '../components-hj/leisure-detail/atoms/Button';
import VisitorPost from '../components-hj/leisure-detail/organisms/VisitorPost';
import StoreInfo from '../components-hj/leisure-detail/organisms/StoreInfo';
import Review from '../components-hj/leisure-detail/organisms/Review';
import { IReviewSummerize, IStores } from '../types-hj/IStores';

export default function LeisureDetail() {
  return (
    <div className="container relative max-w-md min-w-[360px] m-auto text-grayTxt mb-24">
      <Header storeName={STORE_POST_DATA.storeName} />
      <StorePost
        categoryName={STORE_POST_DATA.storeCategories!.categoryName}
        storeName={STORE_POST_DATA.storeName}
        storeReviewCount={STORE_POST_DATA.storeReviewCount}
        totalRatingAverage={REVIEW_SUMMERIZE_DATA.totalRatingAverage}
      />
      <VisitorPost />

      {/* 레저, 리뷰 탭 */}
      <Nav />

      {/* 레저 스토어 정보 */}
      <StoreInfo
        storeStatus={STORE_POST_DATA.storeStatus}
        storeBusinessHours={STORE_POST_DATA.storeBusinessHours}
        closingHours={STORE_POST_DATA.storeBusinessHours![0].closingHours}
      />

      {/* 리뷰 */}
      <Review />

      {/* 예약하기 버튼 */}
      <Button
        divStyle="fixed z-50 w-full max-w-md rounded-t-lg bottom-2 reservation-btn shadow-[0_-5px_5px_0_rgba(87,83,78,0.2)]"
        buttonStyle="w-full h-[3.5rem] text-white bg-cyanTxt btn btn-active border-1 border-cyanTxt hover:border-cyanTxt hover:bg-cyanTxt text-xl"
        content="예약하기"
        linkHref="/reservation"
      />
      <div className="spacing fixed bottom-0 bg-white opacity-[80%] max-w-[27.75rem] min-w-[371px] h-10"></div>
    </div>
  );
}

// 임시 데이터
const STORE_POST_DATA: IStores = {
  storeId: '1',
  storeImageUrls: [
    { id: 1, imgUrl: '/images/leisure-detail/test-slide-img1.jpeg' },
    { id: 2, imgUrl: '/images/leisure-detail/test-slide-img2.jpeg' },
    { id: 3, imgUrl: '/images/leisure-detail/test-slide-img3.jpeg' },
    { id: 4, imgUrl: '/images/leisure-detail/test-slide-img1.jpeg' },
    { id: 5, imgUrl: '/images/leisure-detail/test-slide-img2.jpeg' },
  ],
  storeName:
    '포스트 제목입니다. 레저 제목입니다. 2줄까지만 보여주기로 합니다. 너무 길면 안됩니다. 레저의 제목이자 콘텐츠내용입니다. 가평빠지 좋아요. 더운 여름 핫해핫해',
  storeStatus: 'OPENNING',
  storeCategories: {
    categoryLevel: 2,
    categoryName: '수상레저',
  },
  storeAverageRating: 4.8,
  storeReviewCount: 1024, // * ✅ 내가 임의로 추가. 나중에 추가돼야함.
  storeBusinessHours: [
    // 오늘을 기준으로 일주일의 영업시간을 나타냅니다. 예를 들어, 오늘이 토요일이면 토, 일, 월, 화, 수, 목, 금 순으로 영업시간을 나열합니다.
    {
      dayOfWeek: 'MON',
      businessHourStatus: 'CLOSED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'TUE',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'WED',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'THU',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'FRI',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'SAT',
      businessHourStatus: 'OPENED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
    {
      dayOfWeek: 'SUN',
      businessHourStatus: 'CLOSED',
      // OPENED: 영업 하는 날 / CLOSED: 영업 쉬는 날
      // CLOSED 일때는 openingHours, closingHours, breakTimeStart, breakTimeEnd는 모두 null로.
      openingHours: '11:00', // (“HH:MM” 24시간 기준)
      closingHours: '21:00', // (“HH:MM” 24시간 기준)
      breakTimes: [
        {
          breakTimeStart: '11:00', // (“HH:MM” 24시간 기준)
          breakTimeEnd: '14:00', // (“HH:MM” 24시간 기준)
        },
      ],
    },
  ],
  storeAddress: '경기 가평군 가평읍 북한강변로 274-22',
  storeLatitude: 37.752532,
  storeLongitude: 127.535929,
  storePhone: '010-1234-5678',
  storeReservationUrl: 'http://localhost:3000/leisure-detail#',
};

const REVIEW_SUMMERIZE_DATA: IReviewSummerize = {
  totalRatingAverage: 4.8,
  numOfFiveStars: 120,
  numOfFourStars: 80,
  numOfThreeStars: 57,
  numOfTwoStars: 13,
  numOfOneStars: 6,
};
