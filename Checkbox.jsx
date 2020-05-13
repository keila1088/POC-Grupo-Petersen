import React from "react";
import Styled from "styled-components";

const Label = Styled.label`
    color: white;

`;
const CheckBoxWrapper = Styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;
export default function CheckBox ({label}){

    return(
        <CheckBoxWrapper>
        <input type="checkbox"/>
        <Label>{label}</Label>
        </CheckBoxWrapper>
    )
}