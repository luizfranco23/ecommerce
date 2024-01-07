"use client"
import FilterByPriority from './components/FilterByPriority/FilterByPriority'
import FilterByType from './components/FilterByType/FilterByType'
import * as S from './FilterBar.styles'

interface IFilterBarProps {

}

export default function FilterBar(props: IFilterBarProps) {
  return (
    <S.FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </S.FilterContainer>
  )
}
