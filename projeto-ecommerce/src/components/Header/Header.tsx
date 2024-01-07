import * as S from './Header.styles'
import { CiSearch } from "react-icons/ci";
import CartControl from './components/CartControl/CartControl';
import { Noto_Sans_Georgian } from 'next/font/google'

const font = Noto_Sans_Georgian({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function Header() {
  return (
    <S.TagHeader className={font.className}>
      <S.Logo>
        <h1>Ecommerce</h1>
      </S.Logo>
      <S.Container>
        <S.InputContainer>
          <S.PrimaryInput placeholder='Procurando por algo específico?' />
          <CiSearch />
        </S.InputContainer>
        <CartControl />
      </S.Container>
    </S.TagHeader>
  )
}
