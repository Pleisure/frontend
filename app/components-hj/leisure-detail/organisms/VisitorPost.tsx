import Button from '../atoms/Button';
import Slide from '../atoms/Slide';

export default function VisitorPost() {
  return (
    <section className="px-5 mb-10 visitor-post">
      <div className="visitor-post-title">
        <p className="text-lg font-bold">방문자 포스트</p>
      </div>

      {/* visitor photo slide */}
      <Slide
        width="visitorWidth"
        gap="visitorGap"
        data={VISITOR_POST_DATA.postPhotoUrl}
      />

      <Button
        divStyle="visitor-post-btn"
        buttonStyle="w-full bg-white btn btn-active border-1 border-cyanTxt text-cyanTxt hover:bg-white hover:border-cyanTxt"
        content="방문자 포스트 더보기"
      />
    </section>
  );
}

const VISITOR_POST_DATA = {
  postId: '1',
  postPhotoUrl: [
    { id: 1, imgUrl: '/images-hj/leisure-detail/test-visitor-img.jpeg' },
    { id: 2, imgUrl: '/images-hj/leisure-detail/test-visitor-img.jpeg' },
    { id: 3, imgUrl: '/images-hj/leisure-detail/test-visitor-img.jpeg' },
    { id: 4, imgUrl: '/images-hj/leisure-detail/test-visitor-img.jpeg' },
  ],
};
