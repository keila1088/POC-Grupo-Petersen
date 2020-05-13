import React from "react";
import styled from "styled-components";

import { ReactComponent as Close } from '../_images/close.svg';
import { ReactComponent as IconMenu } from '../_images/icon_menu.svg';
import { ReactComponent as DesktopIcon } from '../_images/DesktopIcon.svg';
import { ReactComponent as AccountIcon } from '../_images/account.svg';
import { ReactComponent as CardIcon } from '../_images/card.svg';
import { ReactComponent as TransferIcon } from '../_images/transfer.svg';
import { ReactComponent as SideBarArrow } from '../_images/sideBarArrow.svg';
import { ReactComponent as Paiment } from '../_images/paiment.svg';



import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

const CloseIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        width:1rem;
    }
    position:absolute;
    right:${isMobile ? "1rem" : "0"};
    top:.8rem;
`;


const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        width:1rem;
    }
`;

const Image = styled.img`
    width: 13rem;
    margin: 1rem;
`;

export default function Icon({ shape, source, onClick, disabled, ...props }) {
    const handleOnClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    switch (shape) {
        case "close":
            return (
                <CloseIcon onClick={handleOnClick} {...props}>
                    <Close/>
                </CloseIcon>
            );
            case "menuIcon":
            return (
                <MenuIcon onClick={handleOnClick} {...props}>
                    <IconMenu/>
                </MenuIcon>
            );
            case "logo":
            return (
                <Image src={source} {...props}/>
            );
            case "desktopIcon":
            return (
                <MenuIcon onClick={handleOnClick} {...props}>
                <DesktopIcon/>
                </MenuIcon>
            );
            case "accountIcon":
            return (
                <MenuIcon onClick={handleOnClick} {...props}>
                <AccountIcon/>
                </MenuIcon>
            );
            case "cardIcon":
            return (
                <MenuIcon onClick={handleOnClick} {...props}>
                <CardIcon/>
                </MenuIcon>
            );
            case "transferIcon":
            return (
                <MenuIcon onClick={handleOnClick} {...props}>
                <TransferIcon/>
                </MenuIcon>
            );
            case "sideBarArrow":
            return (
                <MenuIcon onClick={handleOnClick} {...props}>
                <SideBarArrow/>
                </MenuIcon>
            );
            case "paimentIcon":
            return (
                <MenuIcon onClick={handleOnClick} {...props}>
                <Paiment/>
                </MenuIcon>
            );
        default:
            return (
                <></>
            );
    }
}
