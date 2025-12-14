export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: string;
  subcategory?: string;
  brand?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  specifications?: Record<string, string>;
  variants?: ProductVariant[];
  isFlashSale?: boolean;
  flashSaleEndsAt?: Date;
}

export interface ProductVariant {
  id: string;
  name: string;
  type: 'size' | 'color' | 'storage';
  options: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories?: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  addresses?: Address[];
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'paystack' | 'bank_transfer';
  paymentStatus: 'pending' | 'confirmed' | 'failed';
  deliveryAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
}
