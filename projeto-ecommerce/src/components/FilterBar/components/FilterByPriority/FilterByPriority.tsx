import { useState } from 'react';
import * as S from './FilterByPriority.styles'
import { IoIosArrowDown } from "react-icons/io";
import { useFilter } from '@/hooks/useFilter';
import { PriorityFilter } from '@/types/PriorityFilter';


export default function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => setIsOpen(e => !e)

  const handleUpdatePriority = (value: PriorityFilter) => {
    setPriority(value)
    setIsOpen(false)
  }
  return (
    <S.FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
      </button>
      {
        isOpen &&
        <S.PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityFilter.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdatePriority(PriorityFilter.BIGGEST_PRICE)}>Preço: Maior - menor</li>
          <li onClick={() => handleUpdatePriority(PriorityFilter.MINOR_PRICE)}>Preço: Menor - maior</li>
          <li onClick={() => handleUpdatePriority(PriorityFilter.POPULARITY)}>Mais vendidos</li>
        </S.PriorityFilter>
      }
      <IoIosArrowDown />
    </S.FilterContainer>
  )
}
