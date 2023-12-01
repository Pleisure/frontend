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
  reviewWriterProfilePictureUrl: string;
  reviewWriterAge: number;
  reviewWriterGender: string;
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
        reviewWriterProfilePictureUrl:
          'https://yt3.ggpht.com/bUQjbuX5alVXIz0jEb2ZtUEUmM16WvpYurWevC6TeK2y5BBWlFTkaZ90aHtF0pySU7PLEZ7h=s88-c-k-c0x00ffffff-no-rj',
        reviewWriterAge: 33,
        reviewWriterGender: 'MALE',
        storeReviewId: '',
        storeReviewRating: 3,
        storeReviewContent:
          '수상스키는 정말 신나는 경험이었습니다. 바람을 느끼며 수면 위를 미끄러지는 것은 매우 자유롭고, 운동 효과도 좋았습니다. 수상스키를 타고 싶으시다면, 한 번 도전해보시길 추천합니다.',
        storeReviewPhotoUrls: [
          'https://upload.wikimedia.org/wikipedia/commons/5/55/Water_skiing_0754.jpg',
          'https://www.kocis.go.kr/CONTENTS/editImage/20220511170717803_8GI2Z6Y1.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/5/55/Water_skiing_0754.jpg',
          'https://www.kocis.go.kr/CONTENTS/editImage/20220511170717803_8GI2Z6Y1.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/5/55/Water_skiing_0754.jpg',
          'https://www.kocis.go.kr/CONTENTS/editImage/20220511170717803_8GI2Z6Y1.jpg',
        ],
        createdAt: '2023-08-20T02:00:00.000Z',
      },
      {
        reviewWriterNickname: '스폰지밥',
        reviewWriterProfilePictureUrl:
          'https://koreanbots.dev/api/image/discord/icons/1083056601860145295.webp?size=256',
        reviewWriterAge: 37,
        reviewWriterGender: 'MALE',
        storeReviewId: '',
        storeReviewRating: 4,
        storeReviewContent:
          '와~! 배 타는 거 진짜 재밌었어! 바다를 보는 게 너무 좋았고, 해변에서 놀고, 맛있는 음식도 먹고! 다음에도 꼭 함께 가자고!',
        storeReviewPhotoUrls: [
          'https://ak-d.tripcdn.com/images/1mj0112000bh6rdxt7E56_Z_640_10000_R5.png_.webp?proc=autoorient',
          'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5900367515/B.png?476000000',
          'https://ak-d.tripcdn.com/images/1mj0112000bh6rdxt7E56_Z_640_10000_R5.png_.webp?proc=autoorient',
          'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5900367515/B.png?476000000',
          'https://ak-d.tripcdn.com/images/1mj0112000bh6rdxt7E56_Z_640_10000_R5.png_.webp?proc=autoorient',
          'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5900367515/B.png?476000000',
        ],
        createdAt: '2023-08-15T12:00:00.000Z',
      },
      {
        reviewWriterNickname: '뚱이',
        reviewWriterProfilePictureUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPy2aYGoVHlldLKew5deNw-_BXtF3Ma-UGQ&usqp=CAU',
        reviewWriterAge: 37,
        reviewWriterGender: 'MALE',
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
        reviewWriterProfilePictureUrl:
          'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/XoC/image/w0gDroK5Q9vJacqEG4ZUm-N0nrk.jpg',
        reviewWriterAge: 45,
        reviewWriterGender: 'MALE',
        storeReviewId: '',
        storeReviewRating: 1,
        storeReviewContent:
          '으으으... 배 타는 거 왜 이렇게 재미없는지 모르겠어...',
        storeReviewPhotoUrls: [
          'https://economychosun.com/site/data/img_dir/2022/01/17/2022011700035_0.jpg',
          'https://economychosun.com/site/data/img_dir/2022/01/17/2022011700035_0.jpg',
          'https://economychosun.com/site/data/img_dir/2022/01/17/2022011700035_0.jpg',
        ],
        createdAt: '2023-08-05T12:00:00.000Z',
      },
    ];
  }
}
