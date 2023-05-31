import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Center from "../../../components/Center";
import { navItem } from "@/src/constant";

const StyledHeader = styled.header`
  background-color: white;
`;

const SecondNav = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 70px;
  padding: 12px 0;
  color: black;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const SecondHeader = () => {
  return (
    <StyledHeader>
      <Center>
        <SecondNav>
          {navItem.map((item) => (
            <Link key={item.url} href={item.url}>
              {item.label}
            </Link>
          ))}
        </SecondNav>
      </Center>
    </StyledHeader>
  );
};

export default SecondHeader;
