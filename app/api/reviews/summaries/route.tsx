import { NextResponse } from 'next/server';
import { QUERY_PARAMS, REVIEWS } from '../constants';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storeId = searchParams.get(QUERY_PARAMS.STORE_ID);
  if (!storeId || isNaN(Number(storeId))) {
    return new NextResponse('Bad request', {
      status: 400,
    });
  }

  let reviews = REVIEWS.filter(
    (review) => review.storeId === Number(storeId)
  ).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const avg =
    reviews.reduce((acc, cur) => acc + cur.storeReviewRating, 0) /
    reviews.length;

  const summary = {
    totalRatingAverage: avg,
    numOfFiveStars: reviews.filter((review) => review.storeReviewRating === 5)
      .length,
    numOfFourStars: reviews.filter((review) => review.storeReviewRating === 4)
      .length,
    numOfThreeStars: reviews.filter((review) => review.storeReviewRating === 3)
      .length,
    numOfTwoStars: reviews.filter((review) => review.storeReviewRating === 2)
      .length,
    numOfOneStars: reviews.filter((review) => review.storeReviewRating === 1)
      .length,
  };

  return NextResponse.json(summary);
}
