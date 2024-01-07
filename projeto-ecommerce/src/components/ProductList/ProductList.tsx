"use client"
import { useProducts } from '@/hooks/useProducts';

export default function ProductList() {
  const { data } = useProducts();

  return (
    <div>ProductList</div>
  )
}
