export default function roundReviewCount(reviewCount: number) {
  const MAX_REVIEWS = 999;
  return reviewCount > MAX_REVIEWS ? '999+' : reviewCount;
}
