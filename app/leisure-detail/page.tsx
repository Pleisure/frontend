import Header from '../components-hj/leisure-detail/Header';
import StorePost from '../components-hj/leisure-detail/StorePost';
import VisitorPost from '../components-hj/leisure-detail/VisitorPost';
import ReservationBtn from '../components-hj/leisure-detail/ReservationBtn';
import Nav from '../components-hj/leisure-detail/Nav';
import StoreInfo from '../components-hj/leisure-detail/StoreInfo';
import Review from '../components-hj/leisure-detail/Review';

export default function LeisureDetail() {
  return (
    <div className="container relative max-w-md min-w-[360px] m-auto text-grayTxt mb-24">
      <Header title="포스트 제목" />
      <StorePost />
      <VisitorPost />

      {/* 레저, 리뷰 탭 */}
      <Nav />

      {/* 레저 스토어 정보 */}
      <StoreInfo />

      {/* 리뷰 */}
      <Review />

      {/* 예약하기 버튼 */}
      <ReservationBtn />
      <div className="spacing fixed bottom-0 bg-white opacity-[80%] max-w-[27.75rem] min-w-[371px] h-10"></div>
    </div>
  );
}
