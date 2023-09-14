import Header from '../components-hj/leisure-detail/organisms/Header';
import Nav from '../components-hj/leisure-detail/organisms/Nav';
import StorePost from '../components-hj/leisure-detail/organisms/StorePost';
import VisitorPost from '../components-hj/leisure-detail/organisms/VisitorPost';
import StoreInfo from '../components-hj/leisure-detail/organisms/StoreInfo';
import Review from '../components-hj/leisure-detail/organisms/Review';
import { STORE_POST_DATA } from '../libs-hj/data/STORE_POST_DATA';
import { REVIEW_SUMMERIZE_DATA } from '../libs-hj/data/REVIEW_SUMMERIZE_DATA';
import Button from '../components-hj/leisure-detail/atoms/Button';

export default function LeisureDetail() {
  return (
    <div className="w-screen bg-grayBg">
      <div className="container relative max-w-md min-w-[360px] m-auto text-grayTxt pb-20 bg-white">
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
          divStyle="reservation-btn fixed z-50 w-full max-w-md rounded-t-lg bottom-2 px-1 shadow-[0_-6px_6px_0_rgba(255,255,255,0.5)]"
          buttonStyle="btn btn-active w-full h-[3.5rem] text-white bg-cyanTxt border-1 border-cyanTxt hover:border-cyanTxt hover:bg-cyanTxt text-xl"
          content="예약하기"
          linkHref="/reservation"
        />
        <div className="spacing fixed bottom-0 bg-white opacity-[80%] max-w-md w-full h-10"></div>
      </div>
    </div>
  );
}
