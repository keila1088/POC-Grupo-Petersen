import React from 'react';
import Styled from "styled-components";
import ImgAvatar from "../_images/avatar.jpeg";

const AvatarImage = Styled.div`
    background: url(${ImgAvatar});
    height: 8rem;
    width: 8rem;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
`;
const AvatarWrapper = Styled.div`
    height: 10rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Avatar(){
    return(
        <AvatarWrapper>
            <AvatarImage/>
        </AvatarWrapper>
    );

}