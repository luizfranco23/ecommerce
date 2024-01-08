import { formatPrice } from '@/utils/formatPrice'
import * as S from './ProductCard.styles'

interface IProductCardProps {
  image: string
  title: string
  price: number
}

export default function ProductCard(props: IProductCardProps) {

  const formattedPrice = formatPrice(props.price)

  return (
    <S.Card>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{formattedPrice}</p>
      </div>
    </S.Card>
  )
}
