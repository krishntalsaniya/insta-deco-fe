export type Product = {
  title: string;
  reviews: number;
  price: number;
  category?: string;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
