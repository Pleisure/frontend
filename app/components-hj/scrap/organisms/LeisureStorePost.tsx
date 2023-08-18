import IconSvg from '../atoms/IconSvg';

interface Props {
  imgUrl: string;
  name: string;
  rating: number;
  review: number;
}

export default function LeisureStorePost({
  imgUrl,
  name,
  rating,
  review,
}: Props) {
  return (
    <article className="mb-7 leisure-store-post w-[95%] px-[2px]">
      <div className="w-full overflow-hidden h-44 thumbnail">
        <img src={imgUrl} className="h-full rounded-lg" />
      </div>
      <div className="info">
        <p className="mt-2 mb-1 font-bold title">{name}</p>
        <div className="flex text-sm rating-review-box">
          <div className="flex rating">
            <div className="mt-[0.11rem] star">
              <IconSvg
                className="w-[1.15rem] h-[1.15rem] text-cyanTxt"
                viewBox="0 0 20 20"
                fill="currentColor"
                pathD="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </div>
            <span className="ml-1 mr-3 font-bold">{rating}</span>
          </div>
          <div className="review">
            <p>리뷰 {review >= 1000 ? '999+' : review}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
