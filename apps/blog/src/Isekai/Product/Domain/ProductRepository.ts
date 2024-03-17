import type { Product } from './Product'

export interface FindParamsProductRepository {
  collection?: number
}

export interface ProductRepository {
  find(params: FindParamsProductRepository): Promise<Product[]>
}
