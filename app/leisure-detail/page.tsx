import StorePost from '../components-hj/leisure-detail/organisms/StorePost';
import Nav from '../components-hj/leisure-detail/organisms/Nav';
import VisitorPost from '../components-hj/leisure-detail/organisms/VisitorPost';
import StoreInfo from '../components-hj/leisure-detail/organisms/StoreInfo';
import Review from '../components-hj/leisure-detail/organisms/Review';
import { STORE_POST_DATA } from '../libs-hj/data/STORE_POST_DATA';
import { REVIEW_SUMMERIZE_DATA } from '../libs-hj/data/REVIEW_SUMMERIZE_DATA';

export default function LeisureDetail() {
  return (
    <>
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
    </>
  );
}
