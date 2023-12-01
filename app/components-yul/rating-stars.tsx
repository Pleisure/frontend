import Star from './star';

export default function RatingStars(props: { rating: number }) {
  const rating = Math.min(Math.max(1, props.rating), 5);
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} isFilled={true} />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <Star key={index} isFilled={false} />
      ))}
    </div>
  );
}
