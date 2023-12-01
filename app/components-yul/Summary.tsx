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
        <div key={index} className="flex items-center gap-[0.45rem] text-sm">
          <span className="font-bold w-[22px]">{rating}점</span>
          <div className="w-[65%]">
            <Bar percentage={percentage} />
          </div>
          <span className="text-gray-500">{count < 1000 ? count : '999+'}</span>
        </div>
      ))}
    </div>
  );
}

function Bar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded my-[0.45rem]">
      <div
        className="h-full rounded bg-cyan-400"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
