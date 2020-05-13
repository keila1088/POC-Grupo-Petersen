import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function changeButtonSize({ small }) {
  return small
    ? `
    width: 1rem;
    height: 1rem;
    margin: .3rem;
    `
    : ``;
}

const ButtonStyled = styled.button`
	border: 0;
	background-color: ${props => props.theme.primaryColor};
	color: ${props => props.theme.button.primary};
	width: ${isBrowser ? "auto" : "100%"};
	margin: ${isBrowser ? ".5rem .5rem .5rem 0;" : ".5rem 0;"}
	padding: 1em;
	border-radius: 5rem;
	font-size: 0.875rem;
	font-weight: 700;
	text-transform: uppercase;
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	outline:0;
	white-space: normal;
	font-family: helveticaNeue-Light, Helvetica Neue, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif;
	${changeButtonSize}
	span {
		text-align: center;
	}
`;

export default function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
