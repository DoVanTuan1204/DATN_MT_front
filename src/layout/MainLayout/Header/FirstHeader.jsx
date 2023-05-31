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
import { navItem } from "@/src/constant";
import BarsIcon from "@/src/components/icon/Bars";

const StyledHeader = styled.header`
  background-color: #222;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  min-width: 30px;
  padding: 10px 0;
  svg {
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SideIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    display: inline-block;
    min-width: 20px;
    color: white;
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const CartWrapper = styled.div`
  display: flex;
  gap: 5px;
  border-radius: 10px;
  color: ${GreenCode};
  cursor: pointer;
`;

const Icon = styled.div`
  width: 20px;
  color: white;
  cursor: pointer;
`;

const FirstHeader = () => {
  const router = useRouter();
  const { cartProduct } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const profileUser = () => {
    if (!localStorage.getItem("profile")) {
      Router.push("/login");
    } else {
      router.push("/profile");
    }
  };
  return (
    // <StyledHeader>
    //   <Center>
    //     <Logo href={"/"}>NÔNG SẢN ĐÀ NẴNG</Logo>
    //     {navItem.map((item) => (
    //       <Link key={item.url} href={item.url}>
    //         {item.label}
    //       </Link>
    //     ))}
    //     <IconWrapper>
    //       <Icon
    //         onClick={() => {
    //           router.push("/search");
    //         }}>
    //         <IconSearch />
    //       </Icon>
    //       <Icon onClick={() => profileUser()}>
    //         <IconUser />
    //       </Icon>
    //       <CartWrapper
    //         onClick={() => {
    //           router.push("/cart");
    //         }}>
    //         <Icon>
    //           <IconCart />
    //         </Icon>
    //         <p>{cartProduct.length}</p>
    //       </CartWrapper>
    //     </IconWrapper>
    //   </Center>
    // </StyledHeader>
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>NÔNG SẢN ĐÀ NẴNG</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            {navItem.map((item) => (
              <NavLink key={item.url} href={item.url}>
                {item.label}
              </NavLink>
            ))}
          </StyledNav>
          <SideIcons>
            <Link href={"/search"}>
              <IconSearch />
            </Link>
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
            <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default FirstHeader;
