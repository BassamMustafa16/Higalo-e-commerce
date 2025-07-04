export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  ribbon: string;
  category: string;
  discount: boolean;
  originalPrice: number | null;
  percentage: number | null;
  description: string;
  inventory: number;
  itemsSold: number;
  images: string[];
  colors: string[];
};
export type Category = {
  id: string;
  name: string;
};
export type Subcategories = {
  id: string;
  name: string;
  categoryId: string;
};
