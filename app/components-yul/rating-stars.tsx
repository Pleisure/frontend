import Star from './star';

export default function RatingStars(props: { rating: number }) {
  const rating = Math.min(Math.max(1, props.rating), 5);
  return (
    <div className="flex items-center space-x-[2px]">
      {Array.from({ length: rating }).map((_, index) => (
        <Star
          key={index}
          isFilled={true}
          fillStarClassName="w-4 h-4 text-cyan-400"
        />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <Star
          key={index}
          isFilled={false}
          emptyStarClassName="w-4 h-4 text-gray-300 dark:text-gray-500"
        />
      ))}
    </div>
  );
}
