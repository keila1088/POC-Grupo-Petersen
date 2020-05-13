import React from 'react';

import styled from 'styled-components';
import classnames from 'classnames';

import { LinkStyled as Link, Icon } from "../../_layout";




const LinkStyled = styled(Link)`
    display:flex;
    align-items:center;
    transition:.2s all;
    padding:0.5rem;
    border-radius:.3rem;
    svg{
        
        fill: transparent;
        stroke: ${props => props.theme.primaryColor};
        stroke-width: .08rem;
        width: 1.4rem;
    }
    span{
        margin-left:.5rem;
    }
    .hide{
        display:none;
    }

    @keyframes slideup {
        0% {
          opacity: 1;
        }
        100% {
            opacity: 0;
        }
      }
`;

const LinkStyledHover = styled(LinkStyled)`
    &:hover{
        background-color: ${props => props.theme.primaryColor};
        color: white;
        transition:.2s all;
        svg{

            stroke: white;
        }
    }
`;

const RowWrapper = styled.div`
    display:flex;
    flex-direction: row;
`;

const ColWrapper = styled.div`
    display:flex;
    flex-direction: column;
    a{
        margin-top:1rem;
    }
`;

export const TopMenuItems = () => {
	return (
		<RowWrapper>
			<LinkStyled href="">Mensajes</LinkStyled>
			<LinkStyled href="">Juan Demo</LinkStyled>
			<LinkStyled href="">Perfil</LinkStyled>
		</RowWrapper>
	);
};

function IconItem({icon, item, hide}){
    return(
        <><Icon shape={icon}/><span className={classnames({hide})}>{item}</span></>
    )
}

export const SideMenuItems = ({hide}) => {
	return (
		<ColWrapper>
			<LinkStyledHover href=""><IconItem hide={hide} icon="desktopIcon" item="Escritorio"/></LinkStyledHover>
			<LinkStyledHover href=""><IconItem hide={hide} icon="accountIcon" item="Cuentas"/></LinkStyledHover>
			<LinkStyledHover href=""><IconItem hide={hide} icon="cardIcon" item="Tarjetas"/></LinkStyledHover>			
			<LinkStyledHover href=""><IconItem hide={hide} icon="transferIcon" item="Transferencias"/></LinkStyledHover>			
			<LinkStyledHover href=""><IconItem hide={hide} icon="paimentIcon" item="Pagos"/></LinkStyledHover>			
		</ColWrapper>
	);
};
