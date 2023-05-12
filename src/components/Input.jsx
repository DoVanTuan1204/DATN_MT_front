import styled from "styled-components";
import React from "react";

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: inherit;
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
