import React from "react";
import styled from "styled-components";

import BackgroundSrc from "../_images/background.jpg";
import { Link } from "react-router-dom";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function addBackgroundOpacity({ backgroundOpacity }) {
  return backgroundOpacity
    ? `
            background: rgba(0, 0, 0, 0.6);
        `
    : `
            
        `;
}

function changeStructure({ loginWrapper }) {
  return (
    (loginWrapper &&
      `
    position: absolute;
    right: 0;
    width: 25%;
    padding-right: 6rem;
    padding-left: 6rem;
    `) ||
    ``
  );
}

function changeJustifyContent ({flexStart, center, spaceAround}){
  return(
    flexStart && "flex-start" || center && "center" || spaceAround && "space-around" || "space-between"
  )
}

function changeFlexDirection({col}){
  return(
    col ? `flex-direction: column;` : ""
  )
}

export const FlexWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: ${changeJustifyContent};
    ${changeFlexDirection}
    height: 100%;
`;

export const BackgroundImage = styled.div`
  background: url(${BackgroundSrc});
  background-position: center;
  @media (min-width: 768px) {
    position: relative;
    width: 100%;
    height: 100vh;
  }
`;

const LayoutComponent = styled.div`
  max-width: 100%;
  width: 100%;
  height: ${isMobile ? "100vh" : "100%"};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: ${changeJustifyContent};
`;

const MobileOffLayout = styled(LayoutComponent)`
  ${addBackgroundOpacity};
`;
const DesktopOffLayout = styled(LayoutComponent)`
  ${addBackgroundOpacity};
  ${changeStructure};
  align-items: flex-start;
`;

export function OffLayout({ children, ...props }) {
  return isMobile ? (
    <MobileOffLayout {...props}>{children}</MobileOffLayout>
  ) : (
    <DesktopOffLayout spaceAround {...props}>{children}</DesktopOffLayout>
  );
}


export const Header = styled.header`
    display: flex;
    justify-content: ${isMobile ? "center" : "flex-start"};
    position:relative;
    width: ${isMobile ? "auto" : "100%"};
`;

function changeAlign({ left }) {
  return left
    ? `
    align-items:left;
        `
    : `
    align-items:center;
    `;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-content: center;
  width: 100%;
  align-items: ${isMobile ? "center" : "left"}
`;
export const Actions = styled.div`
  ${changeAlign};
`;

export const LinkStyled = styled(Link)`
  padding: 0.25rem;
  color: #000;
  text-decoration: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const TopMenu = styled.div`
  height: 5rem;
  position: fixed;
  top: 0;
  z-index: 199;
  width: 100%;
  background: white;
  display: ${props => (props.display ? props.display : "flex")}};
  align-items: center;
  justify-content: space-between;
  padding: ${isMobile ? "0" : "0 5rem"};
  box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.1);
  border-top: 1px solid ${props => props.theme.primaryColor};
  box-sizing: border-box;
`;