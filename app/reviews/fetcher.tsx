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
  reviewWriterProfileImgUrl: string;
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
        reviewWriterNickname: '율루랄라',
        reviewWriterProfileImgUrl:
          'https://yt3.ggpht.com/bUQjbuX5alVXIz0jEb2ZtUEUmM16WvpYurWevC6TeK2y5BBWlFTkaZ90aHtF0pySU7PLEZ7h=s88-c-k-c0x00ffffff-no-rj',
        storeReviewId: '',
        storeReviewRating: 3,
        storeReviewContent:
          '수상스키는 정말 신나는 경험이었습니다. 바람을 느끼며 수면 위를 미끄러지는 것은 매우 자유롭고, 운동 효과도 좋았습니다. 수상스키를 타고 싶으시다면, 한 번 도전해보시길 추천합니다.',
        storeReviewPhotoUrls: [
          'https://upload.wikimedia.org/wikipedia/commons/5/55/Water_skiing_0754.jpg',
          'https://www.kocis.go.kr/CONTENTS/editImage/20220511170717803_8GI2Z6Y1.jpg',
        ],
        createdAt: '2023-08-05T12:00:00.000Z',
      },
      {
        reviewWriterNickname: '스폰지밥',
        reviewWriterProfileImgUrl:
          'https://koreanbots.dev/api/image/discord/icons/1083056601860145295.webp?size=256',
        storeReviewId: '',
        storeReviewRating: 4,
        storeReviewContent:
          '와~! 배 타는 거 진짜 재밌었어! 바다를 보는 게 너무 좋았고, 해변에서 놀고, 맛있는 음식도 먹고! 다음에도 꼭 함께 가자고!',
        storeReviewPhotoUrls: [
          'https://ak-d.tripcdn.com/images/1mj0112000bh6rdxt7E56_Z_640_10000_R5.png_.webp?proc=autoorient',
          'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5900367515/B.png?476000000',
        ],
        createdAt: '2023-08-03T12:00:00.000Z',
      },
      {
        reviewWriterNickname: '뚱이',
        reviewWriterProfileImgUrl:
          'data:image/jpeg;base64,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',
        storeReviewId: '',
        storeReviewRating: 5,
        storeReviewContent:
          '오늘 배 타는 거 진짜 재밌었어! 스펀지밥, 징징이랑 함께 해서 더 즐거웠어. 다음에도 꼭 함께 가자고! 히히히!',
        storeReviewPhotoUrls: [
          'https://cdn.imweb.me/thumbnail/20210426/f88427e2ff325.jpg',
        ],
        createdAt: '2023-08-03T12:00:00.000Z',
      },
      {
        reviewWriterNickname: '징징이',
        reviewWriterProfileImgUrl:
          'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/XoC/image/w0gDroK5Q9vJacqEG4ZUm-N0nrk.jpg',
        storeReviewId: '',
        storeReviewRating: 1,
        storeReviewContent:
          '으으으... 배 타는 거 왜 이렇게 재미없는지 모르겠어...',
        storeReviewPhotoUrls: [
          'https://economychosun.com/site/data/img_dir/2022/01/17/2022011700035_0.jpg',
        ],
        createdAt: '2023-08-05T12:00:00.000Z',
      },
    ];
  }
}
