import { NextResponse } from 'next/server';
import { QUERY_PARAMS, REVIEWS, Review } from './constants';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storeId = searchParams.get(QUERY_PARAMS.STORE_ID);
  if (!storeId || isNaN(Number(storeId))) {
    return new NextResponse('Bad request', {
      status: 400,
    });
  }

  const sort = searchParams.get(QUERY_PARAMS.SORT);
  const rating = searchParams.get(QUERY_PARAMS.RATING);
  const page = searchParams.get(QUERY_PARAMS.PAGE);

  let reviews = REVIEWS.filter(
    (review) => review.storeId === Number(storeId)
  ).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (sort) {
    switch (sort) {
      case 'helpful':
        reviews = reviews.sort((a, b) => b.helpCount - a.helpCount);
        break;
    }
  }

  reviews = filterByRating(rating, reviews);
  reviews = paginate(page, 20, reviews);

  return NextResponse.json(reviews);
}

function filterByRating(
  rating: string | null,
  reviews: (Review & { storeId: number })[]
) {
  if (!rating) {
    return reviews;
  }

  if (isNaN(Number(rating))) {
    return reviews;
  }

  return reviews.filter(
    (review) => review.storeReviewRating === Number(rating)
  );
}

function paginate(
  page: string | null,
  size: number,
  reviews: (Review & { storeId: number })[]
) {
  if (!page) {
    return reviews;
  }

  if (isNaN(Number(page))) {
    return reviews;
  }

  let pageNumber = Number(page);
  const maxPage = Math.ceil(reviews.length / size);
  pageNumber = Math.min(pageNumber, maxPage);
  return reviews.slice((pageNumber - 1) * size, pageNumber * size);
}
