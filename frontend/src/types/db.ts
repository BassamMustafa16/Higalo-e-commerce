export type Aspects = {
  highlights?: string[];
  colors?: string[];
  ribbon?: string;
  // add more fields as needed
};
type Price = {
  originalPrice?: number;
  salePercentage?: number;
  finalPrice: number;
  // add more fields as needed
};

type Images = {
  mainImage: string;
  moreImages: string[];
};

export type Product = {
  id: string;
  name: string;
  price: Price;
  categoryName: string;
  description: string;
  inventory: number;
  itemsSold: number;
  images: Images;
  colors: string[];
  aspects: Aspects;
  averageRating: number;
  ratingsCount: number;
  roundedAverageRating: number;
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
