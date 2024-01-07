"use client"
import { useFilter } from '@/hooks/useFilter'
import * as S from './FilterByType.styles'
import { FilterType } from '@/types/FilterTypes';

interface IFilterByType { }

export default function FilterByType(props: IFilterByType) {

  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }

  return (
    <S.FilterList>
      <S.FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </S.FilterItem>
      <S.FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </S.FilterItem>
      <S.FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </S.FilterItem>
    </S.FilterList>
  )
} 