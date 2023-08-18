interface SummaryData {
  totalRatingAverage: number;
  numOfFiveStars: number;
  numOfFourStars: number;
  numOfThreeStars: number;
  numOfTwoStars: number;
  numOfOneStars: number;
}

export class RatingCounts implements SummaryData {
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

  get countsByRating() {
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

interface Review {
  reviewWriterNickname: string;
  storeReviewId: string;
  storeReviewRating: number;
  storeReviewContent: string;
  storeReviewPhotoUrls: string[];
  createdAt: string;
}

export abstract class Fetcher {
  static getRatingCounts(): RatingCounts {
    return new RatingCounts({
      totalRatingAverage: 4.8,
      numOfFiveStars: 1000,
      numOfFourStars: 400,
      numOfThreeStars: 300,
      numOfTwoStars: 200,
      numOfOneStars: 100,
    });
  }

  static getReviews(): Review[] {
    return [
      {
        reviewWriterNickname: '김사장',
        storeReviewId: '',
        storeReviewRating: 4,
        storeReviewContent: '친절했어요.',
        storeReviewPhotoUrls: [],
        createdAt: '2023-08-03T12:00:00.000Z',
      },
      {
        reviewWriterNickname: '율루랄라',
        storeReviewId: '',
        storeReviewRating: 1,
        storeReviewContent:
          '노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요.',
        storeReviewPhotoUrls: [],
        createdAt: '2023-08-05T12:00:00.000Z',
      },
      {
        reviewWriterNickname: '김사장',
        storeReviewId: '',
        storeReviewRating: 4,
        storeReviewContent: '친절했어요.',
        storeReviewPhotoUrls: [],
        createdAt: '2023-08-03T12:00:00.000Z',
      },
      {
        reviewWriterNickname: '율루랄라',
        storeReviewId: '',
        storeReviewRating: 1,
        storeReviewContent:
          '노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요. 노잼. 재미 없었어요.',
        storeReviewPhotoUrls: [],
        createdAt: '2023-08-05T12:00:00.000Z',
      },
    ];
  }
}
