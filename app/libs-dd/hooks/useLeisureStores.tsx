export interface ILeisureStore {
  storeId: string | number;
  storeName: string;
  storeThumbnailUrl: string;
  storeAverageRating: number;
  storeReviewCount: number;
}

export default function useLeisureStores() {}
