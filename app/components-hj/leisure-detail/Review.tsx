import Button from './atoms/Button';
import Rating from './molecules/Rating';
import ReviewArticle from './ReviewArticle';

export default function Review() {
  return (
    <section className="px-4 review">
      <Rating />
      {[1, 2, 3].map((v, i, a) => {
        return (
          <ReviewArticle
            key={i}
            i={i}
            length={a.length}
            profileImgUrl="/images/leisure-detail/test-profile-img.png"
            name="앙두"
            createdAt="1시간 전"
            age={29}
            sex="여"
            content="사장님이 너무 친절했어요. 그리고 시설도 너무 깨끗해요. 저희 집보다 깨끗한 것 같아요. 또 가고싶어요. 풍경도, 조식도 너무 만족스러웠어요!!!"
          />
        );
      })}
      <Button
        divStyle="mt-2 all-review-btn"
        buttonStyle="w-full bg-white btn btn-active border-1 border-cyanTxt text-cyanTxt hover:bg-white hover:border-cyanTxt"
        content="모든 리뷰 보기"
      />
    </section>
  );
}
