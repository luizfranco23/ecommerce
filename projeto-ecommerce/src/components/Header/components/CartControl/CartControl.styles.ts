"use client";
import styled from "styled-components";

export const Container = styled.div`
	position: relative;
`;

export const CartCount = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 17px;
	height: 17px;

	background-color: var(--delete-color);
	color: white;
	position: absolute;
	right: -2px;
	top: 2px;
	border-radius: 8px;
`;
