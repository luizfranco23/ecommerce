"use client"
import styled from "styled-components";

interface FilterItemProps {
	selected: boolean
}

export const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

export const FilterItem = styled.li<FilterItemProps>`
	height: 22px;
	font-family: inherit;
	font-weight: ${props => props.selected ? '600' : '400'};
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: var(--text-dark);
	padding-bottom: 25px;
	border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
	cursor: pointer;
`;
