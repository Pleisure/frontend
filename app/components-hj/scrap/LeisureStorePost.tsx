export default function LeisureStorePost() {
  return (
    <article className="mb-7 leisure-store-post">
      <div className="w-48 h-48 overflow-hidden thumbnail">
        <img
          src="/images/scrap/test_thumbnail.jpeg"
          className="h-full rounded-lg"
        />
      </div>
      <div className="info">
        <p className="mt-2 mb-1 font-bold title">가평빠지월드</p>
        <div className="flex text-sm rating-review-box">
          <div className="flex rating">
            <div className="mt-[0.11rem] star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[1.15rem] h-[1.15rem] text-cyanTxt"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="ml-1 mr-3">4.8</span>
          </div>
          <div className="review">
            <p>리뷰 999+</p>
          </div>
        </div>
      </div>
    </article>
  );
}
