import React from "react";
import styled from "styled-components";

const TextFieldWrapper = styled.div`
  width: 100%;
  margin: ${ChangeMargin};
`;
const Label = styled.label`
  display: block;
  color: white;
  margin: 0.5em 0;
  font-size: 1rem;
  font-weight: 700;
`;
const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 13px 1rem;
  border: none;
  border-radius: 5px;
  color: #222;
  font-size: 1em;
  line-height: 1.4;
  box-sizing: border-box;
  border: 1px solid #ddd;
`;
function ChangeMargin({NoMarginBottom}){
  return(
    NoMarginBottom ? `1rem 0 0` : `1rem 0 1.25rem;`
  );
}
function TextField({ label, placeholder, ...props}) {
  return (
    <TextFieldWrapper {...props}>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </TextFieldWrapper>
  );
}

export default TextField;
