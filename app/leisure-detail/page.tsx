import Header from '../components-hj/leisure-detail/organisms/Header';
import StorePost from '../components-hj/leisure-detail/StorePost';
import VisitorPost from '../components-hj/leisure-detail/VisitorPost';
import Nav from '../components-hj/leisure-detail/organisms/Nav';
import StoreInfo from '../components-hj/leisure-detail/StoreInfo';
import Review from '../components-hj/leisure-detail/Review';
import Button from '../components-hj/leisure-detail/atoms/Button';

export default function LeisureDetail() {
  return (
    <div className="container relative max-w-md min-w-[360px] m-auto text-grayTxt mb-24">
      <Header title="포스트 제목" />
      <StorePost
        category="카테고리"
        content="포스트 제목입니다. 레저 제목입니다. 2줄까지만 보여주기로 합니다. 너무
          길면 안됩니다.blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"
        rating={4.5}
        reviewCnt={1000}
      />
      <VisitorPost />

      {/* 레저, 리뷰 탭 */}
      <Nav />

      {/* 레저 스토어 정보 */}
      <StoreInfo />

      {/* 리뷰 */}
      <Review />

      {/* 예약하기 버튼 */}
      <Button
        divStyle="fixed z-50 w-full max-w-md rounded-t-lg bottom-2 reservation-btn shadow-[0_-5px_5px_0_rgba(87,83,78,0.2)]"
        buttonStyle="w-full h-[3.5rem] text-white bg-cyanTxt btn btn-active border-1 border-cyanTxt hover:border-cyanTxt hover:bg-cyanTxt text-xl"
        content="예약하기"
      />
      <div className="spacing fixed bottom-0 bg-white opacity-[80%] max-w-[27.75rem] min-w-[371px] h-10"></div>
    </div>
  );
}
