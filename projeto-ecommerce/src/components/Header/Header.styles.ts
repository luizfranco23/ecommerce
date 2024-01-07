"use client";
import styled from "styled-components";

export const TagHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 160px;
`;

export const Logo = styled.a`
	color: var(--logo-color);
	font-weight: 400;
	line-height: 150%;

	h1 {
		font-size: 40px;
	}
`;

export const PrimaryInput = styled.input`
	width: 352px;
	border-radius: 8px;
	padding: 13px 16px;
	font-size: 14px;
	font-weight: 400;
	border: none;

	background-color: var(--bg-secondary);
	color: var(--text-dark);
`;

export const InputContainer = styled.div`
	position: relative;
	width: 352px;

	svg {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-60%);
		font-size: 30px;
		cursor: pointer;
	}
`;

export const Container = styled.div`
	display: flex;
`;
