import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface SummaryData {
  totalRatingAverage: number;
  numOfFiveStars: number;
  numOfFourStars: number;
  numOfThreeStars: number;
  numOfTwoStars: number;
  numOfOneStars: number;
}

class Rating implements SummaryData {
  totalRatingAverage: number;
  numOfFiveStars: number;
  numOfFourStars: number;
  numOfThreeStars: number;
  numOfTwoStars: number;
  numOfOneStars: number;

  constructor(data: SummaryData) {
    this.totalRatingAverage = data.totalRatingAverage;
    this.numOfFiveStars = data.numOfFiveStars;
    this.numOfFourStars = data.numOfFourStars;
    this.numOfThreeStars = data.numOfThreeStars;
    this.numOfTwoStars = data.numOfTwoStars;
    this.numOfOneStars = data.numOfOneStars;
  }

  get summary() {
    const counts = [
      this.numOfFiveStars,
      this.numOfFourStars,
      this.numOfThreeStars,
      this.numOfTwoStars,
      this.numOfOneStars,
    ];
    const totalCount = counts.reduce((acc, count) => acc + count, 0);
    return counts.map((count, index) => ({
      rating: 5 - index,
      percentage: Math.floor((count / totalCount) * 100),
      count,
    }));
  }
}

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rating = new Rating({
    totalRatingAverage: 4.8,
    numOfFiveStars: 1000,
    numOfFourStars: 400,
    numOfThreeStars: 300,
    numOfTwoStars: 200,
    numOfOneStars: 100,
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex m-4">
          <div className="flex items-center w-1/4 mr-2 text-2xl">
            ⭐️ {rating.totalRatingAverage}
          </div>
          <div className="w-3/4">
            {rating.summary.map((p) => (
              <Bar {...p} />
            ))}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

function Bar({
  rating,
  percentage,
  count,
}: {
  rating: number;
  percentage: number;
  count: number;
}) {
  return (
    <div className="flex items-center">
      <div className=" w-[2rem]">{rating}점</div>
      <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded">
        <div
          className="w-1/4 h-full bg-cyan-400 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {count < 1000 ? count : '999+'}
      </span>
    </div>
  );
}
