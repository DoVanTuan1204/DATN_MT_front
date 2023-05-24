import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Center from "../../../components/Center";
import Link from "next/link";
import IconPhone from "../../../components/icon/IconPhone";
import IconUser from "../../../components/icon/IconUser";
import { BaseOrange } from "@/public/Color";
import Router, { useRouter } from "next/router";
import StorageUtil, { STORAGE_KEY } from "@/src/util/storage";
import { CartContext } from "@/src/components/CartContext";
import SecondHeader from "./SecondHeader";
import { GreenCode } from "@/ColorCode";
import IconCart from "@/src/components/icon/IconCart";
import IconSearch from "@/src/components/icon/IconSearch";

const StyledHeader = styled.header`
  background-color: #ffffff;
  padding: 40px 0;
`;

const Logo = styled(Link)`
  color: ${GreenCode};
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
`;

const FirstNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartWrapper = styled.div`
  display: flex;
  gap: 5px;
  border-radius: 10px;
  color: ${GreenCode};
  cursor: pointer;
`;
const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.div`
  width: 20px;
  color: black;
  cursor: pointer;
`;
const FirstHeader = () => {
  const router = useRouter();
  const { cartProduct } = useContext(CartContext);
  const profileUser = () => {
    if (!localStorage.getItem("profile")) {
      Router.push("/login");
    } else {
      router.push("/profile");
    }
  };
  return (
    <StyledHeader>
      <Center>
        <FirstNav className="flex flex-row">
          <Logo href={"/"}>NÔNG SẢN ĐÀ NẴNG</Logo>
          <SecondHeader />
          <IconWrapper>
            <Icon>
              <IconSearch />
            </Icon>
            <Icon onClick={() => profileUser()}>
              <IconUser />
            </Icon>
            <CartWrapper
              onClick={() => {
                router.push("/cart");
              }}>
              <Icon>
                <IconCart />
              </Icon>
              <p>{cartProduct.length}</p>
            </CartWrapper>
          </IconWrapper>
        </FirstNav>
      </Center>
    </StyledHeader>
  );
};

export default FirstHeader;
