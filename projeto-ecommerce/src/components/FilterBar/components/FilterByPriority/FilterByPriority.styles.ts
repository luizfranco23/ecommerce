"use client";
import styled from "styled-components";

export const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;

	button {
		border: none;
		color: var(--text-dark);
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		padding-right: 5px;
		cursor: pointer;
	}
`;

export const PriorityFilter = styled.ul`
	color: var(--text-dark);
	width: 176px;
	position: absolute;
	background-color: #ffffff;
	box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 12px 16px;
	list-style: none;
	top: 25px;

	li {
		font-size: 14px;
	}

	li + li {
		margin-top: 4px;
	}
`;
