import Rating from './Rating';
import ReviewArticle from './ReviewArticle';

export default function Review() {
  return (
    <section className="px-4 review">
      <Rating />
      {[1, 2, 3].map((v, i, a) => {
        return <ReviewArticle key={i} i={i} length={a.length} />;
      })}
      <div className="mt-5 all-review-btn">
        <button className="w-full bg-white btn btn-active border-1 border-cyanTxt text-cyanTxt hover:bg-white hover:border-cyanTxt">
          모든 리뷰 보기
        </button>
      </div>
    </section>
  );
}
