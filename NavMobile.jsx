import React, { useState } from "react";
import styled from "styled-components";

import { Icon, TopMenu } from "../../_layout";
import Logo from "../../_components/BankLogo";

import {TopMenuItems,SideMenuItems} from '../_navigation/MenuItems';


const MenuComponent = styled.div`
  position: absolute;
  background-color: ${props => props.theme.primaryColor};
  z-index: 1999;
  left: 0;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  ${changeWidthMenuMobile} height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.1);

  @keyframes close {
    from {
      left: 0;
    }
    to {
      left: -100%;
    }
  }
  @keyframes open {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }
`;

function changeWidthMenuMobile({ open }) {
  if (open === undefined) return `left:-100%;`;

  return `
      animation-duration: .5s;
      -webkit-animation-duration: .5s;
      ${
        open
          ? `  
      -webkit-animation-name: open;
      animation-name: open;
      `
          : `  
      -webkit-animation-name: close;
      animation-name: close;
      left:-100%;
      `
      }`;
}

const MenuWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
`;

export default function MenuMobile({ component }) {
  const [open, setOpen] = useState(undefined);

  return (
    <>
      <MenuComponent open={open}>
        <Icon onClick={() => setOpen(!open)} shape="close" />
        <SideMenuItems/>
      </MenuComponent>
      <MenuWrapper>
      <TopMenu>
        <Logo />
        <Icon onClick={() => setOpen(!open)} shape="menuIcon" />
      </TopMenu>
      </MenuWrapper>
      {component}
    </>
  );
}
