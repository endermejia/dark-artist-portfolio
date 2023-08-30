export interface StockModel {
  size: string;
  quantity: number;
}

export interface ProductModel {
  name: string;
  price: number;
  stock: StockModel[];
  icon: string;
  selectedQuantity?: number;
  selectedSize?: string;
}

export interface CartItemModel {
  name: string;
  price: number;
  quantity: number;
  size: string;
  icon: string;
}
