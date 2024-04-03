export interface ProductInterface {
    id: number;
    name: string;
    images: string[];
    description?: string;
    price: number;
    units: number;
    category: string;
    tags: string[];
  }