"use client"
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import * as S from './ProductList.styles'

export default function ProductList() {
  const { data } = useProducts();
  return (
    <S.ListContainer>
      {data?.map(product =>
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      )}
    </S.ListContainer>
  )
}
