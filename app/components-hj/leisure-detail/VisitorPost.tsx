import Button from './atoms/Button';
import Slide from './atoms/Slide';

export default function VisitorPost() {
  return (
    <section className="px-4 mb-10 visitor-post">
      <div className="visitor-post-title">
        <p className="text-lg font-bold">방문자 포스트</p>
      </div>

      {/* visitor photo slide */}
      <Slide
        imgUrl="/images/leisure-detail/test-visitor-img.jpeg"
        width="visitorWidth"
        gap="visitorGap"
        data={[1, 2, 3, 4]}
      />

      <Button
        divStyle="visitor-post-btn"
        buttonStyle="w-full bg-white btn btn-active border-1 border-cyanTxt text-cyanTxt hover:bg-white hover:border-cyanTxt"
        content="방문자 포스트 더보기"
      />
    </section>
  );
}
