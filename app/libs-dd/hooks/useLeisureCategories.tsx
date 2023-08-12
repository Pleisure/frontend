export interface ICategory {
  categoryId: string | number;
  categoryName: string;
  categoryIconUrl: string;
  categoryOrder: number;
}

export interface ICategoryRequest {}

export interface ICategoryResponse {}

export default function useCategories() {}
