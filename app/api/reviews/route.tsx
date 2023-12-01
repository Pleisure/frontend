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
    (review) => review.storeId === Number(storeId),
  ).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
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

  return NextResponse.json(reviews.map(({ storeId, ...rest }) => rest));
}

function filterByRating(
  rating: string | null,
  reviews: (Review & { storeId: number })[],
) {
  if (!rating) {
    return reviews;
  }

  if (isNaN(Number(rating))) {
    return reviews;
  }

  return reviews.filter(
    (review) => review.storeReviewRating === Number(rating),
  );
}

function paginate(
  page: string | null,
  size: number,
  reviews: (Review & { storeId: number })[],
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

interface CreateReviewRequest {
  storeId: number;
  reviewRating: number;
  reviewPhotoUrls: string[];
  reviewContent: string;
  visitedAt: string;
}

export async function POST(request: Request) {
  const body: CreateReviewRequest = await request.json();

  const review: Review & { storeId: number } = {
    reviewWriterNickname: '테스트계정',
    reviewWriterProfilePictureUrl:
      'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5ab958418835f42a6509fe53/8627d542-8e36-4e7b-94c4-c25a1b55f531/128',
    reviewWriterAge: 31,
    reviewWriterGender: 'MALE',
    storeReviewId: REVIEWS.length + 1,
    storeReviewRating: body.reviewRating,
    storeReviewContent: body.reviewContent,
    storeReviewPhotoUrls: body.reviewPhotoUrls,
    helpCount: 0,
    visitedAt: body.visitedAt,
    createdAt: new Date().toISOString(),
    storeId: body.storeId,
  };
  REVIEWS.push(review);

  return NextResponse.json(review);
}
