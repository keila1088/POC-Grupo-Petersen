import React, { useState } from "react";
import styled from "styled-components";

import { FlexWrapper, TopMenu, LinkStyled as Link, Icon } from "../../_layout";
import Logo from "../../_components/BankLogo";
import {TopMenuItems,SideMenuItems} from '../_navigation/MenuItems';

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SideMenu = styled.div`
	position: fixed;
  left: 0;
  padding-top: 1rem;
	${changeWidth}
	height: 100%;
	background: white;
	display: flex;
	align-items: center;
    justify-content: flex-start;
    flex-direction:column;
	box-shadow: 0 0px 0px 1px rgba(0, 0, 0, .1);

    @keyframes close {
    from {padding:2rem 5.5rem 0 5.5rem; width:8rem;}
    to {padding: 2rem 1rem 0 1rem; width:3rem;}
    }
    @keyframes open {
        from {translateX(0);padding: 2rem 1rem 0 1rem;width:3rem;}
        to {translateX(0);padding: 2rem 5.5rem 0 5.5rem;width:8rem;}
        }
`;

const ContentWrapper = styled.div`
  width: 60%;
  height: 100%;
`;

function changeWidth({ close }) {
    return (
      (close === true &&
        `
      -webkit-animation-name: close;
      -webkit-animation-duration: .3s;
      animation-name: close;
      animation-duration: .3s;width: 5rem;
      padding: 2rem 0 0 0 ;`) ||
      (close === false &&
        `-webkit-animation-name: open;
      -webkit-animation-duration: .3s;
      animation-name: open;
      animation-duration: .3s;width: 8rem;padding: 2rem 5.5rem 0 5.5rem;`) ||
      `
      width: 8rem;
      padding: 2rem 5.5rem 0 5.5rem;
      `
    );
  }

  const LinkStyled = styled(Link)`
    display:flex;
    align-items:center;
    svg{
        width: 1.5rem; 
        fill: transparent;
        stroke: ${props => props.theme.primaryColor};
        stroke-width: .1rem;
    }
`;
const MenuWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 5rem;
  margin-top: 5rem;
`;

function changeMargin({ close }) {
  return (
    (close === true &&
      `
    -webkit-animation-name: closeBar;
    -webkit-animation-duration: .3s;
    animation-name: closeBar;
    animation-duration: .3s;margin-left:5rem;`) ||
    (close === false &&
      `-webkit-animation-name: openBar;
    -webkit-animation-duration: .3s;
    animation-name: openBar;
    animation-duration: .3s;margin-left:19rem;`) ||
    `
    margin-left:19rem;
    `
  );
}

const SideMenuWrapper = styled.div`
  position: relative;
  height:100%;
  ${changeMargin}
  @keyframes closeBar {
    from { margin-left:19rem;}
    to { margin-left:5rem;}
    }
    @keyframes openBar {
        from {margin-left:5rem;}
        to {margin-left:19rem;}
        }
`;

export default function Sidebar({component}) {

  const [open, setOpen] = useState(undefined);

  return (
    <DesktopWrapper>
      <MenuWrapper>
        <TopMenu>
          <Logo/>
          <TopMenuItems/>
        </TopMenu>
      </MenuWrapper>

      <FlexWrapper flexStart>
      <SideMenuWrapper close={open}>
        <SideMenu close={open}>
          <LinkStyled onClick={() => setOpen(!open)}>
            {open ? <Icon shape="sideBarArrow"/> : <><Icon shape="sideBarArrow"/>Ocultar</>} </LinkStyled>
          <SideMenuItems hide={open}/>
        </SideMenu>
        </SideMenuWrapper>
        <ContentWrapper>{component}</ContentWrapper>
      </FlexWrapper>
    </DesktopWrapper>
  );
}
