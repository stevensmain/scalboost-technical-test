export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface Category {
  id: number;
  name: CategoryName;
  image: string;
}

export type CategoryName =
  | "Furniture"
  | "Miscellaneous"
  | "Clothes"
  | "Electronics"
  | "Shoes";
