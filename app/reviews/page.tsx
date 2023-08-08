interface Review {
  reviewWriterNickname: string;
  storeReviewId: string;
  storeReviewRating: number;
  storeReviewContent: string;
  storeReviewPhotoUrls: string[];
  createdAt: string;
}

export default function Home() {
  const reviews: Review[] = [
    {
      reviewWriterNickname: "김사장",
      storeReviewId: "",
      storeReviewRating: 4,
      storeReviewContent: "친절했어요.",
      storeReviewPhotoUrls: [],
      createdAt: "2023-08-03T12:00:00.000Z",
    },
    {
      reviewWriterNickname: "율루랄라",
      storeReviewId: "",
      storeReviewRating: 1,
      storeReviewContent: "노잼",
      storeReviewPhotoUrls: [],
      createdAt: "2023-08-05T12:00:00.000Z",
    },
  ];
  return (
    <>
      {reviews.map((review) => (
        <div>
          {review.reviewWriterNickname}님
          <Stars rating={review.storeReviewRating} />
          <span>{review.createdAt}</span>
          <p>{review.storeReviewContent}</p>
        </div>
      ))}
    </>
  );
}

function Stars(props: { rating: number }) {
  const rating = Math.min(Math.max(1, props.rating), 5);
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: rating }).map((e) => (
        <Star isFilled={true} />
      ))}
      {Array.from({ length: 5 - rating }).map(() => (
        <Star isFilled={false} />
      ))}
    </div>
  );
}

function Star({ isFilled }: { isFilled: boolean }) {
  if (isFilled) {
    return (
      <svg
        className="w-4 h-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  }

  return (
    <svg
      className="w-4 h-4 text-gray-300 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}
