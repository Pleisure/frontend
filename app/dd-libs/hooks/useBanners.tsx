export interface IBanner {
  bannerLocation: string | number;
  bannerId: string | number;
  bannerImageUrl: string;
  bannerLink: string;
  bannerOrder: number;
}

export interface IBannerRequest {}

export interface IBannerResponse {}

export default function useBanners() {}
