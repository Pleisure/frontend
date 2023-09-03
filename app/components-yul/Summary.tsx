export default function Summary({
  countsByRating,
}: {
  countsByRating: {
    rating: number;
    percentage: number;
    count: number;
  }[];
}) {
  return (
    <div>
      {countsByRating.map(({ rating, percentage, count }, index) => (
        <div key={index}>
          <span className="font-bold">{rating}점</span>
          <span>
            <Bar percentage={percentage} />
          </span>
          <span className="text-gray-500">{count < 1000 ? count : '999+'}</span>
        </div>
      ))}
    </div>
  );
}

function Bar({ percentage }: { percentage: number }) {
  return (
    <div className="h-2 bg-gray-200 rounded">
      <div
        className="h-full bg-cyan-400 rounded"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
