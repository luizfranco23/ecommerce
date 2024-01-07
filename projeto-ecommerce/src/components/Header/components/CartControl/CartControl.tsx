"use client"
import { CiShoppingCart } from "react-icons/ci";
import * as S from './CartControl.styles'
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function CartControl() {
  const { value } = useLocalStorage('cart-items', [])

  const iconSize = 38;

  return (
    <S.Container>
      <CiShoppingCart style={{ fontSize: iconSize }} />
      {value.length &&
        <S.CartCount>
          {value.length}
        </S.CartCount>}
    </S.Container>
  )
}
