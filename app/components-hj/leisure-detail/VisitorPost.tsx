import PhotoSlide from './PhotoSlide';

export default function VisitorPost() {
  return (
    <section className="px-4 mb-10 visitor-post">
      <div className="visitor-post-title">
        <p className="text-lg font-bold">방문자 포스트</p>
      </div>

      {/* visitor photo slide */}
      <PhotoSlide
        imgUrl="/images/leisure-detail/test-visitor-img.jpeg"
        width={44}
        gap={3}
        data={[1, 2, 3, 4]}
      />

      <div className="visitor-post-btn">
        <button className="w-full bg-white btn btn-active border-1 border-cyanTxt text-cyanTxt hover:bg-white hover:border-cyanTxt">
          방문자 포스트 더보기
        </button>
      </div>
    </section>
  );
}
