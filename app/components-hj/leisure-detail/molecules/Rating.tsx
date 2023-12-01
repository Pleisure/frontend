import Icon from '../atoms/Icon';

export default function Rating() {
  return (
    <div className="flex items-center justify-around pb-8 mx-2 rating">
      <div className="flex items-center w-[90%]">
        <Icon
          className="w-16 h-16 text-cyanTxt"
          viewBox="0 0 20 20"
          fill="currentColor"
          pathD="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
        <p className="text-[2.8rem] font-bold">4.8</p>
      </div>
      <ul className="text-[13px] rating-progress-bar w-full">
        {RATING_COUNT_LIST.map(({ rating, value, count }) => {
          return (
            <li
              key={rating}
              className="flex items-center gap-[0.45rem] text-lightGrayTxt"
            >
              <span>{rating}</span>
              <progress
                className="block w-[60%] my-[0.45rem] progress progress-info bg-grayBg"
                value={value}
                max="100"
              ></progress>
              <span>{count >= 1000 ? '999+' : count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const RATING_COUNT_LIST = [
  { rating: '5점', value: 100, count: 99999 },
  { rating: '4점', value: 69, count: 437 },
  { rating: '3점', value: 56, count: 204 },
  { rating: '2점', value: 17, count: 85 },
  { rating: '1점', value: 3, count: 17 },
];
