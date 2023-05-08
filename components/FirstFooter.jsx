import React from "react";
import Center from "./Center";
import styled from "styled-components";

const StyledFooter = styled.header`
  background-color: #f7f7f7;
  margin-top: 20px;
`;
const WrapperFirstFooter = styled.div`
  padding: 30px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 25px;
    font-weight: 400;
  }
`;
const RegisterEmail = styled.div`
  display: flex;
  input {
    padding: 7px;
    background-color: wheat;
    width: 15rem;
    border-radius: 10px 0 0 10px;
  }
  button {
    background-color: #ffd408;
    color: white;
    padding: 0 8px;
    border-radius: 0 10px 10px 0;
  }
`;
const FirstFooter = () => {
  return (
    <StyledFooter>
      <Center>
        <WrapperFirstFooter>
          <h1>Đăng ký nhận tin</h1>
          <RegisterEmail>
            <input placeholder="Nhập địa chỉ Email" />
            <button>Đăng ký</button>
          </RegisterEmail>
        </WrapperFirstFooter>
      </Center>
    </StyledFooter>
  );
};

export default FirstFooter;
